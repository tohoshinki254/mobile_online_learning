import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { SettingCommonContext } from '../../providers/setting-common-provider';
import { AuthenticationContext } from '../../providers/authentication-provider';
import { getListExerciseLesson } from '../../actions/exercise-actions';

const Content = ({ sections, lessonClick, exercises, setExercises }) => {
    const { theme } = useContext(SettingCommonContext);
    const { token } = useContext(AuthenticationContext).state;
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        sections.map(item => {
            item.lesson.map(ls => {
                getListExerciseLesson(token, ls.id, setExercise);
                setExercises(exercises.concat(exercise));
            })
        })
    }, [setExercises])

    const renderContent = (item) => (
        <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 17}}>
                <View style={styles.index(theme)}> 
                    <Text style={{fontWeight: 'bold', color: theme ? 'lightgray' : '#616161'}}>{item.numberOrder}</Text>
                </View>
                <View style={{flex: 1, marginLeft: 15}}> 
                    <Text style={styles.title(theme)} numberOfLines={2}>{item.name}</Text>
                    <Text style={{color: theme ? 'lightgray' : 'gray', fontSize: 15}}>{item.sumHours}h</Text>
                </View>
            </View>
            {item.lesson.map(content => (
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 8, alignItems: 'center', marginBottom: 17, maxWidth: 300}}
                onPress={() => {lessonClick(content.videoUrl)}}
            >
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1200px-Location_dot_grey.svg.png'}}
                    style={{width: 13, height: 13, marginRight: 24}}
                />
                <Text style={styles.content(theme)}>{content.name}</Text>
            </TouchableOpacity>
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
        <View style={{ marginBottom: 5 }}>
            <View>
                <FlatList 
                    data={sections}
                    renderItem={({item}) => renderContent(item)}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    index: (theme) => {
        return {
            borderColor: theme ? 'lightgray' : 'gray', 
            borderRadius: 40/2, 
            borderWidth: 2, 
            width: 30, 
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontWeight: 'bold',
            fontSize: 17,
            maxWidth: 250,
            marginBottom: 5
        }
        
    },
    content: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontSize: 15,
        }
    }
});

export default Content;
