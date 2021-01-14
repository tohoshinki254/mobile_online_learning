import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { navName } from '../../../Global/constant';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Splashscreen = ({ navigation }) => {
    const [loading, setLoading] = useState(0);
    const { theme } = useContext(SettingCommonContext);

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
        <View style={styles.splashscreen(theme)}>
            <ActivityIndicator size="large" color="#FF5252"/>
            <Text style={{ marginTop: 10, color: theme ? 'lightgray' : '#616161' }}>{`Loading ... ${loading}%`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashscreen: (theme) => {
        return {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme ? '#212121' : '#fff'
        }
    }
})

export default Splashscreen;