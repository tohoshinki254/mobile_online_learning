import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, text}) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#EF5350',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 150,
    }
});

export default Button;