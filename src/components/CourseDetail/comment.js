import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Rating from '../Common/rating';
import { monthNames } from '../../Global/constant';

const renderComment = (item) => (
    <View style={{ marginBottom: 40 }}>
        {item !== undefined ?
        <View>
            <Text style={{ color: '#616161', fontWeight: 'bold', fontSize: 17, marginBottom: 7}}>{item.user.name}</Text>
            <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                <Rating number={item.averagePoint} />
                <Text style={{ marginLeft: 10, color: '#616161'}}>
                    {`${monthNames[parseInt(item.createdAt.slice(5, 7)) - 1]} ${item.createdAt.slice(8, 10)}, ${item.createdAt.slice(0, 4)}`}
                </Text>
            </View>
            <Text style={{ fontSize: 17, color: '#616161' }}>{item.content}</Text>
        </View>
        : null}
    </View>
)

const percentBar = (percent) => (
    <View style={{ borderRadius: 50, backgroundColor: '#616161', width: '70%', marginLeft: 10, height: 10}}>
        <Animated.View style={[StyleSheet.absoluteFill, { borderRadius: 50, backgroundColor: '#fbc02d', width: `${percent}%` }]}/>
    </View>
)

const Comment = ({ details }) => {
    return (
        <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 10}}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.averagePoint}>{details.averagePoint}</Text>
                    <Text>({details.ratings.ratingList.length} ratings)</Text>
                </View>
                <View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>5&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        {percentBar(details.ratings.stars[4])}
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>4&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        {percentBar(details.ratings.stars[3])}
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>3&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        {percentBar(details.ratings.stars[2])}
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>2&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        {percentBar(details.ratings.stars[1])}
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>1&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        {percentBar(details.ratings.stars[0])}
                    </View>
                </View>
            </View>
            {details.ratings.ratingList.map((item) => {
                return renderComment(item)
            })}
        </View>
    )
}

export default Comment;

const styles = StyleSheet.create({
    percent: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    averagePoint: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#616161'
    }
});
