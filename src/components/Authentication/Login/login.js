import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import * as Google from 'expo-google-app-auth';

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

    const signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: "86971470491-gp31arsi9al1p3mqje31tqpamu969umb.apps.googleusercontent.com",
                iosClientId: "86971470491-rh35t9hj5gu4dblk3672e29ouqq33o5l.apps.googleusercontent.com",
                androidStandaloneAppClientId: "86971470491-m0mvi06jbtep6ib1nsp3brg8tkihtbem.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                const data = {
                    user: {
                        email: result.user.email,
                        id: result.accessToken
                    }
                }
                authContext.signInWithGoogle(data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.root(theme)}>
                <Text 
                    style={{alignSelf: 'center', fontSize: 25, marginBottom: 30, color: theme ? 'lightgray' : '#616161'}}
                >
                    {language ? "Sign In" : "Đăng nhập"}
                </Text>

                <Text style={styles.text(theme)}>Email</Text>
                <TextInput 
                    style={styles.textInput(theme)}
                    onChangeText={username => onChangeUsername(username)}
                    value={username}
                />

                <Text style={styles.text(theme)}>{language ? "Password" : "Mật khẩu"}</Text>
                <TextInput 
                    style={styles.textInput(theme)}
                    onChangeText={password => onChangePassword(password)}
                    value={password}
                    secureTextEntry={true}
                />

                <Button onPress={() => {authContext.login(username, password); onChangeUsername(''); onChangePassword('')}} text={language ? "Sign In" : "Đăng nhập"}/>
                <View style={{marginBottom: 30}} />

                <Button onPress={() => signInWithGoogle()} text={language ? "Sign in with Google" : "Đăng nhập bằng tài khoản Google"}/>

                <TouchableOpacity
                    style={styles.othersOption}
                    onPress={() => navigation.navigate(navName.forgetPassword)}
                >
                    <Text style={{fontSize: 17, color: theme ? 'lightgray' : 'gray', fontWeight: '500'}}>{language ? "Forget Password" : "Quên mật khẩu"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.othersOption}
                    onPress={() => navigation.navigate(navName.register)}
                >
                    <Text style={{fontSize: 17, color: theme ? 'lightgray' : 'gray', fontWeight: '500'}}>{language ? "Create an account" : "Tạo tài khoản mới"}</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: theme ? '#212121' : '#f3f3f3',
        }
    },
    text: (theme) => {
        return {
            fontSize: 13,
            fontWeight: 'bold',
            marginBottom: 3,
            color: theme ? 'lightgray' : 'gray'
        }
    },  
    textInput: (theme) => {
        return {
            width: '100%',
            height: 40,
            borderWidth: 1.5,
            borderRadius: 4,
            borderColor: theme ? 'lightgray' : 'gray',
            padding: 5,
            marginBottom: 30,
            color: theme ? 'lightgray' : 'gray'
        }
    },
    othersOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    }
});

export default Login;