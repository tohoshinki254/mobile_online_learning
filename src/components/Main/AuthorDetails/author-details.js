import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';

const AuthorDetails = ({ route, navigation }) => {
    const [showDesc, setShowDesc] = useState(false);
    
    const { author } = route.params;

    const courses = author.courses;
    for (let i = 0; i < courses.length; i++) {
        courses[i].instructorName = author.name;
    }

    return (
        <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center', marginBottom: 5}}>
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{url: author.avatar}}
                />
                <Text style={styles.title} numberOfLines={1}>{author.name}</Text>
                <Text style={styles.darkText}>ITEDU Author</Text>
            </View>

            <Text style={styles.description} numberOfLines={showDesc ? undefined : 8}>
                {author.intro}
            </Text>
            <TouchableOpacity onPress={() => setShowDesc(!showDesc)} style={{marginBottom: 15}}>
                <Text style={{color: '#FF5252', fontSize: 17}}>{showDesc ? 'Less' : 'More'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <View>
                    <Image source={require('../../../../assets/link_icon8.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.description} numberOfLines={1}>
                        {author.email}
                    </Text>
                </View>
            </TouchableOpacity>

            {/* <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/facebook_icon8.png')} style={{width: 30, height: 30, marginRight: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/twitter_icon8.png')} style={{width: 30, height: 30, marginRight: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/network_icon8.png')} style={{width: 30, height: 30, marginRight: 30}}/>
                </TouchableOpacity>
            </View> */}

            <View style={{height: 1, width: '100%', backgroundColor: '#BDBDBD'}} />

            <SectionCourses courses={author.courses} type={2} hideButton={true} navigation={navigation}/>
            <View style={{margin: 10}}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 10, 
        maxHeight: 70
    },
    darkText: {
        color: 'grey',
        marginBottom: 15,
    },
    description: {
        color: '#757575',
        fontSize: 17,
    }
});

export default AuthorDetails;