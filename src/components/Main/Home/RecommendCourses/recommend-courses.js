import React, { useEffect, useState, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { AuthenticationContext } from '../../../../providers/authentication-provider';
import { getRecommendCourses } from '../../../../actions/user-actions'
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const RecommendCourses = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);

    const [status, setStatus] = useState({
        successful: false,
        courses: []
    });
    
    useEffect(() => {
        const limit = 20;
        const offset = 1;
        if (!status.successful) {
            getRecommendCourses(authContext.state.userInfo.id, limit, offset, setStatus);
        }
    }, [status, setStatus, authContext])

    return (
        <View style={{paddingBottom: 100, paddingLeft: 10, paddingRight: 10, paddingTop: 10, backgroundColor: theme ? '#212121' : '#f3f3f3', height: '100%'}}>
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

export default RecommendCourses;