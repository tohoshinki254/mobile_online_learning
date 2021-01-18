import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { navName } from '../../../Global/constant';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import { SnackbarContext } from '../../../providers/snackbar-provider';
import { LoadingContext } from '../../../providers/loading-provider';
import { getUserInfo } from '../../../actions/user-actions';
import Setting from '../Setting/setting';
import Separator from '../../Common/separator';

const Profile = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);
    const snackContext = useContext(SnackbarContext);
    const { setLoading } = useContext(LoadingContext);

    const [userInfo, setUserInfo] = useState({ successful: false, info: null });
    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                await getUserInfo(authContext.state.token, setUserInfo);
            })();
        }, [authContext, setUserInfo])
    );

    const logout = () => {
        authContext.state.isAuthenticated = false;
        navigation.navigate(navName.login);
    }

    return (
        <ScrollView style={styles.root(theme)} showsVerticalScrollIndicator={false}>
            {userInfo.info !== null ? 
            <View>
                <View style={styles.basic}>
                    <Image source={{ uri: userInfo.info.avatar}} style={styles.image}/>
                    <View> 
                        <Text style={styles.name(theme)}>{userInfo.info.name}</Text>
                        <Text style={styles.darkText(theme)}>Email: {userInfo.info.email}</Text>
                        <Text style={styles.darkText(theme)}>{language ? "Phone: " : "Điên thoại: "}{userInfo.info.phone}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}/>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                    //onPress={() => navigation.push(navName.download, { courses: courses })}
                    onPress={() => setLoading(true)}
                >
                    <Text style={[styles.title(theme), {marginRight: 20}]}>{language ? "Downloads" : "Khóa học đã tải"}</Text>
                    <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                </TouchableOpacity>

                <Separator />
                
                <Setting />

                <Separator />

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => navigation.push(navName.updateProfile, { info: userInfo.info })}
                >
                    <Text style={[styles.title(theme), {marginRight: 20}]}>{language ? "Update Profile" : "Cập nhật thông tin"}</Text>
                    <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                </TouchableOpacity>

                <View style={{margin: 10}}/>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => logout()}
                >
                    <Text style={[styles.title(theme), {marginRight: 20}]}>{language ? "Logout" : "Đăng xuất"}</Text>
                    <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            </View>
            : <ActivityIndicator />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            paddingTop: 30,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
    },
    basic: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 20,
        borderRadius: 50
    },
    name: (theme) => {
        return {
            color: theme ? '#fff' : '#616161',
            fontWeight: 'bold',
            fontSize: 23,
        }
    },
    title: (theme) => {
        return {
            color: theme ? '#fff' : '#616161',
            fontWeight: 'bold',
            fontSize: 18,
        }
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray',
        }
    }
});

export default Profile;