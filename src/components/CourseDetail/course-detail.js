import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from './content';
import RadiusButton from '../Common/radius-button';
import IconButton from '../Common/icon-button';
import { navName, monthNames } from '../../Global/constant';
import { getDetailWithLesson } from '../../actions/course-actions';
import { AuthenticationContext } from '../../providers/authentication-provider';
import { likeCourse } from '../../actions/user-actions';

const CourseDetail = ({ route, navigation }) => {
    const { item } = route.params;
    const [showDesc, setShowDesc] = useState(false);
    const authContext = useContext(AuthenticationContext);
    const [course, setCourse] = useState({ successful: false, details: null });
    const [like, setLike] = useState({ successful: false });

    useEffect(() => {
        if (!course.successful && (course.details === null || course.details === undefined)) {
            getDetailWithLesson(authContext.state.token, item.id, setCourse);
        }
    }, [authContext, course, setCourse])

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 5,
              borderRadius: 50,
            }}
          />
        );
    }

    

    const seeAuthorDetails = () => {
        navigation.push(navName.author/*, { author: authors.find(a => a.name === item.author)}*/)
    }

    const likeCourseAction = () => {
        if (!like.successful) {
            likeCourse(authContext.state.token, item.id, setLike);
        }
    }

    return (
        <View style={{ marginTop: 20, marginBottom: 175 }}>
            {course.successful ?
            <View >
                <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20, zIndex: 1}}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="times" size={27} color="white" />
                </TouchableOpacity>

                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: '100%', height: 170 }}
                />

                <ScrollView style={{margin: 10, marginBottom: 175}}>
                    <Text style={styles.title} numberOfLines={2}>{course.details.title}</Text>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                        <RadiusButton onPress={() => seeAuthorDetails()} text={course.details["instructorName"]} />
                    </View>
                    <Text style={styles.darkText}>{`${monthNames[parseInt(course.details.createdAt.slice(5, 7)) - 1]} ${course.details.createdAt.slice(8, 10)}, ${course.details.createdAt.slice(0, 4)}  .  ${course.details.totalHours}h`}</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
                        <IconButton url='https://cdn.iconscout.com/icon/premium/png-256-thumb/bookmark-44-206919.png'
                            text='Bookmark'
                            onPress={() => {}}
                        />
                        <IconButton url='https://webstockreview.net/images/like-icon-png-4.png'
                            text='Like'
                            onPress={() => likeCourseAction()}
                        />
                        <IconButton url='https://www.svgimages.com/svg-image/s8/download-folder-icon-grey-256x256.png'
                            text='Download'
                            onPress={() => {}}
                        />
                    </View>
                    {FlatListItemSeparator()}
                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
                        <Text style={{fontSize: 15, color: '#616161', flex: 1}} 
                            numberOfLines={showDesc ? undefined : 2}
                        >
                            {course.details.description}
                        </Text>
                        <TouchableOpacity style={{backgroundColor: 'lightgray', borderRadius: '3',
                                    width: '10%', justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => setShowDesc(!showDesc)}
                        >
                            {showDesc ?
                                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_up_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                                :
                                <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.push(navName.relatedPathsCourses)}
                    >
                        <Image source={require('../../../assets/related_courses_detail.png')} style={{width: 25, height: 25}}/>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>Related paths & courses</Text>
                    </TouchableOpacity>
                    {FlatListItemSeparator()}
                    
                    
                    <Text style={[styles.title, {marginTop: 15}]}>Content</Text>
                    <FlatList 
                        data={course.details.section}
                        renderItem={({item}) => <Content item={item}/>}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
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
        flexDirection: 'row',
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#EF5350',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CourseDetail;