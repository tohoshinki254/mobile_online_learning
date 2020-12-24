import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { getNewCourses } from '../../../../actions/course-actions';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const NewReleases = ({ navigation }) => {
    const { language, theme } = useContext(SettingCommonContext);
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
            <SectionCourses courses={status.courses} title={status.courses.length + (language ? " courses" : " khóa học")} type={2} hideButton={true} navigation={navigation}/>
        </View>
    )
}

export default NewReleases;