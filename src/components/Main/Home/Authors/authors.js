import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const Authors = ({title, type, hideButton, eventButton}) => {
    const authors = [
        {
            id: '1',
            name: 'Scott Allen 1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '10 courses'
        },
        {
            id: '2',
            name: 'Scott Allen 2',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '11 courses'
        },
        {
            id: '3',
            name: 'Scott Allen 3',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '12 courses'
        },
        {
            id: '4',
            name: 'Scott Allen 4',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '13 courses'
        },
        {
            id: '5',
            name: 'Scott Allen 5',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
            courses: '14 courses'
        },
    ];

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
        return authors.map(author => 
            <View style={{marginRight: 15, alignItems: 'center'}}>
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{url: author.image}}
                />
                <Text style={{color: '#424242', fontSize: 15, maxWidth: 100}}>{author.name}</Text>
            </View>
        );
    };

    const renderListAuthorsType2 = (author) => (
            <View style={{margin: 10, alignItems: 'center', flexDirection: 'row'}}>
                <Image 
                    style={{width: 65, height: 65, borderRadius: 65/2}}
                    source={{url: author.image}}
                />
                <View style={{marginLeft: 20}}>
                    <Text style={{color: '#424242', fontSize: 17}}>{author.name}</Text>
                    <Text style={styles.darkText}>{author.courses}</Text>
                </View>
            </View>
    );

    return (
        <View>
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', margin: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
                {hideButton ? null : 
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
            {type === 2 ?
                <View>
                    <FlatList 
                        data={authors}
                        renderItem={({item}) => renderListAuthorsType2(item)}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
                </View>
                :
                <View>
                    <ScrollView horizontal={true}>
                        {renderListAuthorsType1(authors)}
                    </ScrollView>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 3,
    }
});

export default Authors;