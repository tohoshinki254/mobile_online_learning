import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Rating from '../Common/rating';

const renderComment = (item) => (
    <View style={{ marginBottom: 20 }}>
        {item !== undefined ?
        <View>
            <Text style={{ color: '#616161', fontWeight: 'bold', fontSize: 17, marginBottom: 7}}>{item.user.name}</Text>
            <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                <Rating number={item.averagePoint} />
                <Text style={{ marginLeft: 10, color: '#616161'}}>1 day ago</Text>
            </View>
            <Text style={{ fontSize: 17, color: '#616161' }}>{item.content}</Text>
        </View>
        : null}
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
                        <ProgressBar progress={0.5} color={Colors.red800} />
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>4&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        <ProgressBar progress={0.5} color="#fbc02d"/>
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>3&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        <ProgressBar progress={0.5} color="#fbc02d"/>
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>2&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        <ProgressBar progress={0.5} color="#fbc02d"/>
                    </View>
                    <View style={styles.percent}>
                        <Text style={{ color: 'grey' }}>1&nbsp;</Text>
                        <FontAwesome name="star" color="#fbc02d" size={15} />
                        <ProgressBar progress={0.5} color="#fbc02d"/>
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
        margin: 5
    },
    averagePoint: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#616161'
    }
});
