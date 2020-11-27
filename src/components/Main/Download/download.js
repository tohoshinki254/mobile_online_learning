import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';

const Download = ({ route, navigation }) => {
    const { courses } = route.params;

    const renderEmptyCourses = () => {
        return (
            <View style={{margin: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 35, marginBottom: 20}}>Downloads</Text>
                <Text style={styles.title}>Watch your courses on the go!</Text>
                <Text style={styles.darkText}>Download courses so you can continue to skill up - even when you're offline</Text>
            </View>
        )
    }

    return (
        <View style={{margin: 10}}>
            {(courses === undefined || courses.length == 0) ? renderEmptyCourses() :
            <View style={{marginBottom: 150}}>
                <SectionCourses courses={courses} 
                    title='' 
                    type={2} 
                    hideButton={false} eventButton='Remove all'
                    navigation={navigation}
                />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 18,
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 3,
    },

});

export default Download;
