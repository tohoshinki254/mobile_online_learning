import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import SectionPaths from './SectionPaths/section-paths';
import Authors from './Authors/authors';
const Home = () => {
    const courses = [
        {
            id: '1',
            title: 'React Native',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '20 hours',
            url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: '2',
            title: 'iOS',
            author: 'Main',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
            url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
    ];

    const paths = [
        {
            id: '1',
            title: 'Managing Conflict',
            quantum: '1 course',
        },
        {
            id: '2',
            title: 'Managing Conflict',
            quantum: '2 courses',
        },
        {
            id: '3',
            title: 'Managing Conflict',
            quantum: '3 courses',
        },
        {
            id: '4',
            title: 'Managing Conflict',
            quantum: '4 courses',
        },
        {
            id: '5',
            title: 'Managing Conflict',
            quantum: '5 courses',
        },
    ];



    return (
        <ScrollView style={styles.root}>
            <SectionCourses courses={courses} title='Continue learning' type={1} hideButton={false} eventButton='See all >'/>
            <View style={{margin: 7}} />
            
            <SectionPaths paths={paths} title='Paths' type={1} hideButton={false} eventButton='See all >' />
            <View style={{margin: 7}} />

            <View style={{margin: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}}>Channels</Text>
                <View style={{marginTop: 15, flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                    <Image source={{url: 'https://icons-for-free.com/iconfiles/png/512/communication+connection+phone+radio+sign+wave+wireless-1320184554711907087.png'}} style={styles.image}/>
                    <Text style={styles.darkText}>Use channels to save, organize, and share content to accomplish your learning objectives</Text>
                </View>
            </View>
            <View style={{margin: 7}} />

            <Authors title="Top Authors" type={2} hideButton={true}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 10,
    },
});

export default Home;