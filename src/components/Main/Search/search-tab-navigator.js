import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { navName } from '../../../Global/constant';
import Search from './search';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import ListPaths from '../../ListPaths/list-paths';
import PathDetails from '../PathDetails/path-details';
import AuthorDetails from '../AuthorDetails/author-details';
import ListPathsTopic from '../../ListPaths/list-paths-topic';
import RelatedPathsCourses from '../Home/RelatedPathsCourses/related-paths-courses';

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
            />
            <SearchTabNavigation.Screen name={navName.listPaths}
                component={ListPaths}
            />
            <SearchTabNavigation.Screen name={navName.path}
                component={PathDetails}
            />
            <SearchTabNavigation.Screen name={navName.author}
                component={AuthorDetails}
            />
            <SearchTabNavigation.Screen name={navName.pathsTopic}
                component={ListPathsTopic}
            />
            <SearchTabNavigation.Screen name={navName.relatedPathsCourses}
                component={RelatedPathsCourses}
            />
        </SearchTabNavigation.Navigator>
    )
}

export default SearchTabNavigator;

const styles = StyleSheet.create({});
