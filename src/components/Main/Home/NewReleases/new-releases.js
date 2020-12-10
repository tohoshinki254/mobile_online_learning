import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { getNewCourses } from '../../../../actions/course-actions';

const NewReleases = ({ navigation }) => {
    const [status, setStatus] = useState({
        successful: false,
        courses: null
    });
    
    useEffect(() => {
        const limit = 20;
        const page = 1;
        if (!status.successful) {
            getNewCourses(limit, page, setStatus);
        }
    }, [status, setStatus])

    return (
        <View style={{marginBottom: 80}}>
            <SectionCourses courses={status.courses} type={2} hideButton={true} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default NewReleases;