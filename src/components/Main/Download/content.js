import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const Content = ({ title, itemClick }) => {
    const [videos, setVideos] = useState([]);
    const { language, theme } = useContext(SettingCommonContext);

    useEffect(() => {
        async function get() {
            setVideos(await FileSystem.readDirectoryAsync(FileSystem.documentDirectory + title.split(" ").join("%20")));
        }
        get();
    }, [setVideos])

    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}>
                <Text style={styles.title(theme)} numberOfLines={2}>{title}</Text>
            </View>
            {videos.map((item, index) => (
            <TouchableOpacity style={{marginBottom: 17, marginLeft: 20}}
                onPress={() => itemClick(FileSystem.documentDirectory + title + '/' + item)}
            >
                <View style={{flexDirection: 'row', marginLeft: 8, alignItems: 'center', maxWidth: 300}}>
                    <Text style={{...styles.content(theme), marginRight: 24}}>{index + 1}</Text>
                    <Text style={styles.content(theme)} numberOfLines={2}>{item.split(".mp4")}</Text>
                </View>
            </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontSize: 17,
            maxWidth: 250,
            marginBottom: 5,
            fontWeight: 'bold'
        }
        
    },
    content: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontSize: 15,
            fontWeight: 'bold'
        }
    }
});

export default Content;