import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ImageButton = ({title, onPress, URL, fontSize}) => {
    return (
        <ImageBackground style={styles.button} source={{uri: URL}}>
            <TouchableOpacity style={styles.touch} onPress={onPress}>
                <Text style={[styles.text, {fontSize: fontSize}]}>{title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 110,
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default ImageButton;