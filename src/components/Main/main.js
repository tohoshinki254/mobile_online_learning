import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home/home';
import Browse from './Browse/browse';
import Search from './Search/search';
import Profile from '../AccountManagement/Profile/profile';
import { navName } from '../../Global/constant';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator initialRouteName={navName.browse}
            tabBarOptions={{
                activeTintColor: '#FF5252',
            }}
        >
            <Tab.Screen name={navName.home} 
                component={Home}
                options={{
                    tabBarLabel: navName.name,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="home" size={27} color={color} />;
                    },
                }}
            />
            <Tab.Screen name={navName.search} 
                component={Search}
                options={{
                    tabBarLabel: navName.search,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="search" size={27} color={color} />;
                    }
                }}
            />
            <Tab.Screen name={navName.browse} 
                component={Browse}
                options={{
                    tabBarLabel: navName.browse,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="folder-open" size={27} color={color} />;
                    }
                }}
            />
            <Tab.Screen name={navName.profile}
                component={Profile}
                options={{
                    tabBarLabel: navName.profile,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="user" size={27} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;