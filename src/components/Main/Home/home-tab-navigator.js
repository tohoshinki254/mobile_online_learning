import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import AuthorDetails from '../AuthorDetails/author-details';
import Rating from '../../CourseDetail/comment';
import Exercise from '../../CourseDetail/exercise';
import { navName } from '../../../Global/constant';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const HomeTabNavigationStack = createStackNavigator();

const HomeTabNavigator = () => {
    const { theme } = useContext(SettingCommonContext);

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
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
                    }
                }}
            />
            <HomeTabNavigationStack.Screen name={navName.author}
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
