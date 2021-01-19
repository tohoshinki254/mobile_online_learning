import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { SettingCommonContext } from '../../providers/setting-common-provider';
import { AuthenticationContext } from '../../providers/authentication-provider';
import { getListExerciseLesson } from '../../actions/exercise-actions';

const convertToMinutes = (hours) => {
    let temp = hours * 60;
    const minutes = Math.floor(temp);
    const second = Math.ceil((temp - minutes) * 60);
    return `${minutes}:${second !== 0 ? second : "00"}`;
}

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
                <Text style={styles.title(theme)} numberOfLines={2}>{`Section ${item.numberOrder} - ${item.name}`}</Text>
            </View>
            {item.lesson.map((content, index) => (
            <TouchableOpacity style={{marginBottom: 17}}
                onPress={() => {lessonClick(content)}}
            >
                <View style={{flexDirection: 'row', marginLeft: 8, alignItems: 'center', maxWidth: 300}}>
                    <Text style={{...styles.content(theme), marginRight: 24}}>{index + 1}</Text>
                    <View  >
                        <Text style={styles.content(theme)}>{content.name}</Text>
                        <Text style={{ color: theme ? 'lightgray' : 'gray', fontSize: 13 }}>Video - {`${convertToMinutes(content.hours)}`}</Text>
                    </View>
                </View>
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
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontSize: 15,
            maxWidth: 250,
            marginBottom: 5,
            fontWeight: 'bold'
        }
        
    },
    content: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontSize: 13,
            fontWeight: 'bold'
        }
    }
});

export default Content;
