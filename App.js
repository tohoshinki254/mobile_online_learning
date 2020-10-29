import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Browse from './src/components/Main/Home/Browse/browse';
import SectionCourses from './src/components/Main/Home/SectionCourses/section-courses';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionCourses title="100 results" type={1}/>
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
