import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { navName, monthNames } from '../../../../Global/constant';
import Rating from '../../../Common/rating';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const SectionCoursesItem2 = ({item, navigation}) => {
    const { language, theme } = useContext(SettingCommonContext);

    const getDetails = () => { 
        navigation.push(navName.courseDetails, { item: item })
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => getDetails()}>
            <Image source={{uri: item.imageUrl || item.courseImage}} style={styles.image}/>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14, marginBottom: 3}} numberOfLines={1}>{item.title || item.courseTitle}</Text>
                <Text style={styles.darkText} numberOfLines={1}>{item["instructor.user.name"] || item.instructorName || item.name}</Text>
                <Text style={styles.darkText} numberOfLines={1}>
                    {item.updatedAt !== undefined ? `${monthNames[parseInt(item.updatedAt.slice(5, 7)) - 1]} ${item.updatedAt.slice(8, 10)}, ${item.updatedAt.slice(0, 4)}  .  ${item.totalHours}h`
                        : (item.latestLearnTime !== undefined ? `${monthNames[parseInt(item.latestLearnTime.slice(5, 7)) - 1]} ${item.latestLearnTime.slice(8, 10)}, ${item.latestLearnTime.slice(0, 4)}  .  ${item.process}h` : null)}
                </Text>
                {item.price !== undefined ?
                    <Text style={styles.price}>
                        {item.price === 0 ? (language ? "FREE" : "MIỄN PHÍ") : item.price + " VND"}
                    </Text>
                : null}
                {item.contentPoint !== undefined || item.courseAveragePoint !== undefined ?
                <View style={{ flexDirection: 'row' }}>
                    <Rating number={(item.contentPoint + item.formalityPoint + item.presentationPoint) / 3 || item.courseAveragePoint} />
                    {item.ratedNumber !== undefined ? <Text style={{ marginLeft: 5, color: 'grey' }}>({item.ratedNumber} ratings)</Text> : null}
                </View>
                : null}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 250,
        height: '100%',
        backgroundColor: 'lightgray',
    },
    image: {
        width: '100%',
        height: 100,
    },
    darkText: {
        color: 'gray',
    },
    price: {
        color: 'red',
        fontSize: 15
    }
});

export default SectionCoursesItem2;