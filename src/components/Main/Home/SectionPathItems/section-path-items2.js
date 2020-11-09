import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navName } from '../../../../Global/constant';

const SectionPathItems2 = ({item, navigation }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.push(navName.path)}>
            <Image source={{url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}} style={styles.image}/>
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