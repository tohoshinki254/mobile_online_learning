import React, { useEffect, useState, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
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
        <View style={{paddingBottom: 100, paddingLeft: 10, paddingRight: 10, paddingTop: 10, backgroundColor: theme ? '#212121' : '#fff', height: '100%'}}>
            {status.successful ?
                <SectionCourses courses={status.courses} 
                    title={status.courses.length + (language ? " courses" : " khóa học")} 
                    type={2} 
                    hideButton={true} 
                    navigation={navigation}
                />
            : <ActivityIndicator />}
        </View>
    )
}

export default NewReleases;