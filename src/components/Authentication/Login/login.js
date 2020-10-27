import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Login() {
    return (
        <View style={styles.root}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Login;