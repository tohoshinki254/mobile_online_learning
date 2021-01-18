import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';
import SectionCourses from '../../Home/SectionCourses/section-courses';

const SearchCourses = ({ navigation, route }) => {
    const { language, theme } = useContext(SettingCommonContext);

    return (
        <View style={{ height: '100%', backgroundColor: theme ? '#212121' : '#f3f3f3' }}>
            {route.params.courses.length !== 0 ?
            <View style={{ padding: 10 }}>
                <SectionCourses courses={route.params.courses} 
                    title={`${route.params.courses.length} ${language ? "courses" : "khóa học"}`} 
                    type={2} 
                    hideButton={true}
                    navigation={navigation}
                />
            </View>
            :
            <View style={{ margin: 20 }}>
                <Text 
                    style={{fontSize: 20, marginTop: 40, color: theme ? 'lightgray' : '#616161', textAlign: 'center'}}
                >
                    {language ? `No matching results were found`  : `Không tìm thấy kết quả phù hợp`}
                </Text>
            </View>
            }
        </View>
        
    )
}

const styles = StyleSheet.create({});

export default SearchCourses;