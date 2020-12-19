import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Button from '../../Common/button';
import { updateProfile } from '../../../actions/user-actions';
import { AuthenticationContext } from '../../../providers/authentication-provider';

const UpdateProfile = ({ route, navigation }) => {
    const { info } = route.params;
    const { token } = useContext(AuthenticationContext).state;

    const [name, setName] = useState(info.name);
    const [avatar, setAvatar] = useState(info.avatar);
    const [phone, setPhone] = useState(info.phone);

    const [result, setResult] = useState();

    const updatePress = () => {
        const data = {
            name: name,
            avatar: avatar,
            phone: phone
        };
        updateProfile(token, data, setResult);
        if (result.successful) {
            alert('Successful');
            navigation.pop();
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.root}>
                <View style={{ width: '80%'}}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={name => setName(name)}
                        value={name}
                        defaultValue={name}
                    />
                </View>
                
                <View style={{ width: '80%'}}>
                    <Text style={styles.text}>Avatar</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={avatar => setAvatar(avatar)}
                        value={avatar}
                        defaultValue={avatar}
                    />
                </View>

                <View style={{ width: '80%'}}>
                    <Text style={styles.text}>Phone</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={phone => setPhone(phone)}
                        value={phone}
                        defaultValue={phone}
                    />
                </View>

                <View style={{ width: '80%', marginBottom: 30}}>
                    <Button onPress={() => updatePress()} text="Update"/>
                </View>

                <View style={{ width: '80%'}}>
                    <Button onPress={() => navigation.pop()} text="Back"/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 6,
        alignItems: 'center',
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
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 3,
        color: 'grey',
    }, 
})

export default UpdateProfile;