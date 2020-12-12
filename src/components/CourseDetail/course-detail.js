import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from './content';
import RadiusButton from '../Common/radius-button';
import IconButton from '../Common/icon-button';
import { navName, monthNames } from '../../Global/constant';

const CourseDetail = ({ route, navigation }) => {
    const { item } = route.params;

    const contents = [
        {
            index: '1',
            title: 'Introduction',
            duration: '12min',
            content: ['Course Outline', 'Join Our Online Classroom', 'Exercise: Meet the community', 'Join Our Open Source Projects']
        },
        {
            index: '2',
            title: 'How The Internet Works',
            duration: '24min',
            content: ['Browsing the Web', 'Breaking Google', 'The Internet Backbone', 'Traceroute', 'Developer Fundamentals I', 'What does a developer do?']
        },
        {
            index: '3',
            title: 'History Of The Web',
            duration: '15min',
            content: ['WWW vs Internet', 'HTML, CSS, Javascript', 'Developer Fundamentals II', 'Developer History']
        },
        {
            index: '4',
            title: 'HTML 5',
            duration: '40min',
            content: ['Build Your First Website', 'DEVELOPER FUNDAMENTALS: III', 'HTML Tags', 'HTML Tags 2', 'Self Closing HTML Tags', 'Anchor Tag']
        }
    ];

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

    const [showDesc, setShowDesc] = useState(false);

    const seeAuthorDetails = () => {
        navigation.push(navName.author/*, { author: authors.find(a => a.name === item.author)}*/)
    }

    return (
        <View style={{ marginTop: 20, marginBottom: 175 }}>
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

            <ScrollView style={{margin: 10}}>
                <Text style={styles.title} numberOfLines={2}>{item.title || item.courseTitle}</Text>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <RadiusButton onPress={() => seeAuthorDetails()} text={item["instructor.user.name"] || item.instructorName} />
                </View>
                <Text style={styles.darkText}>{item.createAt !== undefined ? 
                    `${monthNames[parseInt(item.createdAt.slice(5, 7)) - 1]} ${item.createdAt.slice(8, 10)}, ${item.createdAt.slice(0, 4)}  .  ${item.totalHours}h`
                    : `${monthNames[parseInt(item.latestLearnTime.slice(5, 7)) - 1]} ${item.latestLearnTime.slice(8, 10)}, ${item.latestLearnTime.slice(0, 4)}  .  ${item.process}h`}
                </Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
                    <IconButton url='https://cdn.iconscout.com/icon/premium/png-256-thumb/bookmark-44-206919.png'
                        text='Bookmark'
                        onPress={() => {}}
                    />
                    <IconButton url='https://icon-library.com/images/add-icon-transparent/add-icon-transparent-23.jpg'
                        text='Add to channel'
                        onPress={() => {}}
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
                        {item.description}
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
                    data={contents}
                    renderItem={({item}) => <Content item={item}/>}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
            </ScrollView>
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