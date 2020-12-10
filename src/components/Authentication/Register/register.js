import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';
import { register } from '../../../actions/authentication-actions';

const Register = ({ navigation }) => {
    const [name, setName] = useState({ value: '', error: false });
    const [username, setUsername] = useState({ value: '', error: false });
    const [email, setEmail] = useState({ value: '', error: false });
    const [password, setPassword] = useState({ value: '', error: false });
    const [phone, setPhone] = useState({ value: '', error: false });
    const [rePassword, setRePassword] = useState({ value: '', error: false });

    const [status, setStatus] = useState({
        successful: false,
        message: ''
    });

    useEffect(() => {
        if (status.successful) {
            alert('Let activate email');
            navigation.navigate(navName.login);
        } else {
            if (status.message !== '') {
                alert(status.message);
            }
        }
    }, [status]);

    const handleUsernameChange = (username) => {
        const pattern = new RegExp(`/^[a-zA-Z0-9.\-_$@*!]{6,16}$/`);
        const newUsername = { value: username, error: !pattern.test() };
        setUsername(newUsername);
    }

    const handleNameChange = (name) => {
        const newName = { value: name, error: value === '' };
        setName(newName);
    }

    const handleEmailChange = (email) => {
        const pattern = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const newEmail = { value: email, error: !pattern.test() };
        setEmail(newEmail);
    }

    const handlePasswordChange = (password) => {
        const pattern = new RegExp(`/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/`);
        const newPassword = { value: password, error: !pattern.test() };
        setPassword(newPassword);
    }

    const handleRePasswordChange = (rePassword) => {
        const newRePassword = {value: rePassword, error: !(rePassword === password.value)}
        setRePassword(newRePassword);
    }

    const handlePhoneChange = (phone) => {
        const newPhone = { value: phone, error: phone === '' };
        setPhone(newPhone);
    }

    return (
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styles.root}>
                    <Text 
                        style={{alignSelf: 'center', fontSize: 25, marginBottom: 20, color: '#616161'}}
                    >
                        Create an account
                    </Text>

                    <Text style={styles.text}>Username</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handleUsernameChange}
                        value={username.value}
                    />
                    {/* {username.error ? 
                        <Text style={styles.error}>Only contain a-z, 0-9 and length from 6 to 16]</Text> : 
                        <View style={{marginBottom: 20}}/>
                    } */}

                    <Text style={styles.text}>Name</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handleNameChange}
                        value={name.value}
                    />
                    {/* {name.error ? 
                        <Text style={styles.error}>Your name is not empty</Text> : 
                        <View style={{marginBottom: 20}}/>
                    } */}

                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handleEmailChange}
                        value={email.value}
                    />
                    {/* {email.error ? 
                        <Text style={styles.error}>Email wrong format</Text> : 
                        <View style={{marginBottom: 20}}/>
                    } */}

                    <Text style={styles.text}>Phone</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handlePhoneChange}
                        value={phone.value}
                        keyboardType='numeric'
                    />
                    {/* {phone.error ? 
                        <Text style={styles.error}>Phone is not empty</Text> : 
                        <View style={{marginBottom: 20}}/>
                    } */}

                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handlePasswordChange}
                        value={password.value}
                        secureTextEntry={true}
                    />
                    {/* {password.error ? 
                        <Text style={styles.error}>Must contain a-z, A-Z & 0-9 and length greater than 8</Text> : 
                        <View style={{marginBottom: 20}}/>
                    } */}

                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={handleRePasswordChange}
                        value={rePassword.value}
                        secureTextEntry={true}
                    />
                    {/* {rePassword.error ? 
                        <Text style={styles.error}>Does not match password above</Text> : 
                        <View style={{marginBottom: 20}}/>
                    } */}

                    <Button onPress={() => register(username.value, email.value, phone.value, password.value, name.value, setStatus)} 
                        text="Create an account"
                    />

                    <TouchableOpacity
                        style={styles.othersOption}
                        onPress={() => navigation.navigate(navName.login)}
                    >
                        <Text style={{fontSize: 17, color: 'darkgrey'}}>Have an account?</Text>
                        <Text style={{fontSize: 17, color: 'grey', fontWeight: '500'}}>&nbsp;Sign In</Text>
                    </TouchableOpacity>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        padding: 10,
        marginTop: 24,
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
        marginBottom: 20
    },
    othersOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    error: {
        color: 'red',
        marginBottom: 20
    }
});

export default Register;