import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navName } from '../../../../Global/constant';

const SectionPathItems2 = ({item, navigation }) => {
    const seePathDetails = () => {
        navigation.push(navName.path, { item: item });
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => seePathDetails()}>
            <Image source={{url: item.url}} style={styles.image}/>
            <View style={{marginLeft: 15, marginRight: 10}}>
                <Text style={{color: '#424242', fontSize: 17}}>{item.title}</Text>
                <Text style={styles.darkText}>{`${item.quantum} . ${item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 10,
        width: '100%',
        flexDirection: 'row',
    },
    image: {
        width: 95,
        height: 65  ,
        alignSelf: 'center',
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 3,
    }
});

export default SectionPathItems2;