import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Content from './content';
import RadiusButton from '../Common/radius-button';
import IconButton from '../Common/icon-button';
import Video from 'react-native-video';

const CourseDetail = (props) => {
    const contents = [
        {
            index: '1',
            title: 'Manage Deployments with ARM Templates',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        },
        {
            index: '2',
            title: 'Manage Deployments with ARM',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        },
        {
            index: '3',
            title: 'Manage Deployments with',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        },
        {
            index: '4',
            title: 'Manage Deployments',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
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

    return (
        <View style={{margin: 10}}>
            {/* <Video source={{uri: "https://www.youtube.com/watch?v=G3ABje1ftEs"}}
                style={{position: 'absolute', top: 0, left: 0, height: 200}}
            /> */}

            <ScrollView>
                <Text style={styles.title} numberOfLines={2}>Microsoft Azure Administrator: Automate Deployment and Config</Text>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <RadiusButton onPress={() => {}} text='Michael Teske' />
                </View>
                <Text style={styles.darkText}>Beginner . Oct 29, 2020 . 34m28s</Text>
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
                    <Text style={{fontSize: 15, color: '#616161', flex: 1}} numberOfLines={showDesc ? undefined : 3}>It is a long established fact that a reader will be distracted by the readable content of a 
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                        normal distribution of letters, as opposed to using 'Content here, content here', making it 
                        look like readable English. Many desktop publishing packages and web page editors now use 
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
                        sites still in their infancy. Various versions have evolved over the years, sometimes by 
                        accident, sometimes on purpose (injected humour and the like).
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
                    onPress={() => {}}
                >
                    <Image source={require('../../../assets/related_courses_detail.png')} style={{width: 25, height: 25}}/>
                    <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>Related paths & courses</Text>
                </TouchableOpacity>
                
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