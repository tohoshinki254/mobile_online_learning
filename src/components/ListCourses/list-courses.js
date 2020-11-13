import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../Main/Home/SectionCourses/section-courses';

const ListCourses = ({ navigation, route }) => {
    const courses = route.params?.courses;
    const title = `${courses.length} courses`;
    return (
        <View style={styles.root}>
            <SectionCourses courses={courses} 
                title={title} 
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