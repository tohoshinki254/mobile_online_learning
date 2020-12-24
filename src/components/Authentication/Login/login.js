import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

function Login({ navigation }) {
    const [username, onChangeUsername] = useState();
    const [password, onChangePassword] = useState();
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);

    useEffect(() => {
        if (authContext.state.isAuthenticated) {
            navigation.navigate(navName.main);
        }
    }, [authContext])

    const withoutLogin = () => {
        navigation.navigate(navName.main);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.root}>
                <Text 
                    style={{alignSelf: 'center', fontSize: 25, marginBottom: 40, color: '#616161'}}
                >
                    {language ? "Sign In" : "Đăng nhập"}
                </Text>

                <Text style={styles.text}>Email</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={username => onChangeUsername(username)}
                    value={username}
                />

                <Text style={styles.text}>{language ? "Password" : "Mật khẩu"}</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={password => onChangePassword(password)}
                    value={password}
                    secureTextEntry={true}
                />

                <Button onPress={() => {authContext.login(username, password)}} text={language ? "Sign In" : "Đăng nhập"}/>
                <View style={{marginBottom: 30}} />

                <Button onPress={() => withoutLogin()} text={language ? "Explore without a subscription" : "Không đăng nhập"}/>

                <TouchableOpacity
                    style={styles.othersOption}
                    onPress={() => navigation.navigate(navName.forgetPassword)}
                >
                    <Text style={{fontSize: 17, color: 'grey', fontWeight: '500'}}>{language ? "Forget Password" : "Quên mật khẩu"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.othersOption}
                    onPress={() => navigation.navigate(navName.register)}
                >
                    <Text style={{fontSize: 17, color: 'grey', fontWeight: '500'}}>{language ? "Create an account" : "Tạo tài khoản mới"}</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 3,
        color: 'grey'
    },  
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 1.5,
        borderRadius: 4,
        borderColor: 'gray',
        padding: 5,
        marginBottom: 30,
    },
    othersOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    }
});

export default Login;