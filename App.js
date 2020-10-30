import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Authors from './src/components/Main/Home/Authors/authors';
import Browse from './src/components/Main/Home/Browse/browse';
import SectionCourses from './src/components/Main/Home/SectionCourses/section-courses';
import SectionPaths from './src/components/Main/Home/SectionPaths/section-paths';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SectionCourses title="100 results" type={2}/>
      <SectionPaths title="100 results" type={2}/>
      <Authors title="Paths" type={2} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#f3f3f3'
  },
});
