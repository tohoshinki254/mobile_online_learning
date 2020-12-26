import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from './content';
import RadiusButton from '../Common/radius-button';
import YoutubeVideo from '../Common/youtube-video';
import { navName, monthNames } from '../../Global/constant';
import { getCourseDetails } from '../../actions/course-actions';
import { AuthenticationContext } from '../../providers/authentication-provider';
import { SettingCommonContext } from '../../providers/setting-common-provider';
import { SnackbarContext } from '../../providers/snackbar-provider';
import { likeCourse, getCourseLikeStatus } from '../../actions/user-actions';
import { buyFreeCourse, getPaymentInfo } from '../../actions/payment-actions';
import Rating from '../Common/rating';
import SectionCourses from '../Main/Home/SectionCourses/section-courses';

const CourseDetail = ({ route, navigation }) => {
    const { item } = route.params;
    const [showDesc, setShowDesc] = useState(false);
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);
    const snackContext = useContext(SnackbarContext);
    const [course, setCourse] = useState({ successful: false, details: null });
    const [statusLike, setStatusLike] = useState({ successful: false, status: false });
    const [payment, setPayment] = useState({ successful: false, info: false });
    const [video, setVideo] = useState(null);

    useEffect(() => {
        if (!statusLike.successful) {
            getCourseLikeStatus(authContext.state.token, item.id, setStatusLike);
        }
    }, [statusLike, setStatusLike, authContext])

    useEffect(() => {
        if (!payment.successful) {
            getPaymentInfo(authContext.state.token, item.id, setPayment);
        }
    }, [payment, setPayment, authContext])

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                await getCourseDetails(item.id, setCourse);
            })();
            if (course.successful) {
                setVideo(course.details.promoVidUrl);
            }
            return undefined;
        }, [authContext, setCourse])
    )

    const seeAuthorDetails = () => {
        navigation.push(navName.author, { author: course.details.instructor });
    }

    const likeCourseAction = () => {
        likeCourse(authContext.state.token, item.id, setStatusLike, snackContext.setSnackbar);
    }
    
    const buyCourse = () => {
        if (course.details.price === 0) {
            const data = {
                courseId: item.id
            };
            buyFreeCourse(authContext.state.token, data, setPayment, snackContext.setSnackbar);
        }
    }

    const checkTypeVideo = (link) => {
        return link !== null ? link.search("youtu") != -1 : false;
    }
    const lessonClick = (link) => {
        setVideo(link);
    }
    const displayVideo = () => {
        return video !== null ? video : course.details.promoVidUrl;
    }

    return (
        <View style={{ marginTop: 20, marginBottom: 200, height: '100%' }}>
            {course.successful ?
            <View >
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20, zIndex: 1}}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="times" size={27} color="white" />
                </TouchableOpacity>

                {checkTypeVideo(displayVideo()) ? 
                <YoutubeVideo id={displayVideo().slice(displayVideo().length - 11, displayVideo().length)}/>
                : <Video
                    source={{ uri: displayVideo() || 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    resizeMode="stretch"
                    style={{ width: '100%', height: 215 }}
                    useNativeControls={true}
                    isLooping
                    isMuted={false}
                />}
                

                <ScrollView style={{margin: 10, marginBottom: 175}} showsVerticalScrollIndicator={false}>
                <Text style={styles.title} numberOfLines={2}>{course.details.title}</Text>
                    <View style={{flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between'}}>
                        <RadiusButton onPress={() => seeAuthorDetails()} text={course.details.instructor.name} />
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.darkText, { marginRight: 10 }]} numberOfLines={1}>{`${monthNames[parseInt(course.details.createdAt.slice(5, 7)) - 1]} ${course.details.createdAt.slice(8, 10)}, ${course.details.createdAt.slice(0, 4)}  .  ${course.details.totalHours.toString().slice(0, 4)}h`}</Text>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'red', fontSize: 15, marginBottom: 15, fontWeight: 'bold', marginRight: 15 }}>
                            {course.details.price === 0 ? (language ? "FREE" : "MIỄN PHÍ") : course.details.price + " VND"}
                        </Text>
                        <Rating number={course.details.averagePoint} modify={false} />
                        <Text style={{ marginLeft: 5, color: 'grey' }}>({course.details.ratedNumber} ratings)</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
                        <TouchableOpacity
                            style={styles.btnCustom(1)}
                            onPress={() => likeCourseAction()}
                        >
                            <Text style={styles.textLayout(1)}>{statusLike.status ? (language ? 'Unlike' : 'Huỷ thích') : (language ? 'Like' : 'Yêu thích')}</Text>
                            <Icon name="heart" size={24} color="#FF5252" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnCustom(2)}
                            onPress={() => buyCourse()}
                        >
                            <Text style={styles.textLayout(2)}>{payment.info ? (language ? 'Enjoyed' : 'Đã tham gia') : language ? 'Enjoy' : 'Tham gia'}</Text>
                            <Icon name="thumb-tack" size={24} color="#2196F3" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10}}>
                        <Text style={{fontSize: 15, color: '#616161', fontWeight: 'bold'}}>{language ? "Learn what" : "Những gì bạn sẽ học"}</Text>
                        <Text style={{fontSize: 15, color: '#616161'}} >
                            {course.details.learnWhat !== null ? course.details.learnWhat : 'Không có'}
                        </Text>
                    </View>
                    <View style={{ backgroundColor: '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10}}>
                        <Text style={{fontSize: 15, color: '#616161', fontWeight: 'bold'}}>{language ? "Requirement" : "Yêu cầu"}</Text>
                        <Text style={{fontSize: 15, color: '#616161'}} >
                            {course.details.requirement !== null ? course.details.requirement : 'Không có'}
                        </Text>
                    </View>
                    
                    <View style={{ backgroundColor: '#E0E0E0', borderRadius: 5, padding: 10,marginBottom: 10,
                            flexDirection: 'row'
                    }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Text style={{fontSize: 15, color: '#616161', fontWeight: 'bold'}}>{language ? "Description" : "Mô tả"}</Text>
                            <Text style={{fontSize: 15, color: '#616161'}} 
                                numberOfLines={showDesc ? undefined : 2}
                            >
                                {course.details.description}
                            </Text>
                        </View>
                        
                        <TouchableOpacity style={{backgroundColor: '#BDBDBD', borderRadius: 3,
                                    width: '10%', justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => setShowDesc(!showDesc)}
                        >
                            {showDesc ?
                                <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_up_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                                :
                                <Image source={{uri: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                            }
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.push(navName.rating, { details: course.details })}
                    >
                        <Text style={{color: 'white', fontSize: 15}}>{language ? "Rating" : "Đánh giá từ học viên"}</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20}}></View>

                    <Text style={styles.title}>{language ? "Content" : "Nội dung khóa học"}</Text>
                    <Content sections={course.details.section} lessonClick={lessonClick} />
                    
                    {course.details.coursesLikeCategory.length !== 0 ? 
                        <View style={{ marginTop: 20}}>
                            <SectionCourses courses={course.details.coursesLikeCategory} 
                                title={language ? "Courses Like Category" : "Các khóa học cùng chủ đề"} 
                                type={1} 
                                hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                                navigation={navigation}
                            />
                        </View>
                    : null}

                    <View style={{ marginBottom: 70}}></View>
                </ScrollView>
            </View>
            : null}
        </View>
        
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 15, 
        maxHeight: 70
    },
    darkText: {
        color: 'grey',
        marginBottom: 15,
    },
    button: {
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#EF5350',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCustom: (x) => {
        return {
            width: 150,
            height: 35,
            borderWidth: 1,
            borderColor: x === 1 ? "#FF5252" : "#2196F3",
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        };
    },
    textLayout: (x) => {
        return {
            fontSize: 15,
            color: x === 1 ? "#FF5252" : "#2196F3",
            marginRight: 10,
        };
    },
});

export default CourseDetail;