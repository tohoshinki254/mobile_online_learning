import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { navName } from '../../../../Global/constant';

const SectionCoursesItem2 = ({item, navigation}) => {
    const getDetails = () => {
        navigation.push(navName.courseDetails)
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => getDetails()}>
            <Image source={{url: item.url}} style={styles.image}/>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14, marginBottom: 3}} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.darkText} numberOfLines={1}>{item.author}</Text>
                <Text style={styles.darkText}>{item.level}</Text>
                <Text style={styles.darkText}>{`${item.released} . ${item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 250,
        height: 200,
        backgroundColor: 'lightgray',
        borderRadius: 5,
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