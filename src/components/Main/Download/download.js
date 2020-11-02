import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';

const Download = () => {
    const courses = [
        {
            id: '1',
            title: 'React Native',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '20 hours',
        },
        {
            id: '2',
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: '3',
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        }
    ];

    const renderEmptyCourses = () => {
        return (
            <View style={{margin: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 40, marginBottom: 20}}>Downloads</Text>
                <Text style={styles.title}>Watch your courses on the go!</Text>
                <Text style={styles.darkText}>Download courses so you can continue to skill up - even when you're offline</Text>
            </View>
        )
    }

    return (
        <View>
            {(courses === undefined || courses.length == 0) ? renderEmptyCourses() :
                <SectionCourses courses={courses} title='Downloads' type={2} hideButton={false} eventButton='Remove all'/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 18
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 3,
    },

});

export default Download;
