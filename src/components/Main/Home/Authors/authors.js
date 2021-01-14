import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import AuthorItem1 from './author-item1';
import AuthorItem2 from './author-item2';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const Authors = ({authors, title, type, hideButton, eventButton, navigation, route}) => {
    const { theme } = useContext(SettingCommonContext);

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 15,
              borderRadius: 50,
            }}
          />
        );
    }

    const renderListAuthorsType1 = (authors) => {
        if (authors === undefined) return;
        return authors.map(author => 
            <AuthorItem1
                author={author}
                navigation={navigation}
            />
        );
    };

    const renderListAuthorsType2 = (author) => (
        <AuthorItem2 
            author={author}
            navigation={navigation}
        />
    );

    return (
        <View style={{ margin: route != undefined ? 10 : 0}}>
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{color: theme ? 'lightgray' : '#616161', fontWeight: 'bold', fontSize: 18}}>{(route !== undefined ? route.params?.title : title)}</Text>
                {(route !== undefined ? route.params?.hideButton : hideButton) ? null : 
                    <TouchableOpacity 
                        style={{backgroundColor: '#FF5252', 
                            padding: 4, borderRadius: 50, minWidth: 80,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{color: 'white', fontSize: 13}}>{eventButton}</Text>
                    </TouchableOpacity>
                }
            </View>
            {(route !== undefined ? route.params?.type : type) === 2 ?
                <View>
                    <FlatList 
                        data={route !== undefined ? route.params?.authors : authors}
                        renderItem={({item}) => renderListAuthorsType2(item)}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
                </View>
                :
                <View style={{marginLeft: 5}}>
                    <ScrollView horizontal={true}>
                        {renderListAuthorsType1(authors)}
                    </ScrollView>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161',
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 13,
        }
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray',
            fontSize: 15,
            marginTop: 3,
        }
    }
});

export default Authors;