import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

const SectionCourses = ({title}) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '20 hours',
        },
        {
            id: 2,
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: 3,
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        }
    ];

    const renderListItems = (courses) => {
        return courses.map(item => 
            <SectionCoursesItem item={item} />
        );
    }

    return (
        <View>
            <View>
                <Text>{title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItems(courses)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SectionCourses;