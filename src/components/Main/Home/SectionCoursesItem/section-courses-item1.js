import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { navName, monthNames } from '../../../../Global/constant';
import Rating from '../../../Common/rating';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const SectionCoursesItem1 = ({item, navigation}) => {
    const { language, theme } = useContext(SettingCommonContext);

    const getDetails = () => {
        console.log(item);
        navigation.push(navName.courseDetails, { item: item })
    }
 
    return (
        <TouchableOpacity style={styles.item} onPress={() => getDetails()}>
            <Image source={{uri: item.imageUrl || item.courseImage}} style={styles.image}/>
            <View style={{flex: 1, marginLeft: 15, paddingRight: 5}}>
                <Text style={{color: theme ? 'lightgray' : '#424242', fontSize: 17, marginBottom: 3}} numberOfLines={2}>{item.title || item.courseTitle}</Text>
                <Text style={styles.darkText(theme)}>{item["instructor.user.name"] || item.instructorName || item.name}</Text>
                <Text style={styles.darkText(theme)} numberOfLines={1}>
                {item.updatedAt !== undefined ? `${monthNames[parseInt(item.updatedAt.slice(5, 7)) - 1]} ${item.updatedAt.slice(8, 10)}, ${item.updatedAt.slice(0, 4)}  .  ${item.totalHours}h`
                        : (item.latestLearnTime !== undefined ? `${monthNames[parseInt(item.latestLearnTime.slice(5, 7)) - 1]} ${item.latestLearnTime.slice(8, 10)}, ${item.latestLearnTime.slice(0, 4)}  .  ${item.process}h` : null)}
                </Text>
                {item.price !== undefined ?
                    <Text style={styles.price}>
                        {item.price === 0 ? (language ? "FREE" : "MIỄN PHÍ") : item.price + " VND"}
                    </Text>
                : null}
                <View style={{marginBottom: 3}}/>
                {item.contentPoint !== undefined || item.courseAveragePoint !== undefined ?
                <View style={{ flexDirection: 'row' }}>
                    <Rating number={(item.contentPoint + item.formalityPoint + item.presentationPoint) / 3 || item.courseAveragePoint} />
                    {item.ratedNumber !== undefined ? <Text style={{ marginLeft: 5, color: theme ? 'lightgray' : 'gray' }}>({item.ratedNumber} ratings)</Text> : null}
                </View>
                : null}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 60,
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray',
            fontSize: 14,
            marginTop: 3,
        }
    },
    price: {
        color: 'red',
        fontSize: 15,
        marginTop: 3,
    }
});

export default SectionCoursesItem1;