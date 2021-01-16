import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navName } from '../../../../Global/constant';
import SearchAll from '../SearchAll/search-all';
import SearchCourses from '../SearchCourses/search-courses';
import SearchAuthors from '../SearchAuthors/search-authors';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const Tab = createMaterialTopTabNavigator();

const SearchTabResults = ({ results }) => {
    const { language, theme } = useContext(SettingCommonContext);

    return (
        <Tab.Navigator
            initialRouteName={language ? navName.searchAll : 'Tất cả'}
            tabBarOptions={{
                activeTintColor: theme ? '#fff' : '#FF5252',
                inactiveTintColor: theme ? '#fff' : '#757575',
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 15
                },
                style: {
                    backgroundColor: theme ? '#212121' : '#f3f3f3'
                },
                indicatorStyle: {
                    backgroundColor: '#EF5350',
                    elevation: 10,
                },
            }}
        >
            <Tab.Screen name={language ? navName.searchAll : 'Tất cả'} 
                component={SearchAll} 
                initialParams={{ results: results }}
            />
            <Tab.Screen name={language ? navName.searchCourses : 'Khóa học'} 
                component={SearchCourses} 
                initialParams={{ courses: results.courses.data }}
            />
            <Tab.Screen name={language ? navName.searchAuthors : 'Giảng viên'} 
                component={SearchAuthors} 
                initialParams={{ authors: results.instructors.data }}
            />
        </Tab.Navigator>
    )
}

export default SearchTabResults;