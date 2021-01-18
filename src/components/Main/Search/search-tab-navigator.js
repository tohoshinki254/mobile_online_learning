import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { navName } from '../../../Global/constant';
import Search from './search';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import AuthorDetails from '../AuthorDetails/author-details';
import Rating from '../../CourseDetail/comment';
import Exercise from '../../CourseDetail/exercise';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const SearchTabNavigation = createStackNavigator();

const SearchTabNavigator = () => {
    const { theme } = useContext(SettingCommonContext);

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
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
                    }
                }}
            />
            <SearchTabNavigation.Screen name={navName.author}
                component={AuthorDetails}
                options={{ 
                    headerStyle: {
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
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
