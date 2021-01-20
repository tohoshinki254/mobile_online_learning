import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Button from '../../Common/button';
import { navName } from '../../../Global/constant';
import { register } from '../../../actions/authentication-actions';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import { SnackbarContext } from '../../../providers/snackbar-provider';

const Register = ({ navigation }) => {
    const { language, theme } = useContext(SettingCommonContext);
    const snackContext = useContext(SnackbarContext);
    const [name, setName] = useState({ value: '', error: false });
    const [username, setUsername] = useState({ value: '', error: false });
    const [email, setEmail] = useState({ value: '', error: false });
    const [password, setPassword] = useState({ value: '', error: false });
    const [rePassword, setRePassword] = useState({ value: '', error: false });
    const [phone, setPhone] = useState({ value: '', error: false });
    const [successful, setSuccessful] = useState(false);

    const handleUsernameChange = (username) => {
        const pattern = new RegExp(/^[a-zA-Z0-9.\-_$@*!]{6,16}$/);
        const newUsername = { value: username, error: !pattern.test(username) };
        setUsername(newUsername);
    }

    const handleNameChange = (name) => {
        const newName = { value: name, error: name === '' };
        setName(newName);
    }

    const handleEmailChange = (email) => {
        const pattern = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const newEmail = { value: email, error: !pattern.test(email) };
        setEmail(newEmail);
    }

    const handlePasswordChange = (password) => {
        const newPassword = { value: password, error: password === '' };
        setPassword(newPassword);
    }

    const handleRePasswordChange = (rePassword) => {
        const newRePassword = { value: rePassword, error: rePassword !== password }
        setRePassword(newRePassword);
    }

    const handlePhoneChange = (phone) => {
        const newPhone = { value: phone, error: phone === '' };
        setPhone(newPhone);
    }

    const registerAccount = () => {
        register(username.value, email.value, phone.value, password.value, name.value, setSuccessful, snackContext.setSnackbar);
        if (successful) {
            alert('Successful');
            navigation.navigate(navName.login);
        }
    }

    return (
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.root(theme)}>
                    <Text 
                        style={{alignSelf: 'center', fontSize: 25, marginBottom: 20, color: theme ? 'lightgray' : '#616161'}}
                    >
                        {language ? "Create an account" : "Tạo tài khoản mới"}
                    </Text>

                    <Text style={styles.text(theme)}>Username</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={(text) => handleUsernameChange(text)}
                        value={username.value}
                    />
                    {username.error ? 
                    <Text style={styles.error}>{language ? "Only contain a-z, 0-9 and length from 6 to 16" : "Bao gồm a-z, 0-9 và độ dài từ 6 đến 16"}</Text>
                    : <View style={{ marginBottom: 20 }}/>}

                    <Text style={styles.text(theme)}>{language ? "Name" : "Tên"}</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={handleNameChange}
                        value={name.value}
                    />
                    {name.error ? 
                        <Text style={styles.error}>{language ? "Your name is not empty" : "Tên không được để trống"}</Text> : 
                        <View style={{marginBottom: 20}}/>
                    }

                    <Text style={styles.text(theme)}>Email</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={handleEmailChange}
                        value={email.value}
                    />
                    {email.error ? 
                        <Text style={styles.error}>{language ? "Email wrong format" : "Email không đúng định dạng"}</Text> : 
                        <View style={{marginBottom: 20}}/>
                    }

                    <Text style={styles.text(theme)}>{language ? "Phone" : "Số điện thoại"}</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={handlePhoneChange}
                        value={phone.value}
                        keyboardType='numeric'
                    />
                    {phone.error ? 
                        <Text style={styles.error}>{language ? "Phone is not empty" : "Số điện thoại không được để trống"}</Text> : 
                        <View style={{marginBottom: 20}}/>
                    }

                    <Text style={styles.text(theme)}>{language ? "Password" : "Mật khẩu"}</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={handlePasswordChange}
                        value={password.value}
                        secureTextEntry={true}
                    />
                    {password.error ? 
                        <Text style={styles.error}>{language ? "Password is not empty" : "Mật khẩu không được để trống"}</Text> : 
                        <View style={{marginBottom: 20}}/>
                    }

                    <Text style={styles.text(theme)}>{language ? "Confirm Password" : "Xác nhận mật khẩu"}</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={handlePasswordChange}
                        value={password.value}
                        secureTextEntry={true}
                    />
                    {password.error ? 
                        <Text style={styles.error}>{language ? "Confirm password is not match" : "Xác nhận mật khẩu chưa chính xác"}</Text> : 
                        <View style={{marginBottom: 20}}/>
                    }

                    <Button onPress={() => registerAccount()} 
                        text={language ? "Create an account" : "Tạo tài khoản"}
                    />

                    <TouchableOpacity
                        style={styles.othersOption}
                        onPress={() => navigation.navigate(navName.login)}
                    >
                        <Text style={{fontSize: 17, color: theme ? 'lightgray' : 'darkgrey'}}>{language ? "Have an account?" : "Đã có tài khoản"}</Text>
                        <Text style={{fontSize: 17, color: theme ? 'lightgray' : 'gray', fontWeight: '500'}}>&nbsp;{language ? "Sign In" : "Đăng nhập"}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            width: '100%',
            padding: 10,
            backgroundColor: theme ? '#212121' : '#f3f3f3',
            height: '100%',
            justifyContent: 'center'
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
            color: theme ? 'lightgray' : 'gray'
        }
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