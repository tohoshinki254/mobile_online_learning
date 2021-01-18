import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';
import { forgetPassword } from '../../../actions/authentication-actions';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import { SnackbarContext } from '../../../providers/snackbar-provider';

const ForgetPassword = ({ navigation }) => {
    const { language, theme } = useContext(SettingCommonContext);
    const snackContext = useContext(SnackbarContext);
    const [email, setEmail] = useState();

    return (
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.root(theme)}>
                    <Text 
                        style={{alignSelf: 'center', fontSize: 25, marginBottom: 40, color: theme ? 'lightgray' : '#616161'}}
                    >
                        {language ? "Forgot Password" : "Quên mật khẩu"}
                    </Text>

                    <Text 
                        style={{alignSelf: 'center', fontSize: 20, marginBottom: 40, color: theme ? 'lightgray' : '#616161'}}
                    >
                        {language ? "Enter your email address and we'll send you a link to reset your password" : "Nhập địa chỉ email và chúng tôi sẽ gửi liên kết để tạo mới password"}
                        
                    </Text>

                    <Text style={styles.text(theme)}>Email</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    
                    <View style={{marginBottom: 30}}>
                        <Button onPress={() => forgetPassword(email, snackContext.setSnackbar)} text={language ? "Send email" : "Gửi email"}/>
                    </View>
                    
                    <Button onPress={() => navigation.goBack()} text={language ? "Cancel" : "Quay lại"}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
            paddingLeft: 10,
            paddingRight: 10,
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
});

export default ForgetPassword;