import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { navName } from '../../../Global/constant';
import Search from './search';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import AuthorDetails from '../AuthorDetails/author-details';
import Rating from '../../CourseDetail/comment';
import Exercise from '../../CourseDetail/exercise';

const SearchTabNavigation = createStackNavigator();

const SearchTabNavigator = () => {
    return (
        <SearchTabNavigation.Navigator>
            <SearchTabNavigation.Screen name={navName.search}
                component={Search}
                options={{ headerShown: false }}
            />
            <SearchTabNavigation.Screen name={navName.courseDetails}
                component={CourseDetail}
                options={{ headerShown: false }}
            />
            <SearchTabNavigation.Screen name={navName.listCourses}
                component={ListCourses}
                options={{ 
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTitleStyle: {
                        color: 'lightgray'
                    }
                }}
            />
            <SearchTabNavigation.Screen name={navName.author}
                component={AuthorDetails}
                options={{ 
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTitleStyle: {
                        color: 'lightgray'
                    }
                }}
            />
            <SearchTabNavigation.Screen name={navName.rating}
                component={Rating}
                options={{ headerShown: false }}
            />
            <SearchTabNavigation.Screen name={navName.exercises}
                component={Exercise}
                options={{ headerShown: false }}
            />
        </SearchTabNavigation.Navigator>
    )
}

export default SearchTabNavigator;

const styles = StyleSheet.create({});
