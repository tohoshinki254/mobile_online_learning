import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';
import SectionCoursesItem1 from '../../Home/SectionCoursesItem/section-courses-item1';

const screenHeight = Math.round(Dimensions.get('window').height);

const SearchCourses = ({ navigation, route }) => {
    const { language, theme } = useContext(SettingCommonContext);

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 15,
              borderRadius: 50,
            }}
          />
        );
    }

    return (
            route.params.courses.length !== 0 ?
            <View style={styles.root(theme)}>
                <Text style={{color: theme ? 'lightgray' : '#616161', fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>{`${route.params.courses.length} ${language ? "courses" : "khóa học"}`}</Text>
                <FlatList 
                    data={route.params.courses}
                    renderItem={({item}) => <SectionCoursesItem1 item={item} navigation={navigation}/>}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    showsVerticalScrollIndicator={false}
                    style={{ height: (screenHeight - 350) }}
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
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            height: '100%',  
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
    }
});

export default SearchCourses;