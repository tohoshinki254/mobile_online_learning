import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import RadiusButton from '../../Common/radius-button';

const Profile = () => {
    const skills = [
        'Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Patterns'
    ];

    const renderListSkills = (skills) => {
        return skills.map(item => 
            <RadiusButton onPress={() => {}} text={item} />
        );
    }

    return (
        <View style={styles.root}>
            <View style={styles.basic}>
                <Image source={require('../../../../assets/no_avatar.png')} style={styles.image}/>
                <Text style={styles.name}>Thanh Tien</Text>
            </View>
            <View style={{margin: 25}}/>

            <Text style={styles.title}>Interests</Text>
            <ScrollView horizontal={true} style={{marginTop: 13}}>
                {renderListSkills(skills)}
            </ScrollView>
            <View style={{margin: 20}}/>

            <Text style={styles.title}>Activity Insights (last 30 days)</Text>
            <View style={{margin: 20}}/>

            <Text style={styles.darkText}>TOTAL ACTIVE DAYS</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>0</Text>
                <Text style={[styles.darkText, {marginLeft: 15}]}>0 day streak</Text>
            </View>
            <View style={{margin: 20}}/>

            <Text style={styles.darkText}>MOST ACTIVE TIME OF DAY</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>7:00 AM</Text>
            </View>
            <View style={{margin: 20}}/>

            <Text style={styles.darkText}>MOST VIEWED SUBJECT</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={styles.title}>N/A</Text>
            </View>
            <View style={{margin: 20}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: 10,
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