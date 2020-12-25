import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const IconButton = ({success, url, text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.root}>
            <View style={{backgroundColor: success ? '#EF5350' : 'lightgray', borderRadius: 50, padding: 15}}>
                <Image source={{uri: url}} style={styles.image}/>
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        width: 25,
        height: 25,
    },
    text: {
        color: '#616161',
        marginTop: 5,
        fontSize: 13,
    }
});

export default IconButton;