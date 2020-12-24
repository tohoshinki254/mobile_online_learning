import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch } from 'react-native';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Setting = () => {
    const {language, setLanguage, theme, setTheme} = useContext(SettingCommonContext);

    const toggleSwitchWifiLanguage = () => setLanguage(!language);

    return (
        <View style={{flexDirection: 'row'}}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.appVersion}>
                    <Text style={styles.text}>{language ? 'App Version' : 'Phiên bản'}</Text>
                    <Text style={styles.text}>1.2.3</Text>
                </View>
                <View style={{margin: 10}}/>
                <View style={styles.button}>
                    <Text style={styles.text}>{language ? 'Return previous language' : 'Đổi ngôn ngữ'}</Text>
                    <Switch 
                        trackColor={{ false: "#E0E0E0", true: "#FF5252" }}
                        thumbColor={ language ? "#fff" : "#fff"}
                        ios_backgroundColor = "#616161"
                        onValueChange={toggleSwitchWifiLanguage}
                        value={language}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    appVersion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollView: {
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default Setting;