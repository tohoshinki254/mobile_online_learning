import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { navName } from '../../../Global/constant';

const Splashscreen = ({ navigation }) => {
    const [loading, setLoading] = useState(0);

    useEffect(() => {
        this.timer = setInterval(() => {
            setLoading(loading + 1)
        });

        if(loading >= 100){
            clearInterval(this.timer);
            navigation.navigate(navName.login);
        }
        
        return () => {
            clearInterval(this.timer);
        }
    }, [loading])

    return(
        <View style={styles.splashscreen}>
            <ActivityIndicator size="large" color="#FF5252"/>
            <Text style={{ marginTop: 10, color: '#616161' }}>{`Loading ... ${loading}%`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Splashscreen;