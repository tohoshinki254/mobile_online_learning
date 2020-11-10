import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import RadiusButton from '../../Common/radius-button';
import { navName } from '../../../Global/constant';

const Profile = ({ navigation }) => {
    const skills = [
        'Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Patterns'
    ];

    const renderListSkills = (skills) => {
        return skills.map(item => 
            <RadiusButton onPress={() => navigation.push(navName.skill)} text={item} />
        );
    }

    return (
        <View style={styles.root}>
            <View style={styles.basic}>
                <Image source={require('../../../../assets/no_avatar.png')} style={styles.image}/>
                <Text style={styles.name}>Thanh Tien</Text>
            </View>
            <View style={{margin: 15}}/>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.push(navName.download)}
            >
                <Text style={[styles.title, {marginRight: 20}]}>Downloads</Text>
                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
            <View style={{margin: 15}}/>

            <Text style={styles.title}>Interests</Text>
            <ScrollView horizontal={true} style={{marginTop: 13}}>
                {renderListSkills(skills)}
            </ScrollView>
            <View style={{margin: 15}}/>

            <Text style={styles.title}>Activity Insights (last 30 days)</Text>
            <View style={{margin: 15}}/>

            <Text style={styles.darkText}>TOTAL ACTIVE DAYS</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>0</Text>
                <Text style={[styles.darkText, {marginLeft: 15}]}>0 day streak</Text>
            </View>
            <View style={{margin: 15}}/>

            <Text style={styles.darkText}>MOST ACTIVE TIME OF DAY</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>7:00 AM</Text>
            </View>
            <View style={{margin: 15}}/>

            <Text style={styles.darkText}>MOST VIEWED SUBJECT</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>N/A</Text>
            </View>
            <View style={{margin: 15}}/>
            
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.title, {marginRight: 20}]}>Setting</Text>
                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
        </View>
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