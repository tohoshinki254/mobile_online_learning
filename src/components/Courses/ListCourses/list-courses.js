import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, SectionList } from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';

const ListCourses = () => {
    const courses = [
        {
            title: 'Mobile',
            data: [
                {
                    id: 1,
                    title: 'React Native',
                    author: 'Main',
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '20 hours',
                },
                {
                    id: 2,
                    title: 'iOS',
                    author: 'Main',
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                },
                {
                    id: 3,
                    title: 'iOS',
                    author: 'Main',
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                }
            ]
        },
        {
            title: 'Web',
            data: [
                {
                    id: 1,
                    title: 'React Native',
                    author: 'Main',
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '20 hours',
                },
                {
                    id: 2,
                    title: 'iOS',
                    author: 'Main',
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                },
                {
                    id: 3,
                    title: 'iOS',
                    author: 'Main',
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                }
            ]
        }
    ];

    const searchView = () => {
        return <View style={{flexDirection: 'row', margin: 5}}>
            <TextInput style={{flex: 1, borderWidth: 1, borderColor: 'grey'}} placeholder="Search text" />
            <Button onPress={() => {
                console.log("search");
            }} title="Search" style={{width: 60, height: 40}}/>
        </View>
    }

    return (
        <View>
            {/* <FlatList 
                data={courses}
                renderItem={({item}) => <ListCoursesItem item={item}/>}
                ListHeaderComponent={() => searchView()}
            /> */}

            <SectionList 
                sections={courses}
                renderItem={({item}) => <ListCoursesItem item={item} />}
                renderSectionHeader={({section: {title}}) => <View style={{backgroundColor: 'white'}}><Text>{title}</Text></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ListCourses;


