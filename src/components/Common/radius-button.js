import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const RadiusButton = ({onPress, text}) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={{color: 'white', fontSize: 15}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 5,
        backgroundColor: '#FF5252',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
    }
});

export default RadiusButton;