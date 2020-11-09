import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SectionCourses from '../SectionCourses/section-courses';
import SectionPaths from '../SectionPaths/section-paths';

const RelatedPathsCourses = ({ navigation }) => {
    const courses = [
        {
            id: '1',
            title: 'React Native',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '20 hours',
            url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '2',
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
            url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
    ];

    const paths = [
        {
            id: '1',
            title: 'Managing Conflict',
            quantum: '1 course',
        },
    ];

    return (
        <ScrollView style={styles.root}>
            <SectionPaths paths={paths} 
                title='Paths' 
                type={2} 
                hideButton={true}
                navigation={navigation} 
            />
            <View style={{margin: 17}} />
            <SectionCourses courses={courses} 
                title='Courses' 
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
})

export default RelatedPathsCourses
