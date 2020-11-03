import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import Browse from './src/components/Main/Browse/browse';
import Download from './src/components/Main/Download/download';
import Content from './src/components/CourseDetail/content';
import CourseDetail from './src/components/CourseDetail/course-detail';
import Login from './src/components/Authentication/Login/login';
import NewReleases from './src/components/Main/Home/NewReleases/new-releases';
import PopularSkillDetails from './src/components/Main/Home/PopularSkillDetails/popular-skill-details';

export default function App() {
  
  return (
    <View style={styles.container}>
      <PopularSkillDetails skill='Angular' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#f3f3f3'
  },
});
