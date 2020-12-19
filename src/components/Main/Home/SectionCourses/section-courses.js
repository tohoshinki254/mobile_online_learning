import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import SectionCoursesItem1 from '../SectionCoursesItem/section-courses-item1';
import SectionCoursesItem2 from '../SectionCoursesItem/section-courses-item2';
import { navName } from '../../../../Global/constant';

const SectionCourses = ({courses, title, type, hideButton, eventButton, navigation}) => {
    const renderListItems = (courses) => {
        return courses.map(item => 
            <SectionCoursesItem2 item={item} navigation={navigation}/>
        );
    }

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

    const handleButton = () => {
        if (eventButton === "See all >") {
            navigation.push(navName.listCourses, { courses: courses });
        }

        if (eventButton === "Remove all") {

        }
    }

    return (
        <View>
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
                {hideButton ? null : 
                    <TouchableOpacity 
                        style={{backgroundColor: '#FF5252', 
                            padding: 4, borderRadius: 50, minWidth: 80,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => handleButton()}
                    >
                        <Text style={{color: 'white', fontSize: 13}}>{eventButton}</Text>
                    </TouchableOpacity>
                }
            </View>
            {type === 2 ?
                <View>
                    <FlatList 
                        data={courses}
                        renderItem={({item}) => <SectionCoursesItem1 item={item} navigation={navigation}/>}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
                </View>
                :
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {renderListItems(courses)}
                    </ScrollView>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
    }
});

export default SectionCourses;