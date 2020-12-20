import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import AuthorDetails from '../AuthorDetails/author-details';
import RelatedPathsCourses from '../Home/RelatedPathsCourses/related-paths-courses';
import { navName } from '../../../Global/constant';

const HomeTabNavigationStack = createStackNavigator();

const HomeTabNavigator = () => {
    return (
        <HomeTabNavigationStack.Navigator initialRouteName={navName.home}>
            <HomeTabNavigationStack.Screen name={navName.home}
                component={Home}
                options={{headerShown: false}}
            />
            <HomeTabNavigationStack.Screen name={navName.courseDetails}
                component={CourseDetail}
                options={{ headerShown: false }}
            />
            <HomeTabNavigationStack.Screen name={navName.listCourses}
                component={ListCourses}
            />
            <HomeTabNavigationStack.Screen name={navName.author}
                component={AuthorDetails}
            />
            <HomeTabNavigationStack.Screen name={navName.relatedPathsCourses}
                component={RelatedPathsCourses}
            />
        </HomeTabNavigationStack.Navigator>
    )
}

export default HomeTabNavigator;
