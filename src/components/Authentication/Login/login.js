import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';

function Login({ navigation }) {
    const [username, onChangeUsername] = useState();
    const [password, onChangePassword] = useState();

    const loggedIn = () => {
        navigation.navigate(navName.main);
    }

    return (
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.root}>
                    <Text 
                        style={{alignSelf: 'center', fontSize: 25, marginBottom: 40, color: '#616161'}}
                    >
                        Sign In
                    </Text>

                    <Text style={styles.text}>Email or username</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={username => onChangeUsername(username)}
                        value={username}
                    />

                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={password => onChangePassword(password)}
                        value={password}
                        secureTextEntry={true}
                    />

                    <Button onPress={() => loggedIn()} text="Sign In"/>

                    <TouchableOpacity
                        style={styles.othersOption}
                        onPress={() => navigation.navigate(navName.forgetPassword)}
                    >
                        <Text style={{fontSize: 17, color: 'grey', fontWeight: '500'}}>Forget Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.othersOption}
                        onPress={() => navigation.navigate(navName.register)}
                    >
                        <Text style={{fontSize: 17, color: 'darkgrey'}}>New here?</Text>
                        <Text style={{fontSize: 17, color: 'grey', fontWeight: '500'}}>&nbsp;Create an account</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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