import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import Authors from './Authors/authors';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { getProcessCourses, getFavoriteCourses } from '../../../actions/user-actions';
import { getInstructors } from '../../../actions/instructor-actions';
import { getCourseFollowFavoriteCategories } from '../../../actions/course-actions';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Home = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);

    const [followCategories, setFollowCategories] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const data = {
            userId: authContext.state.userInfo.id
        };
        if (!followCategories.successful) {
            getCourseFollowFavoriteCategories(data, setFollowCategories);
        }
    }, [followCategories, setFollowCategories]);

    const [favoriteCourses, setFavoriteCourses] = useState({ successful: false, courses: [] });
    useEffect(() => {
        if (!favoriteCourses.successful) {
            getFavoriteCourses(authContext.state.token, setFavoriteCourses);
        }
    }, [favoriteCourses, setFavoriteCourses])

    const [authors, setAuthors] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!authors.successful && authors.list.length === 0) {
            getInstructors(setAuthors);
        }
    }, [authors, setAuthors])

    const [continueCourses, setContinueCourses] = useState({ successful: false, courses: [] });
    useEffect(() => {
        if (!continueCourses.successful && continueCourses.courses.length === 0) {
            getProcessCourses(authContext.state.token, setContinueCourses);
        }
    }, [authContext, continueCourses, setContinueCourses])

    const renderContinueCourses = () => {
        if (continueCourses.courses.length !== 0) {
            return <View>
                <SectionCourses courses={continueCourses.courses} 
                    title={language ? "Continue learning" : "Đang học"}
                    type={1} 
                    hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                    navigation={navigation}
                />
                <View style={{margin: 7}} />
            </View>
        }
    }

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            {renderContinueCourses()}
            
            {followCategories.courses.length !== 0 ?
                <SectionCourses courses={followCategories.courses} 
                    title={language ? "Favorite Categories" : "Lĩnh vực yêu thích"} 
                    type={1} 
                    hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                    navigation={navigation}
                />
            : null}
            <View style={{margin: 7}} />

            {favoriteCourses.courses.length !== 0 ?
                <SectionCourses courses={favoriteCourses.courses} 
                    title={language ? "Like" : "Yêu thích"} 
                    type={1} 
                    hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                    navigation={navigation}
                />
            : null}
            <View style={{margin: 7}} />

            <Authors authors={authors.list}
                title={language ? "Authors" : "Giảng viên"}
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 24,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 6
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 10,
    },
});

export default Home;