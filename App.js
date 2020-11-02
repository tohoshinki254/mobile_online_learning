import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Download from './src/components/Main/Download/download';

export default function App() {
  return (
    <View style={styles.container}>
      <Download />
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
