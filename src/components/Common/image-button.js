import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ImageButton = ({title, onPress}) => {
    return (
        <ImageBackground style={styles.button} source={{url: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}>
            <TouchableOpacity style={styles.touch} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        margin: 5,
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default ImageButton;