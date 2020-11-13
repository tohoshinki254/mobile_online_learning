import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Setting = () => {
    return (
        <View style={{flexDirection: 'row', margin: 10}}>
            <Text style={[styles.title, {flex: 1}]}>App Version</Text>
            <Text style={styles.title}>1.0.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Setting;