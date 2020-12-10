import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';
import { register } from '../../../actions/authentication-actions';

const Register = ({ navigation }) => {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [rePassword, setRePassword] = useState();

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
    }, [status])

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
                        onChangeText={username => setUsername(username)}
                        value={username}
                    />

                    <Text style={styles.text}>Name</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={name => setName(name)}
                        value={name}
                    />

                    <Text style={styles.text}>Email</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />

                    <Text style={styles.text}>Phone</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={phone => setPhone(phone)}
                        value={phone}
                        keyboardType='numeric'
                    />

                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={password => setPassword(password)}
                        value={password}
                        textContentType={password}
                        secureTextEntry={true}
                    />

                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={rePassword => setRePassword(rePassword)}
                        value={rePassword}
                        textContentType={password}
                        secureTextEntry={true}
                    />

                    <Button onPress={() => register(username, email, phone, password, name, setStatus)} 
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
        marginTop: 24
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