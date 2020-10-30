import React from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';
import SectionPathItems1 from '../SectionPathItems/section-path-items1';
import SectionPathItems2 from '../SectionPathItems/section-path-items2';

const SectionPaths = ({title, type}) => {
    const paths = [
        {
            id: '1',
            title: 'Managing Conflict',
            quantum: '1 course',
        },
        {
            id: '2',
            title: 'Managing Conflict',
            quantum: '2 courses',
        },
        {
            id: '3',
            title: 'Managing Conflict',
            quantum: '3 courses',
        },
        {
            id: '4',
            title: 'Managing Conflict',
            quantum: '4 courses',
        },
        {
            id: '5',
            title: 'Managing Conflict',
            quantum: '5 courses',
        },
    ];

    const renderListPaths = (paths) => {
        return paths.map(item => 
            <SectionPathItems1 item={item} />
        );
    }

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

    return (
        <View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            {type === 1 ?
                <FlatList 
                    data={paths}
                    renderItem={({item}) => <SectionPathItems2 item={item}/>}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
                :
                <ScrollView horizontal={true}>
                    {renderListPaths(paths)}
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
    }
});

export default SectionPaths;