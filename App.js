import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TopicDetails from './src/components/Main/TopicDetails/topic-details';
import PathDetails from './src/components/Main/PathDetails/path-details';
import AuthorDetails from './src/components/Main/AuthorDetails/author-details';

export default function App() {
  
  return (
    <View style={styles.container}>
      <AuthorDetails />
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
