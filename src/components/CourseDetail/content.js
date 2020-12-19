import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { getDetailWithLesson } from '../../actions/course-actions';
import { AuthenticationContext } from '../../providers/authentication-provider';

const Content = ({courseId}) => {
    const [course, setCourse] = useState({ successful: false, details: null });
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        if (!course.successful) {
            getDetailWithLesson(authContext.state.token, courseId, setCourse);
        }
    }, []) 

    const renderContent = (item) => (
        <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}>
                <View style={styles.index}> 
                    <Text style={{fontWeight: 'bold', color: '#616161'}}>{item.numberOrder}</Text>
                </View>
                <View style={{flex: 1, marginLeft: 15}}> 
                    <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
                    <Text style={{color: 'grey', fontSize: 15}}>{item.sumHours}h</Text>
                </View>
                <TouchableOpacity>
                    <Image source={{url: 'https://static.thenounproject.com/png/1380510-200.png'}}
                        style={{width: 25, height: 25}}     
                    />
                </TouchableOpacity>
            </View>
            {item.lesson.map(content => (
                <View style={{flexDirection: 'row', marginLeft: 8, alignItems: 'center', marginBottom: 17, maxWidth: 300}}>
                <Image source={{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1200px-Location_dot_grey.svg.png'}}
                    style={{width: 13, height: 13, marginRight: 24}}
                />
                <Text style={styles.content}>{content.name}</Text>
            </View>
            ))}
        </View> 
    )

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 5,
              borderRadius: 50,
            }}
          />
        );
    }

    return (
        <View style={{ marginBottom: 20 }}>
            {course.successful && course.details.section !== null ?
            <View>
                <Text style={[styles.title, {marginTop: 15}]}>Content</Text>
                <FlatList 
                    data={course.details.section}
                    renderItem={({item}) => renderContent(item)}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
            </View>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    index: {
        borderColor: 'gray', 
        borderRadius: 40/2, 
        borderWidth: 2, 
        width: 30, 
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 17,
        maxWidth: 250,
        marginBottom: 5
    },
    content: {
        color: '#616161',
        fontSize: 15,
    }
});

export default Content;
