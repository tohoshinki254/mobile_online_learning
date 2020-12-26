import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RadiusButton from '../../Common/radius-button';
import { navName } from '../../../Global/constant';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import { SnackbarContext } from '../../../providers/snackbar-provider';
import { LoadingContext } from '../../../providers/loading-provider';
import { getCategoryDetails } from '../../../actions/category-actions';
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

    // const categories = [];
    // const [detail, setDetail] = useState();
    // for (let i = 0; i < userInfo.favoriteCategories.length; i++) {
    //     getCategoryDetails(userInfo.favoriteCategories[i], setDetail);
    //     categories.push(detail);
    //     if (categories.length === 2) {
    //         break;
    //     }
    // }

    // console.log(categories);

    const renderListSkills = (categories) => {
        return categories.slice(0,2).map(item => 
            <RadiusButton /*onPress={() => navigation.push(navName.skill)}*/ text={item.name} />
        );
    }

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            {userInfo.info !== null ? 
            <View>
                <View style={styles.basic}>
                    <Image source={{ uri: userInfo.info.avatar}} style={styles.image}/>
                    <View> 
                        <Text style={styles.name}>{userInfo.info.name}</Text>
                        <Text style={{ color: 'grey'}}>Email: {userInfo.info.email}</Text>
                        <Text style={{ color: 'grey'}}>{language ? "Phone: " : "Điên thoại: "}{userInfo.info.phone}</Text>
                    </View>
                </View>
                <View style={{margin: 10}}/>

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                    //onPress={() => navigation.push(navName.download, { courses: courses })}
                    onPress={() => setLoading(true)}
                >
                    <Text style={[styles.title, {marginRight: 20}]}>{language ? "Downloads" : "Khóa học đã tải"}</Text>
                    <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <View style={{margin: 10}}/>

                <Text style={styles.title}>{language ? "Interests" : "Lĩnh vực quan tâm"}</Text>
                <ScrollView horizontal={true} style={{marginTop: 13}} showsHorizontalScrollIndicator={false}>
                    {/* {renderListSkills(categories)} */}
                </ScrollView>

                <Separator />
                
                <Setting />

                <Separator />

                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => navigation.push(navName.updateProfile, { info: userInfo.info })}
                >
                    <Text style={[styles.title, {marginRight: 20}]}>{language ? "Update Profile" : "Cập nhật thông tin"}</Text>
                    <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                </TouchableOpacity>

                <View style={{margin: 10}}/>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => navigation.navigate(navName.login)}
                >
                    <Text style={[styles.title, {marginRight: 20}]}>{language ? "Logout" : "Đăng xuất"}</Text>
                    <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            </View>
            : <ActivityIndicator />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 6,
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
    name: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 23,
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
    },
    darkText: {
        color: 'gray',
    }
});

export default Profile;