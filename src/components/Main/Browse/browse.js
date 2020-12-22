import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ImageButton from '../../Common/image-button';
import RadiusButton from '../../Common/radius-button';
import Authors from '../Home/Authors/authors';
import SectionCourses from '../Home/SectionCourses/section-courses';
import { navName } from '../../../Global/constant';
import { getInstructors } from '../../../actions/instructor-actions';
import { getAllCategory } from '../../../actions/category-actions';
import { getTopSell, getTopRate } from '../../../actions/course-actions';

const Browse = ({ navigation }) => {
    const [topRate, setTopRate] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const data = {
            limit: 20,
            page: 1
        };
        if (!topRate.successful) {
            getTopRate(data, setTopRate);
        }
    }, [topRate, setTopRate]);

    const [topSell, setTopSell] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const data = {
            limit: 20,
            page: 1
        };
        if (!topSell.successful) {
            getTopSell(data, setTopSell);
        }
    }, [topSell, setTopSell]);

    const [category, setCategory] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!category.successful && category.list.length === 0) {
            getAllCategory(setCategory);
        }
    }, [category, setCategory])

    const [authors, setAuthors] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!authors.successful && authors.list.length === 0) {
            getInstructors(setAuthors);
        }
    }, [authors, setAuthors])


    const navigateSkill = (name) => {
        navigation.navigate(navName.skill, { name: name });
    }

    const renderListSkills = (list) => {
        return list.map(item => 
            <RadiusButton onPress={() => navigateSkill(item.name)} text={item.name} />
        );
    }

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <ImageButton 
                title='NEW RELEASES' 
                onPress={() => navigation.navigate(navName.newRelease)}
                URL="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                fontSize={24}
            />
            <View style={{padding: 7}} />
            <ImageButton 
                title='RECOMMENDED FOR YOU'
                onPress={() => navigation.navigate(navName.recommend)}
                URL="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80"
                fontSize={24}
            />

            <View style={{margin: 17}} />
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderListSkills(category.list)}
            </ScrollView>
            
            <View style={{margin: 17}} />
            {topSell.courses.length !== 0 ?
                <SectionCourses courses={topSell.courses} 
                    title='Top sell' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
            : null}

            <View style={{margin: 17}} />
            {topRate.courses.length !== 0 ?
                <SectionCourses courses={topRate.courses} 
                    title='Top rate' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
            : null}

            <View style={{margin: 17}} />
            {authors.list.length !== 0 ? 
                <Authors authors={authors.list}
                    title="Top Authors" 
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
            : null}

            <View style={{margin: 17}} />
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
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    }
});

export default Browse;