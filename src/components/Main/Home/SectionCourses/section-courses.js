import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import SectionCoursesItem1 from '../SectionCoursesItem/section-courses-item1';
import SectionCoursesItem2 from '../SectionCoursesItem/section-courses-item2';

const SectionCourses = ({courses, title, type, hideButton, eventButton}) => {
    const renderListItems = (courses) => {
        return courses.map(item => 
            <SectionCoursesItem2 item={item} />
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

    return (
        <View>
            {type === 2 ?
                <View>
                    <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', margin: 10}}>
                        <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
                        {hideButton ? null : 
                            <TouchableOpacity 
                                style={{backgroundColor: '#FF5252', 
                                    padding: 4, borderRadius: 50, minWidth: 80,
                                    justifyContent: 'center', alignItems: 'center'
                                }}
                                onPress={() => {}}
                            >
                                <Text style={{color: 'white', fontSize: 13}}>{eventButton}</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <FlatList 
                        data={courses}
                        renderItem={({item}) => <SectionCoursesItem1 item={item}/>}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
                </View>
                :
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <ScrollView horizontal={true}>
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