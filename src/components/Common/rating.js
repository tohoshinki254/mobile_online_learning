import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Star = ({ filled }) => {
    return (
        <FontAwesome name={filled === true ? "star" : "star-o"}
            color="#fbc02d" 
            size={17} 
        />
    )
}

const Rating = ({ number, modify, setStar }) => {
    const numStars = 5;
    let star = [];
    const [rating, setRating] = useState(number);

    for (let i = 1; i <= numStars; i++) {
        star.push(modify ? 
            <TouchableWithoutFeedback key={i} onPress={() => {setRating(i); setStar(i)}}>
                <Animated.View>
                    <Star filled={ i <= rating ? true : false }/>
                </Animated.View>    
            </TouchableWithoutFeedback>
        : <Star filled={ i <= rating ? true : false }/>)
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {star}
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({});
