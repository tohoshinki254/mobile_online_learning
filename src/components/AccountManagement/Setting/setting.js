import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch } from 'react-native';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Setting = () => {
    const {language, setLanguage, theme, setTheme} = useContext(SettingCommonContext);

    const toggleSwitchWifiLanguage = _ => setLanguage(!language);

    return (
        <View style={{flexDirection: 'row', margin: 10}}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.appVersion}>
                    <Text>{language ? 'App Version' : 'Phiên bản'}</Text>
                    <Text>1.2.3</Text>
                </View>
                <View style={[styles.button, {marginBottom: 20}]}>
                <Text>{language ? 'Return previous language' : 'Đổi ngôn ngữ'}</Text>
                <Switch 
                    trackColor={{ false: "#E0E0E0", true: "#FF5252" }}
                    thumbColor={ language ? "#616161" : "#616161"}
                    ios_backgroundColor = "#E0E0E0"
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
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollView: {
        margin: 20,
        marginTop: 0,
        marginBottom: 0,
    },
    button: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default Setting;