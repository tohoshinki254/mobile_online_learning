import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { getNewCourses } from '../../../../actions/course-actions';

const NewReleases = ({ navigation }) => {
    const [status, setStatus] = useState({
        successful: false,
        courses: []
    });
    
    useEffect(() => {
        const limit = 20;
        const page = 1;
        if (!status.successful) {
            getNewCourses(limit, page, setStatus);
        }
    }, [status, setStatus])

    return (
        <View style={{marginBottom: 100, marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <SectionCourses courses={status.courses} title={status.courses.length + " courses"} type={2} hideButton={true} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default NewReleases;