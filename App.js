import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Browse from './src/components/Main/Home/Browse/browse';
import SectionCourses from './src/components/Main/Home/SectionCourses/section-courses';
import SectionPaths from './src/components/Main/Home/SectionPaths/section-paths';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionPaths title="Paths" type={1}/>
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
