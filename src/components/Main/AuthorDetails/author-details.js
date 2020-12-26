import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';
import Rating from '../../Common/rating';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const AuthorDetails = ({ route, navigation }) => {
    const { author } = route.params;
    const { language, theme } = useContext(SettingCommonContext);

    const courses = author.courses;
    for (let i = 0; i < courses.length; i++) {
        courses[i].instructorName = author.name;
    }

    return (
        <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center', marginBottom: 5, flexDirection: 'row'}}>
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{uri: author.avatar}}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title} numberOfLines={1}>{author.name}</Text>
                    <Text style={styles.darkText}>{author.major}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Rating number={author.averagePoint} modify={false}/>
                        <Text style={{ color: 'grey', marginLeft: 5 }}>({author.countRating} {language ? "ratings" : "đánh giá"})</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10}}>
                <Text style={{fontSize: 15, color: '#616161', fontWeight: 'bold'}}>{language ? "Intro" : "Giới thiệu"}</Text>
                <Text style={{fontSize: 15, color: '#616161'}} >
                    {author.intro !== null ? author.intro : 'Không có'}
                </Text>
            </View>

            <View style={{ backgroundColor: '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10}}>
                <Text style={{fontSize: 15, color: '#616161', fontWeight: 'bold'}}>{language ? "Skills" : "Kỹ năng"}</Text>
                {author.skills.length !== 0 ? author.skills.map(item => (
                    <Text style={{fontSize: 15, color: '#616161'}} >
                        {item}
                    </Text>
                )) : <Text style={{fontSize: 15, color: '#616161'}} >Không có</Text>}
                
            </View>

            <View style={{ backgroundColor: '#E0E0E0', borderRadius: 5, padding: 10, marginBottom: 30}}>
                <Text style={{fontSize: 15, color: '#616161', fontWeight: 'bold'}}>{language ? "Contact" : "Thông tin liên hệ"}</Text>
                <Text style={{fontSize: 15, color: '#616161'}} >Email: {author.email}</Text>
                <Text style={{fontSize: 15, color: '#616161'}} >Phone: {author.phone}</Text>
            </View>

            <SectionCourses courses={author.courses} 
                title={language ? "Courses" : "Các khóa học"}
                type={1} 
                hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                navigation={navigation}
            />
            <View style={{margin: 10}}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 5, 
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