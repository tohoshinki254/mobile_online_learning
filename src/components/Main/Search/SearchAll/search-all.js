import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';
import SectionCourses from '../../Home/SectionCourses/section-courses';
import Authors from '../../Home/Authors/authors';

const SearchAll = ({ navigation, route }) => {
    const { results } = route.params;
    const { language, theme } = useContext(SettingCommonContext);

    return (
        <View style={{ height: '100%', backgroundColor: theme ? '#212121' : '#f3f3f3', padding: 10 }}>
            {results.courses.data.length !== 0 ?
            <View>
                <SectionCourses courses={results.courses.data}
                    title={language ? "Courses" : "Các khóa học"} 
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
                <View style={{margin: 10}} />
            </View>
            : null}
            {results.instructors.data.length !== 0 ?
                <Authors authors={results.instructors.data}
                    title={language ? "Authors" : "Giảng viên"}
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
            : null}
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchAll;