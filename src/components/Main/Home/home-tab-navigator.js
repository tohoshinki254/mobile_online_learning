import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import AuthorDetails from '../AuthorDetails/author-details';
import Rating from '../../CourseDetail/comment';
import Exercise from '../../CourseDetail/exercise';
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
                options={{ 
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTitleStyle: {
                        color: 'lightgray'
                    }
                }}
            />
            <HomeTabNavigationStack.Screen name={navName.author}
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
            <HomeTabNavigationStack.Screen name={navName.rating}
                component={Rating}
                options={{ headerShown: false }}
            />
            <HomeTabNavigationStack.Screen name={navName.exercises}
                component={Exercise}
                options={{ headerShown: false }}
            />
        </HomeTabNavigationStack.Navigator>
    )
}

export default HomeTabNavigator;
