import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ListCoursesItem = ({item}) => {
    return (
        <View style={styles.item}>
            <Image style={styles.image} source={require('../../../../assets/icon.png')} />
            <View style={{margin: 5}}>
                <Text>{item.title}</Text>
                <Text style={styles.darkText}>{item.author}</Text>
                <Text style={styles.darkText}>{`${item.level} . ${item.released} . ${item.duration}`}</Text>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: 5,
    },
    image: {
        width: 100,
        height: 50,
    },
    darkText: {
        color: 'gray',
    }
});

export default ListCoursesItem;