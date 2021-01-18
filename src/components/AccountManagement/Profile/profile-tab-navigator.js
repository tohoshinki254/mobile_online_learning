import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navName } from '../../../Global/constant';
import Profile from './profile';
import PopularSkillDetails from '../../Main/Home/PopularSkillDetails/popular-skill-details';
import CourseDetail from '../../CourseDetail/course-detail';
import ListCourses from '../../ListCourses/list-courses';
import AuthorDetails from '../../Main/AuthorDetails/author-details';
import Download from '../../Main/Download/download';
import Setting from '../Setting/setting';
import UpdateProfile from './update-profile';
import Rating from '../../CourseDetail/comment';
import Exercise from '../../CourseDetail/exercise';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const ProfileTabNavigation = createStackNavigator();

const ProfileTabNavigator = () => {
    const { theme } = useContext(SettingCommonContext);

    return (
        <ProfileTabNavigation.Navigator initialRouteName={navName.profile}>
            <ProfileTabNavigation.Screen name={navName.profile}
                component={Profile}
                options={{ headerShown: false }}
            />
            <ProfileTabNavigation.Screen name={navName.skill}
                component={PopularSkillDetails}
                options={{ 
                    headerStyle: {
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
                    }
                }}
            />
            <ProfileTabNavigation.Screen name={navName.courseDetails}
                component={CourseDetail}
                options={{ headerShown: false }}
            />
            <ProfileTabNavigation.Screen name={navName.listCourses}
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
            <ProfileTabNavigation.Screen name={navName.author}
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
            <ProfileTabNavigation.Screen name={navName.download}
                component={Download}
                options={{ 
                    headerStyle: {
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
                    }
                }}
            />
            <ProfileTabNavigation.Screen name={navName.setting}
                component={Setting}
                options={{ 
                    headerStyle: {
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
                    }
                }}
            />
            <ProfileTabNavigation.Screen name={navName.updateProfile}
                component={UpdateProfile}
                options={{ 
                    headerStyle: {
                        backgroundColor: theme ? '#212121' : '#f3f3f3',
                    },
                    headerTitleStyle: {
                        color: theme ? 'lightgray' : '#000'
                    }
                }}
            />
            <ProfileTabNavigation.Screen name={navName.rating}
                component={Rating}
                options={{ headerShown: false }}
            />
            <ProfileTabNavigation.Screen name={navName.exercises}
                component={Exercise}
                options={{ headerShown: false }}
            />
        </ProfileTabNavigation.Navigator>
    )
}

export default ProfileTabNavigator;
