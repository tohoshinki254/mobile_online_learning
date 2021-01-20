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
        <ScrollView style={{padding: 10, backgroundColor: theme ? '#212121' : '#f3f3f3'}} showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center', marginBottom: 5, flexDirection: 'row'}}>
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{uri: author.avatar}}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title(theme)} numberOfLines={1}>{author.name}</Text>
                    <Text style={styles.darkText(theme)}>{author.major}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Rating number={author.averagePoint} modify={false}/>
                        <Text style={{ color: theme ? 'lightgray' : 'gray', marginLeft: 5 }}>({author.countRating} {language ? "ratings" : "đánh giá"})</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: theme ? '#424242' : '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10}}>
                <Text style={[styles.textInfo(theme), { fontWeight: 'bold' }]}>{language ? "Intro" : "Giới thiệu"}</Text>
                <Text style={styles.textInfo(theme)} >
                    {author.intro !== null ? author.intro : 'Không có'}
                </Text>
            </View>

            <View style={{ backgroundColor: theme ? '#424242' : '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10}}>
                <Text style={[styles.textInfo(theme), { fontWeight: 'bold' }]}>{language ? "Skills" : "Kỹ năng"}</Text>
                {author.skills.length !== 0 ? author.skills.map(item => (
                    <Text style={styles.textInfo(theme)} >
                        {item}
                    </Text>
                )) : <Text style={styles.textInfo(theme)} >Không có</Text>}
                
            </View>

            <View style={{ backgroundColor: theme ? '#424242' : '#E0E0E0', borderRadius: 5, padding: 10, marginBottom: 30}}>
                <Text style={[styles.textInfo(theme), { fontWeight: 'bold' }]}>{language ? "Contact" : "Thông tin liên hệ"}</Text>
                <Text style={styles.textInfo(theme)} >Email: {author.email}</Text>
                <Text style={styles.textInfo(theme)} >Phone: {author.phone}</Text>
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
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161', 
            fontWeight: 'bold', 
            fontSize: 20, 
            marginBottom: 5, 
            maxHeight: 70
        }
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray',
            marginBottom: 15,
        }
    },
    description: (theme) => {
        return {
            color: '#757575',
            fontSize: 17,
        }
    },
    textInfo: (theme) => {
        return {
            fontSize: 15, 
            color: theme ? 'lightgray' : '#616161',
        }
    }
});

export default AuthorDetails;