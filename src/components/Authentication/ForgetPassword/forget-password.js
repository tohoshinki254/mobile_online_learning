import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';

const ForgetPassword = ({ navigation }) => {
    const [email, onChangeEmail] = useState();
    return (
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.root}>
                    <Text 
                        style={{alignSelf: 'center', fontSize: 25, marginBottom: 40, color: '#616161'}}
                    >
                        Forgot Password
                    </Text>

                    <Text 
                        style={{alignSelf: 'center', fontSize: 20, marginBottom: 40, color: '#616161'}}
                    >
                        Enter your email address and we'll send you a link to reset your password
                    </Text>

                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={email => onChangeEmail(email)}
                        value={email}
                    />
                    
                    <View style={{marginBottom: 30}}>
                        <Button onPress={() => {}} text="Send email"/>
                    </View>
                    
                    <Button onPress={() => navigation.goBack()} text="Cancel"/>
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
});

export default ForgetPassword;