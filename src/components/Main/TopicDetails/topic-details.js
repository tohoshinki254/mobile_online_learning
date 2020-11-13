import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';
import SectionPaths from '../Home/SectionPaths/section-paths';
import Authors from '../Home/Authors/authors';
import RadiusButton from '../../Common/radius-button';
import { navName } from '../../../Global/constant';

const TopicDetails = ({ navigation }) => {
    const skills = [
        'Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Patterns',
        'Python', 'React', '.NET', 'SQL Server', 'Database Administration', 'Part Modeling'
    ];

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
    ];

    const authors = [
        {
            id: '1',
            name: 'Scott Allen 1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '10 courses'
        },
        {
            id: '2',
            name: 'Scott Allen 2',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '11 courses'
        },
        {
            id: '3',
            name: 'Scott Allen 3',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '12 courses'
        },
        {
            id: '4',
            name: 'Scott Allen 4',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '13 courses'
        },
        {
            id: '5',
            name: 'Scott Allen 5',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '14 courses'
        },
    ];

    const renderListSkills = (skills) => {
        return skills.map(item => 
            <RadiusButton onPress={() => navigation.push(navName.skill)} text={item} />
        );
    }

    return (
        <ScrollView>
            <ImageBackground style={styles.image} source={{url: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}>
                <View style={styles.back}>
                    <Text style={[styles.text, {fontSize: 30}]}>DATA PROFESSIONAL</Text>
                </View>
            </ImageBackground>
            <View style={{margin: 5}} />
            
            <View style={{margin: 10}}>
                <Text style={styles.title}>Popular skills</Text>
                <ScrollView horizontal={true}>
                    {renderListSkills(skills)}
                </ScrollView>
                <View style={{margin: 15}} />
                
                <SectionPaths paths={paths} 
                    title='Paths' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
                <View style={{margin: 10}} />
                
                <SectionCourses courses={courses} 
                    title='New' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
                <View style={{margin: 10}} />
                
                <SectionCourses courses={courses} 
                    title='Trending' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
                <View style={{margin: 10}} />
                
                <Authors authors={authors}
                    title="Top Authors" 
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
                <View style={{margin: 17}} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 170,
    },
    back: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.2 )',
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default TopicDetails;