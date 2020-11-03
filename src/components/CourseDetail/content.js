import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Content = ({item}) => {
    const renderContent = (content) => {
        return (
            <View style={{flexDirection: 'row', marginLeft: 8, alignItems: 'center', marginBottom: 17, maxWidth: 300}}>
                <Image source={{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1200px-Location_dot_grey.svg.png'}}
                    style={{width: 13, height: 13, marginRight: 24}}
                />
                <Text style={styles.content}>{content}</Text>
            </View>
        )
    }

    return (
        <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}>
                <View style={styles.index}> 
                    <Text style={{fontWeight: 'bold', color: '#616161'}}>{item.index}</Text>
                </View>
                <View style={{flex: 1, marginLeft: 15}}> 
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    <Text style={{color: 'grey', fontSize: 15}}>{item.duration}</Text>
                </View>
                <TouchableOpacity>
                    <Image source={{url: 'https://static.thenounproject.com/png/1380510-200.png'}}
                        style={{width: 25, height: 25}}     
                    />
                </TouchableOpacity>
            </View>
            {item.content.map(content => (
                renderContent(content)
            ))}
        </View> 
    )
}

const styles = StyleSheet.create({
    index: {
        borderColor: 'gray', 
        borderRadius: 40/2, 
        borderWidth: 2, 
        width: 30, 
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 17,
        maxWidth: 250,
        marginBottom: 5
    },
    content: {
        color: '#616161',
        fontSize: 15,
    }
});

export default Content;
