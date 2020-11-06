import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import { navName } from './src/Global/constant';

const Stack = createStackNavigator();

export default function App() {
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
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}}
                style={{marginLeft: 10}}
              >
                <Icon name="cog" color='#616161' size={30}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate(navName.profile)}>
                <Image source={require('./assets/no_avatar.png')} style={{width: 30, height: 30, marginRight: 10}}/>
              </TouchableOpacity>
            )
          })}
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
