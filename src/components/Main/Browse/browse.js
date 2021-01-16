import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import ImageButton from '../../Common/image-button';
import RadiusButton from '../../Common/radius-button';
import Authors from '../Home/Authors/authors';
import SectionCourses from '../Home/SectionCourses/section-courses';
import { navName } from '../../../Global/constant';
import { getInstructors } from '../../../actions/instructor-actions';
import { getAllCategory } from '../../../actions/category-actions';
import { getTopSell, getTopRate } from '../../../actions/course-actions';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Browse = ({ navigation }) => {
    const { language, theme } = useContext(SettingCommonContext);

    const [topRate, setTopRate] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const data = {
            limit: 20,
            page: 1
        };
        if (!topRate.successful) {
            getTopRate(data, setTopRate);
        }
    }, [setTopRate]);

    const [topSell, setTopSell] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const data = {
            limit: 20,
            page: 1
        };
        if (!topSell.successful) {
            getTopSell(data, setTopSell);
        }   
    }, [setTopSell]);

    const [category, setCategory] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!category.successful) {
            getAllCategory(setCategory);
        }
    }, [setCategory]);

    const [authors, setAuthors] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!authors.successful) {
            getInstructors(setAuthors);
        }
    }, [setAuthors]);

    const navigateSkill = (item) => {
        navigation.navigate(navName.skill, { item: item });
    }

    const renderListSkills = (list) => {
        return list.map(item => 
            <RadiusButton onPress={() => navigateSkill(item)} text={item.name} />
        );
    }

    return (
        <ScrollView style={styles.root(theme)} showsVerticalScrollIndicator={false}>
            <ImageButton 
                title={language ? "NEW RELEASE" : "MỚI CẬP NHẬT"} 
                onPress={() => navigation.navigate(navName.newRelease)}
                URL="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                fontSize={24}
            />
            <View style={{padding: 7}} />
            <ImageButton 
                title={language ? "RECOMMENDED FOR YOU" : "GỢI Ý CHO BẠN"}
                onPress={() => navigation.navigate(navName.recommend)}
                URL="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80"
                fontSize={24}
            />

            <View style={{margin: 17}} />
            {category.list.length !== 0 ? 
            <View>
                <Text style={styles.title(theme)}>{language ? "Categories" : "Các lĩnh vực"}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {renderListSkills(category.list)}
                </ScrollView>
            </View>
            : <ActivityIndicator />}
            
            <View style={{margin: 17}} />
            {topSell.courses.length !== 0 ?
                <SectionCourses courses={topSell.courses} 
                    title={language ? "Top sell" : "Khóa học bán chạy"}
                    type={1} 
                    hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                    navigation={navigation}
                />
            : <ActivityIndicator />}

            <View style={{margin: 17}} />
            {topRate.courses.length !== 0 ?
                <SectionCourses courses={topRate.courses} 
                    title={language ? "Top rate" : "Khóa học nổi bật"} 
                    type={1} 
                    hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                    navigation={navigation}
                />
            : <ActivityIndicator />}

            <View style={{margin: 17}} />
            {authors.list.length !== 0 ? 
                <Authors authors={authors.list}
                    title={language ? "Authors" : "Giảng viên"} 
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
            : <ActivityIndicator />}

            <View style={{margin: 17}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            marginTop: 22,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 6,
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
    },
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 13,
        }
    }
});

export default Browse;