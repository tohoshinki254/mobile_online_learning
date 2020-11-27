import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { navName } from '../../../../Global/constant';

const SectionCoursesItem1 = ({item, navigation}) => {
    const getDetails = () => {
        navigation.push(navName.courseDetails, { item: item })
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => getDetails()}>
            <Image source={{url: item.url}} style={styles.image}/>
            <View style={{flex: 1, marginLeft: 15, paddingRight: 5}}>
                <Text style={{color: '#424242', fontSize: 17, marginBottom: 3}} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.darkText}>{item.author}</Text>
                <Text style={styles.darkText} numberOfLines={1}>{`${item.level}  .  ${item.released}  .  ${item.duration}`}</Text>
            </View>
            <TouchableOpacity>
                <Image source={{url: 'https://static.thenounproject.com/png/1380510-200.png'}}
                    style={{width: 20, height: 20}}     
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 60,
    },
    darkText: {
        color: 'gray',
        fontSize: 14,
        marginTop: 3,
    }
});

export default SectionCoursesItem1;