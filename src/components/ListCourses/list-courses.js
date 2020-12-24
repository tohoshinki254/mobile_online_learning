import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../Main/Home/SectionCourses/section-courses';
import { SettingCommonContext } from '../../providers/setting-common-provider';

const ListCourses = ({ navigation, route }) => {
    const { language, theme } = useContext(SettingCommonContext);
    const courses = route.params?.courses;
    const title = `${courses.length} ${language ? "courses" : "khóa học"}`;
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
        marginBottom: 100
    },
});

export default ListCourses;