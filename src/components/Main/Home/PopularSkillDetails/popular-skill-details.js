import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { searchV2 } from '../../../../actions/course-actions';

const PopularSkillDetails = ({ navigation, route }) => {
    const name = route.params.name;
    const [courses, setCourses] = useState({ successful: false, info: [] });

    useEffect(() => {
        if (!courses.successful) {
            searchV2(name, setCourses);
        }
    }, [name, courses, setCourses]);

    return (
        <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
            {courses.successful ?
            <SectionCourses courses={courses.info.courses.data} 
                title={`${courses.info.courses.data.length} courses`} 
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
            : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default PopularSkillDetails;