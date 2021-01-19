import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import * as FileSystem from 'expo-file-system';
import Content from './content';
import { ScrollView } from 'react-native-gesture-handler';

const Download = ({ navigation }) => {
    const { theme, language } = useContext(SettingCommonContext);

    const [downloaded, setDownloaded] = useState([]);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        async function get() {
            setDownloaded(await FileSystem.readDirectoryAsync(FileSystem.documentDirectory));
        }
        get();
    }, [setDownloaded])

    const renderEmptyCourses = () => {
        return (
            <View style={{margin: 10}}>
                <Text style={styles.title(theme)}>
                    {language ? "Watch your courses on the go!" : "Xem các khóa học bạn đã tải"} 
                </Text>
                <Text style={styles.darkText(theme)}>
                    {language ? "Download courses so you can continue to skill up - even when you're offline" : "Tải khóa học để nâng cao khả năng khi không có kết nối"}
                </Text>
            </View>
        )
    }

    const deleteAll = async () => {
        setVideo(null);
        setDownloaded([]);
        const list = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        for (let i = 0; i < list.length; i++) {
            try {
                await FileSystem.deleteAsync(FileSystem.documentDirectory + list[i].split(" ").join("%20"), true);
            } catch (e) {
                console.log(e.message);
            }
        }
    }

    return (
        <View style={styles.root(theme)}>
            {(downloaded === undefined || downloaded.length === 0) ? renderEmptyCourses() :
            <View style={{marginBottom: 150}}>
                <Video
                    source={{ uri: video?.split(" ").join("%20") || 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    resizeMode="stretch"
                    style={{ width: '100%', height: 215 }}
                    useNativeControls={true}
                    isLooping
                    isMuted={false}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <Text style={{color: theme ? 'lightgray' : '#616161', fontWeight: 'bold', fontSize: 20}}>Download</Text>
                    <TouchableOpacity 
                        style={{backgroundColor: '#FF5252', 
                            padding: 4, borderRadius: 50, minWidth: 80,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => deleteAll()}
                    >
                        <Text style={{color: 'white', fontSize: 13}}>Remove all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ marginTop: 15 }}>
                    {downloaded.map((title) => (
                        <Content title={title} itemClick={setVideo} />
                    ))}
                </ScrollView>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            backgroundColor: theme ? '#212121' : '#f3f3f3',
            padding: 10,
            flex: 1
        }
    },  
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161', 
            fontWeight: 'bold', 
            fontSize: 18,
        }
        
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray',
            fontSize: 15,
            marginTop: 3,
        }
    },

});

export default Download;
