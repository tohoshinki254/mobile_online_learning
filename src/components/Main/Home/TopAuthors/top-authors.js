import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

const TopAuthors = () => {
    const authors = [
        {
            name: 'Scott Allen 1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
        },
        {
            name: 'Scott Allen 2',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
        },
        {
            name: 'Scott Allen 3',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
        },
        {
            name: 'Scott Allen 4',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
        },
        {
            name: 'Scott Allen 5',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
        },
    ];

    const renderListAuthors = (authors) => {
        return authors.map(author => 
            <View style={{marginRight: 15, alignItems: 'center'}}>
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{url: author.image}}
                />
                <Text style={{color: '#424242', fontSize: 15, maxWidth: 100}}>{author.name}</Text>
            </View>
        );
    }

    return (
        <ScrollView horizontal={true}>
            {renderListAuthors(authors)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default TopAuthors;