import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, ScrollView, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Rating from '../Common/rating';
import { monthNames } from '../../Global/constant';
import { postRatingCourse } from '../../actions/course-actions';
import { AuthenticationContext } from '../../providers/authentication-provider';
import { SettingCommonContext } from '../../providers/setting-common-provider';
import { SnackbarContext } from '../../providers/snackbar-provider';

const renderComment = (item, theme) => (
    <View style={{ marginBottom: 20 }}>
        {item !== undefined ?
        <View>
            <Text style={{ color: theme ? 'lightgray' : '#616161', fontWeight: 'bold', fontSize: 17, marginBottom: 7}}>{item.user.name}</Text>
            <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                <Rating number={item.averagePoint} modify={false} />
                <Text style={{ marginLeft: 10, color: theme ? 'lightgray' : '#616161'}}>
                    {`${monthNames[parseInt(item.createdAt.slice(5, 7)) - 1]} ${item.createdAt.slice(8, 10)}, ${item.createdAt.slice(0, 4)}`}
                </Text>
            </View>
            <Text style={{ fontSize: 17, color: theme ? 'lightgray' : '#616161' }}>{item.content}</Text>
        </View>
        : null}
    </View>
)

const percentBar = (percent, theme) => (
    <View style={{ borderRadius: 50, backgroundColor: theme ? 'lightgray' : '#616161', width: '70%', marginLeft: 10, height: 10}}>
        <Animated.View style={[StyleSheet.absoluteFill, { borderRadius: 50, backgroundColor: '#fbc02d', width: `${percent}%` }]}/>
    </View>
)

const Comment = ({ navigation, route }) => {
    const details = route.params.details;
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);
    const snackContext = useContext(SnackbarContext);
    const [content, setContent] = useState('');
    const [star, setStar] = useState(0);

    const addRating = () => {
        const data = {
            courseId: details.id,
            formalityPoint: star,
            contentPoint: star,
            presentationPoint: star,
            content: content
        };
        postRatingCourse(authContext.state.token, data, snackContext.setSnackbar);
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <TouchableWithoutFeedback>
                <ScrollView style={styles.root(theme)}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title(theme)}>{language ? "Rating" : "Đánh giá"}</Text>
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
                            <Text style={styles.averagePoint(theme)}>{details.averagePoint}</Text>
                            <Text style={styles.darkText(theme)}>({details.ratings.ratingList.length} {language ? "ratings" : "đánh giá"})</Text>
                        </View>
                        <View>
                            <View style={styles.percent}>
                                <Text style={styles.darkText(theme)}>5&nbsp;</Text>
                                <FontAwesome name="star" color="#fbc02d" size={15} />
                                {percentBar(details.ratings.stars[4], theme)}
                            </View>
                            <View style={styles.percent}>
                                <Text style={styles.darkText(theme)}>4&nbsp;</Text>
                                <FontAwesome name="star" color="#fbc02d" size={15} />
                                {percentBar(details.ratings.stars[3], theme)}
                            </View>
                            <View style={styles.percent}>
                                <Text style={styles.darkText(theme)}>3&nbsp;</Text>
                                <FontAwesome name="star" color="#fbc02d" size={15} />
                                {percentBar(details.ratings.stars[2], theme)}
                            </View>
                            <View style={styles.percent}>
                                <Text style={styles.darkText(theme)}>2&nbsp;</Text>
                                <FontAwesome name="star" color="#fbc02d" size={15} />
                                {percentBar(details.ratings.stars[1], theme)}
                            </View>
                            <View style={styles.percent}>
                                <Text style={styles.darkText(theme)}>1&nbsp;</Text>
                                <FontAwesome name="star" color="#fbc02d" size={15} />
                                {percentBar(details.ratings.stars[0], theme)}
                            </View>
                        </View>
                    </View>

                    {details.ratings.ratingList.map((item) => {
                        return renderComment(item, theme)
                    })}

                    <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                        <View style={{ flex: 1, marginRight: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: theme ? 'lightgray' : '#616161', marginRight: 15 }}>{language ? "Add rating" : "Thêm đánh giá"}</Text>
                                <Rating number={0} modify={true} setStar={setStar}/>
                            </View>
                            <TextInput 
                                style={styles.textInput(theme)}
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
    root: (theme) => {
        return {
            paddingLeft: 10, 
            paddingRight: 10, 
            paddingBottom: 10, 
            paddingTop: 32,
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
    },
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161', 
            fontWeight: 'bold', 
            fontSize: 20, 
            marginBottom: 15, 
            maxHeight: 70
        }
    },
    percent: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    averagePoint: (theme) => {
        return {
            fontSize: 35,
            fontWeight: 'bold',
            color: theme ? 'lightgray' : '#616161', 
        }
    },
    textInput: (theme) => {
        return {
            width: '100%',
            height: 40,
            borderWidth: 1.5,
            borderRadius: 4,
            borderColor: theme ? 'lightgray' : 'gray',
            padding: 5,
            marginTop: 5,
            color: theme ? 'lightgray' : '#616161', 
        }
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray'
        } 
    }
});
