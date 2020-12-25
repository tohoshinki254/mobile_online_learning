import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { search } from '../../../../actions/course-actions';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const PopularSkillDetails = ({ navigation, route }) => {
    const { item } = route.params;
    const { language, theme } = useContext(SettingCommonContext);
    const [courses, setCourses] = useState({ successful: false, info: [] });

    useEffect(() => {
        if (!courses.successful) {
            const data = {
                
            }
            search(name, setCourses);
        }
    }, [name, courses, setCourses]);

    return (
        <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
            {courses.successful ?
            <SectionCourses courses={courses.info.courses.data} 
                title={`${courses.info.courses.data.length} ${language ? "courses" : "khóa học"}`} 
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