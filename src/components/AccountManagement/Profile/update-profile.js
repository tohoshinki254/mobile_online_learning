import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import Button from '../../Common/button';
import { updateProfile, changeAvatar } from '../../../actions/user-actions';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import { SnackbarContext } from '../../../providers/snackbar-provider';
import * as ImagePicker from 'expo-image-picker';

const UpdateProfile = ({ route, navigation }) => {
    const { info } = route.params;
    const { token } = useContext(AuthenticationContext).state;
    const { language, theme } = useContext(SettingCommonContext);
    const snackContext = useContext(SnackbarContext);

    const [name, setName] = useState(info.name);
    const [phone, setPhone] = useState(info.phone);
    const [image, setImage] = useState(info.avatar);

    const updatePress = () => {
        const data = {
            name: name,
            phone: phone
        };
        updateProfile(token, data, snackContext.setSnackbar);
    }
    
    const uploadAvatar = async () => {
        const localUri = image;
        const filename = localUri.split('/').pop();

        const match = /.(\w+)$/.exec(
            filename || Math.random().toString(36).substring(7)
        );
        const type = match ? `image/${match[1]}` : `image`;

        const formData = new FormData();
        formData.append('avatar', { uri: localUri, name: filename, type});

        changeAvatar(token, formData, snackContext.setSnackbar);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.3
        })

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.root(theme)}>
                <View style={{ flexDirection: 'row', marginBottom: 20}}>
                    <Image source={{ uri: image }} style={styles.image}/>
                    <View style={{ justifyContent: 'center'}}>
                        <Button onPress={() => pickImage()} text={language ? "Choose Image" : "Chọn ảnh"}/>
                        <View style={{ margin: 5}}/>
                        <Button onPress={() => uploadAvatar()} text={language ? "Upload" : "Upload"}/>
                    </View>
                </View>

                <View style={{ width: '100%'}}>
                    <Text style={styles.text(theme)}>{language ? "Name" : "Tên"}</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={name => setName(name)}
                        value={name}
                        defaultValue={name}
                    />
                </View>

                <View style={{ width: '100%'}}>
                    <Text style={styles.text(theme)}>{language ? "Phone" : "Số điện thoại"}</Text>
                    <TextInput 
                        style={styles.textInput(theme)}
                        onChangeText={phone => setPhone(phone)}
                        value={phone}
                        defaultValue={phone}
                    />
                </View>

                <View style={{ width: '100%', marginBottom: 30}}>
                    <Button onPress={() => updatePress()} text={language ? "Update" : "Cập nhật"}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: theme ? '#212121' : '#f3f3f3',
            height: '100%'
        }
    },
    textInput: (theme) => {
        return {
            width: '100%',
            height: 50,
            borderWidth: 1.5,
            borderRadius: 4,
            borderColor: theme ? 'lightgray': 'gray',
            padding: 5,
            marginBottom: 30,
            color: theme ? 'lightgray' : 'gray',
        }
    },
    text: (theme) => {
        return {
            fontSize: 13,
            fontWeight: 'bold',
            marginBottom: 3,
            color: theme ? 'lightgray' : 'gray',
        }
    }, 
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 50
    },
})

export default UpdateProfile;