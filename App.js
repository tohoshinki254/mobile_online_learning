import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';

export default function App() {
  return (
    <View style={styles.container}>
      <ForgetPassword />
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
