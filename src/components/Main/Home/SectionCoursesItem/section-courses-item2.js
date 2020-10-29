import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SectionCoursesItem2 = ({item}) => {
    return (
        <View style={styles.item}>
            <Image source={require('../../../../../assets/favicon.png')} style={styles.image}/>
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
        margin: 5,
        width: 200,
        height: 200,
        backgroundColor: 'lightgray',
    },
    image: {
        width: '100%',
        height: 100,
    },
    darkText: {
        color: 'gray',
    }
});

export default SectionCoursesItem2;