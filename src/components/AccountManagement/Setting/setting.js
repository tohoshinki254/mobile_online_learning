import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch } from 'react-native';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Setting = () => {
    const {language, setLanguage, theme, setTheme} = useContext(SettingCommonContext);

    const toggleSwitchLanguage = () => setLanguage(!language);

    const toggleSwitchTheme = () => setTheme(!theme);

    return (
        <View style={{flexDirection: 'row'}}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.appVersion}>
                    <Text style={styles.text(theme)}>{language ? 'App Version' : 'Phiên bản'}</Text>
                    <Text style={styles.text(theme)}>1.2.3</Text>
                </View>
                <View style={{margin: 10}}/>
                <View style={styles.button}>
                    <Text style={styles.text(theme)}>{language ? 'Change language' : 'Đổi ngôn ngữ'}</Text>
                    <Switch 
                        trackColor={{ false: "#E0E0E0", true: "#FF5252" }}
                        thumbColor={ language ? "#fff" : "#fff"}
                        ios_backgroundColor = "#616161"
                        onValueChange={toggleSwitchLanguage}
                        value={language}
                    />
                </View>
                <View style={{margin: 10}}/>
                <View style={styles.button}>
                    <Text style={styles.text(theme)}>{language ? 'Change theme' : 'Đổi theme'}</Text>
                    <Switch 
                        trackColor={{ false: "#E0E0E0", true: "#FF5252" }}
                        thumbColor={ theme ? "#fff" : "#fff"}
                        ios_backgroundColor = "#616161"
                        onValueChange={toggleSwitchTheme}
                        value={theme}
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
    text: (theme) => {
        return {
            color: theme ? '#fff' : '#616161',
            fontWeight: 'bold',
            fontSize: 18,
        }
    }
});

export default Setting;