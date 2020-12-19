import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';
import { AuthenticationContext } from '../../../../providers/authentication-provider';
import { getRecommendCourses } from '../../../../actions/user-actions'

const RecommendCourses = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);

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
        <View style={{marginBottom: 90, marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <SectionCourses courses={status.courses} title={status.courses.length + " courses"} type={2} hideButton={true} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default RecommendCourses;