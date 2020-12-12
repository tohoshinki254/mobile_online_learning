import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { navName, monthNames } from '../../../../Global/constant';

const SectionCoursesItem2 = ({item, navigation}) => {
    const getDetails = () => { 
        navigation.push(navName.courseDetails, { item: item })
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => getDetails()}>
            <Image source={{url: item.imageUrl || item.courseImage}} style={styles.image}/>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14, marginBottom: 3}} numberOfLines={1}>{item.title || item.courseTitle}</Text>
                <Text style={styles.darkText} numberOfLines={1}>{item["instructor.user.name"] || item.instructorName}</Text>
                <Text style={styles.darkText}>
                    {item.createdAt !== undefined ? `${monthNames[parseInt(item.createdAt.slice(5, 7)) - 1]} ${item.createdAt.slice(8, 10)}, ${item.createdAt.slice(0, 4)}  .  ${item.totalHours}h`
                        : `${monthNames[parseInt(item.latestLearnTime.slice(5, 7)) - 1]} ${item.latestLearnTime.slice(8, 10)}, ${item.latestLearnTime.slice(0, 4)}  .  ${item.process}h`}
                </Text>
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