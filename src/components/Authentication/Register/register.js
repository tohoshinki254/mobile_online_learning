import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';

const Register = () => {
    const [name, onChangeName] = useState();
    const [username, onChangeUsername] = useState();
    const [email, onChangeEmail] = useState();
    const [password, onChangePassword] = useState();

    return (
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.root}>
                    <Text 
                        style={{alignSelf: 'center', fontSize: 25, marginBottom: 20, color: '#616161'}}
                    >
                        Create an account
                    </Text>

                    <Text style={styles.text}>Name</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={name => onChangeName(name)}
                        value={name}
                    />

                    <Text style={styles.text}>Username</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={username => onChangeUsername(username)}
                        value={username}
                    />

                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={email => onChangeEmail(email)}
                        value={email}
                    />

                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={password => onChangePassword(password)}
                        value={password}
                        secureTextEntry={true}
                    />

                    <Button onPress={() => {}} text="Create an account"/>

                    <TouchableOpacity
                        style={styles.othersOption}
                        onPress={() => {}}
                    >
                        <Text style={{fontSize: 17, color: 'darkgrey'}}>Have an account?</Text>
                        <Text style={{fontSize: 17, color: 'grey', fontWeight: '500'}}>&nbsp;Sign In</Text>
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
        marginBottom: 20,
    },
    othersOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    }
});

export default Register;