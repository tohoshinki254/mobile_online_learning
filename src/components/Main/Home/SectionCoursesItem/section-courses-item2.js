import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native'
import { navName, monthNames } from '../../../../Global/constant';
import Rating from '../../../Common/rating';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const SectionCoursesItem2 = ({item, navigation}) => {
    const { language, theme } = useContext(SettingCommonContext);

    const getDetails = () => { 
        navigation.push(navName.courseDetails, { item: item })
    }

    return (
        <TouchableOpacity style={styles.item(theme)} onPress={() => getDetails()}>
            <Image source={{uri: item.imageUrl || item.courseImage}} style={styles.image}/>
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14, marginBottom: 3, color: theme ? 'lightgray' : '#616161'}} numberOfLines={1}>{item.title || item.courseTitle}</Text>
                <Text style={styles.darkText(theme)} numberOfLines={1}>{item["instructor.user.name"] || item.instructorName || item.name}</Text>
                <Text style={styles.darkText(theme)} numberOfLines={1}>
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
                    {item.ratedNumber !== undefined ? <Text style={{ marginLeft: 5, color: theme ? 'lightgray' : 'gray' }}>({item.ratedNumber} ratings)</Text> : null}
                </View>
                : null}

                {item.process !== undefined ?
                    <View style={styles.process(theme)}>
                        <Animated.View style={[StyleSheet.absoluteFill, { borderRadius: 50, backgroundColor: '#fbc02d', width: `${item.process}%` }]}/>
                        <Text style={{ fontSize: 12, color: 'gray', fontWeight: 'bold' }}>{`${Math.round(item.process)}% ${language ? "completed" : "hoàn thành"}`}</Text>
                    </View>
                : null}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: (theme) => {
        return {
            margin: 5,
            width: 250,
            height: '100%',
            backgroundColor: theme ? '#424242' : 'lightgray',
        }
    },
    image: {
        width: '100%',
        height: 100,
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray',
        }
    },
    price: {
        color: 'red',
        fontSize: 15
    },
    process: (theme) => {
        return {
            borderRadius: 50, 
            backgroundColor: theme ? 'lightgray' : '#ced', 
            width: '100%',
            marginTop: 10, 
            height: 15,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
});

export default SectionCoursesItem2;