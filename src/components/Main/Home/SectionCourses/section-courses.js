import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import SectionCoursesItem1 from '../SectionCoursesItem/section-courses-item1';
import SectionCoursesItem2 from '../SectionCoursesItem/section-courses-item2';

const SectionCourses = ({title, type}) => {
    const courses = [
        {
            id: '1',
            title: 'React Native',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '20 hours',
        },
        {
            id: '2',
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: '3',
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        }
    ];

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
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            {type === 1 ?
                <FlatList 
                    data={courses}
                    renderItem={({item}) => <SectionCoursesItem1 item={item}/>}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
                :
                <ScrollView horizontal={true}>
                    {renderListItems(courses)}
                </ScrollView>
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