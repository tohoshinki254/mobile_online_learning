import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../Main/Home/SectionCourses/section-courses';

const ListCourses = ({ navigation }) => {
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

    return (
        <View style={styles.root}>
            <SectionCourses courses={courses} 
                title='' 
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default ListCourses;