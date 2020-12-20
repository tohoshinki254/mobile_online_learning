import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import Authors from './Authors/authors';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { getProcessCourses, getFavoriteCourses } from '../../../actions/user-actions';
import { getInstructors } from '../../../actions/instructor-actions';
import { getNewCourses, getCourseFollowFavoriteCategories } from '../../../actions/course-actions';

const Home = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);

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

    const [newReleases, setNewReleases] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const limit = 20;
        const page = 1;
        if (!newReleases.successful) {
            getNewCourses(limit, page, setNewReleases);
        }
    }, [newReleases, setNewReleases])

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
                    title='Continue learning' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
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
                    title='Favorite Categories' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
            : null}
            <View style={{margin: 7}} />

            {favoriteCourses.courses.length !== 0 ?
                <SectionCourses courses={favoriteCourses.courses} 
                    title='Like' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
            : null}
            <View style={{margin: 7}} />

            <Authors authors={authors.list}
                title="Top Authors" 
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