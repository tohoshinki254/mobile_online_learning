import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { navName } from '../../../../Global/constant';

const SectionPathItems1 = ({item, navigation}) => {
    const seePathDetails = () => {
        navigation.push(navName.path, { item: item });
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => seePathDetails()}>
            <Image source={{url: item.url}} style={styles.image}/>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14, marginBottom: 5}} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.darkText}>{item.quantum}</Text>
            </View>
        </TouchableOpacity>
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