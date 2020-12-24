import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Rating from '../Common/rating';
import { monthNames } from '../../Global/constant';
import { postRatingCourse } from '../../actions/course-actions';
import { AuthenticationContext } from '../../providers/authentication-provider';
import { SettingCommonContext } from '../../providers/setting-common-provider';

const renderComment = (item) => (
    <View style={{ marginBottom: 40 }}>
        {item !== undefined ?
        <View>
            <Text style={{ color: '#616161', fontWeight: 'bold', fontSize: 17, marginBottom: 7}}>{item.user.name}</Text>
            <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                <Rating number={item.averagePoint} modify={false} />
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

const Comment = ({ navigation, route }) => {
    const details = route.params.details;
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);
    const [content, setContent] = useState('');
    const [star, setStar] = useState(0);
    const [newRating, setNewRating] = useState({ successful: false, info: null });

    const addRating = () => {
        const data = {
            courseId: details.id,
            formalityPoint: star,
            contentPoint: star,
            presentationPoint: star,
            content: content
        };
        postRatingCourse(authContext.state.token, data, setNewRating);
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <TouchableWithoutFeedback>
                <ScrollView style={{ marginLeft: 10, marginRight: 10, marginBottom: 10, marginTop: 30 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}>{language ? "Rating" : "Đánh giá"}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity 
                                style={{backgroundColor: '#FF5252', 
                                    padding: 4, borderRadius: 50, minWidth: 60, height: 23,
                                    justifyContent: 'center', alignItems: 'center'
                                }}
                                onPress={() => navigation.pop()}
                            >
                                <Text style={{color: 'white', fontSize: 13}}>{language ? "Back" : "Quay lại"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={styles.averagePoint}>{details.averagePoint}</Text>
                            <Text>({details.ratings.ratingList.length} {language ? "ratings" : "đánh giá"})</Text>
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

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, marginRight: 15 }}>
                            <Rating number={0} modify={true} setStar={setStar}/>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText={(text) => setContent(text)}
                                value={content}
                            />
                        </View>
                        <TouchableOpacity 
                            style={{backgroundColor: '#FF5252', 
                                padding: 4, borderRadius: 5, minWidth: 60, height: 40,
                                justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'
                            }}
                            onPress={() => addRating()}
                        >
                            <Text style={{color: 'white', fontSize: 13}}>{language ? "Add" : "Thêm"}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Comment;

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 15, 
        maxHeight: 70
    },
    percent: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    averagePoint: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#616161'
    },
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1.5,
        borderRadius: 4,
        borderColor: 'gray',
        padding: 5,
        marginTop: 5
    },
});
