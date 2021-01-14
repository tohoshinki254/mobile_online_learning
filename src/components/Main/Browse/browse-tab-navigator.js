import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navName } from '../../../Global/constant';
import Browse from './browse';
import NewReleases from '../Home/NewReleases/new-releases';
import PopularSkillDetails from '../Home/PopularSkillDetails/popular-skill-details';
import CourseDetail from '../../CourseDetail/course-detail';
import AuthorDetails from '../AuthorDetails/author-details';
import ListCourses from '../../ListCourses/list-courses';
import RecommendCourses from '../Home/RecommendCourses/recommend-courses';
import Rating from '../../CourseDetail/comment';

const BrowseTabNavigation = createStackNavigator();

const BrowseTabNavigator = () => {
    return (
        <BrowseTabNavigation.Navigator initialRouteName={navName.browse}>
            <BrowseTabNavigation.Screen name={navName.browse}
                component={Browse}
                options={{ headerShown: false }}
            />
            <BrowseTabNavigation.Screen name={navName.newRelease}
                component={NewReleases}
                options={{ 
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTitleStyle: {
                        color: 'lightgray'
                    }
                }}
            />
            <BrowseTabNavigation.Screen name={navName.skill}
                component={PopularSkillDetails}
                options={{ 
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTitleStyle: {
                        color: 'lightgray'
                    }
                }}
            />
            <BrowseTabNavigation.Screen name={navName.courseDetails}
                component={CourseDetail}
                options={{ headerShown: false }}
            />
            <BrowseTabNavigation.Screen name={navName.author}
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
            <BrowseTabNavigation.Screen name={navName.listCourses}
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
            <BrowseTabNavigation.Screen name={navName.recommend}
                component={RecommendCourses}
                options={{ 
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTitleStyle: {
                        color: 'lightgray'
                    }
                }}
            />
            <BrowseTabNavigation.Screen name={navName.rating}
                component={Rating}
                options={{ headerShown: false }}
            />
        </BrowseTabNavigation.Navigator>
    )
}

export default BrowseTabNavigator;
