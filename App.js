import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';
import Main from './src/components/Main/main';
import Profile from './src/components/AccountManagement/Profile/profile';
import NewReleases from './src/components/Main/Home/NewReleases/new-releases';
import Skill from './src/components/Main/Home/PopularSkillDetails/popular-skill-details';
import Topic from './src/components/Main/TopicDetails/topic-details';
import PathDetails from './src/components/Main/PathDetails/path-details';
import AuthorDetails from './src/components/Main/AuthorDetails/author-details';
import ListCourses from './src/components/ListCourses/list-courses';
import ListPaths from './src/components/ListPaths/list-paths';
import CourseDetail from './src/components/CourseDetail/course-detail';
import RelatedPathsCourses from './src/components/Main/Home/RelatedPathsCourses/related-paths-courses';
import Download from './src/components/Main/Download/download';
import Setting from './src/components/AccountManagement/Setting/setting';
import { navName } from './src/Global/constant';

const Stack = createStackNavigator();

export default function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navName.login}>
        <Stack.Screen name={navName.login} 
          component={Login} 
          options={{headerShown: false}}
        />

        <Stack.Screen name={navName.register} 
          component={Register} 
          options={{headerShown: false}}
        />

        <Stack.Screen name={navName.forgetPassword}
          component={ForgetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen name={navName.main}
          component={Main}
          options={{headerShown: false}}
        />

        <Stack.Screen name={navName.profile}
          component={Profile}
        />

        <Stack.Screen name={navName.newRelease}
          component={NewReleases}
        />

        <Stack.Screen name={navName.skill}
          component={Skill}
        />

        <Stack.Screen name={navName.topic}
          component={Topic}
        />

        <Stack.Screen name={navName.path}
          component={PathDetails}
        />

        <Stack.Screen name={navName.author}
          component={AuthorDetails}
        />

        <Stack.Screen name={navName.listCourses}
          component={ListCourses}
        />

        <Stack.Screen name={navName.listPaths}
          component={ListPaths}
        />

        <Stack.Screen name={navName.courseDetails}
          component={CourseDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen name={navName.relatedPathsCourses}
          component={RelatedPathsCourses}
        />

        <Stack.Screen name={navName.download}
          component={Download}
        />

        <Stack.Screen name={navName.setting}
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#f3f3f3'
  },
});
