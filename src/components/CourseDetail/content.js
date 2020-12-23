import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';

const Content = ({ sections, lessonClick }) => {
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
            </View>
            {item.lesson.map(content => (
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: 8, alignItems: 'center', marginBottom: 17, maxWidth: 300}}
                onPress={() => lessonClick(content.videoUrl)}
            >
                <Image source={{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1200px-Location_dot_grey.svg.png'}}
                    style={{width: 13, height: 13, marginRight: 24}}
                />
                <Text style={styles.content}>{content.name}</Text>
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
        <View style={{ marginBottom: 20 }}>
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
