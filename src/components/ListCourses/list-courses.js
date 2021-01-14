import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../Main/Home/SectionCourses/section-courses';
import { SettingCommonContext } from '../../providers/setting-common-provider';

const ListCourses = ({ navigation, route }) => {
    const { language, theme } = useContext(SettingCommonContext);
    const courses = route.params?.courses;
    const title = `${courses.length} ${language ? "courses" : "khóa học"}`;
    return (
        <View style={styles.root(theme)}>
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
    root: (theme) => {
        return {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 100,
            backgroundColor: theme ? '#212121' : '#fff'
        }
    },
});

export default ListCourses;