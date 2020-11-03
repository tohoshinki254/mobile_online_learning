import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SectionPathItems1 = ({item}) => {
    return (
        <View style={styles.item}>
            <Image source={{url: 'https://ak.picdn.net/shutterstock/videos/30978124/thumb/1.jpg'}} style={styles.image}/>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14, marginBottom: 5}}>{item.title}</Text>
                <Text style={styles.darkText}>{item.quantum}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 250,
        height: 170,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: 95,
    },
    darkText: {
        color: 'gray',
    }
});

export default SectionPathItems1;