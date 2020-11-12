import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCourses from '../../ListCourses/list-courses';
import ListPathsTopic from '../../ListPaths/list-paths-topic';
import Authors from '../Home/Authors/authors';

const Tab = createMaterialTopTabNavigator();

const StackSearch = () => {
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

    const authors = [
        {
            id: '1',
            name: 'Scott Allen 1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '10 courses'
        },
        {
            id: '2',
            name: 'Andrea Martin',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '11 courses'
        },
    ];

    return (
        <Tab.Navigator initialRouteName="All"
            lazy={true}
            tabBarOptions={{
                activeTintColor: '#EF5350',
                inactiveTintColor: '#616161',
                indicatorStyle: {
                    backgroundColor: '#EF5350',
                    elevation: 10,
                },
            }}
        >
            <Tab.Screen name="Courses"
                component={ListCourses}
                options={{ 
                    tabBarLabel: ({color}) => (
                        <View>
                            <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>Courses</Text>
                        </View>
                    )
                }}
                initialParams={{ courses: courses}}
            />
            <Tab.Screen name="Paths"
                component={ListPathsTopic}
                options={{ 
                    tabBarLabel: ({color}) => (
                        <View>
                            <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>Paths</Text>
                        </View>
                    )
                }}
                initialParams={{ paths: paths }}
            />
            <Tab.Screen name="Authors"
                component={Authors}
                options={{ 
                    tabBarLabel: ({color}) => (
                        <View>
                            <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>Authors</Text>
                        </View>
                    )
                }}
                initialParams={{ 
                    authors: authors,
                    type: 2,
                    hideButton: true,
                    title: `${authors.length} results`,
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({});

export default StackSearch;
