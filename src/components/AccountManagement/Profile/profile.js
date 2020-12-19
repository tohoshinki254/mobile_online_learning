import React, { useContext, useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import RadiusButton from '../../Common/radius-button';
import { navName } from '../../../Global/constant';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { getCategoryDetails } from '../../../actions/category-actions';

const Profile = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);
    const userInfo = authContext.state.userInfo;

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
            <View style={styles.basic}>
                <Image source={{ uri: userInfo.avatar}} style={styles.image}/>
                <Text style={styles.name}>{userInfo.name}</Text>
            </View>
            <View style={{margin: 10}}/>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                // onPress={() => navigation.push(navName.download, { courses: courses })}
            >
                <Text style={[styles.title, {marginRight: 20}]}>Downloads</Text>
                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
            <View style={{margin: 10}}/>

            <Text style={styles.title}>Interests</Text>
            <ScrollView horizontal={true} style={{marginTop: 13}} showsHorizontalScrollIndicator={false}>
                {/* {renderListSkills(categories)} */}
            </ScrollView>
            <View style={{margin: 10}}/>

            <Text style={styles.title}>Activity Insights (last 30 days)</Text>
            <View style={{margin: 10}}/>

            <Text style={styles.darkText}>TOTAL ACTIVE DAYS</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>0</Text>
                <Text style={[styles.darkText, {marginLeft: 15}]}>0 day streak</Text>
            </View>
            <View style={{margin: 10}}/>

            <Text style={styles.darkText}>MOST ACTIVE TIME OF DAY</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>7:00 AM</Text>
            </View>
            <View style={{margin: 10}}/>

            <Text style={styles.darkText}>MOST VIEWED SUBJECT</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>N/A</Text>
            </View>
            <View style={{margin: 10}}/>
            
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.push(navName.setting)}
            >
                <Text style={[styles.title, {marginRight: 20}]}>Setting</Text>
                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
            <View style={{margin: 10}}/>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.push(navName.updateProfile, { info: userInfo })}
            >
                <Text style={[styles.title, {marginRight: 20}]}>Update Profile</Text>
                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
            </TouchableOpacity>

            <View style={{margin: 10}}/>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.popToTop()}
            >
                <Text style={[styles.title, {marginRight: 20}]}>Logout</Text>
                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 24,
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