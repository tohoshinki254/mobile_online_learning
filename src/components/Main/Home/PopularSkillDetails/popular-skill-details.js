import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
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
                keyword: "",
                opt: {
                    category: [item.id]
                }
            }
            search(data, setCourses);
        }
    }, [item, courses, setCourses]);

    return (
        <View style={{paddingBottom: 100, paddingLeft: 10, paddingRight: 10, paddingTop: 10, backgroundColor: theme ? '#212121' : '#f3f3f3', height: '100%'}}>
            {courses.successful ?
            <SectionCourses courses={courses.info} 
                title={`${courses.info.length} ${language ? "courses" : "khóa học"}`} 
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
            : <ActivityIndicator />}
        </View>
    )
}

const styles = StyleSheet.create({});

export default PopularSkillDetails;