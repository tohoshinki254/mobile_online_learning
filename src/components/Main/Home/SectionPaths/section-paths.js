import React from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import SectionPathItems1 from '../SectionPathItems/section-path-items1';
import SectionPathItems2 from '../SectionPathItems/section-path-items2';
import { navName } from '../../../../Global/constant';

const SectionPaths = ({paths, title, type, hideButton, eventButton, navigation}) => {
    const renderListPaths = (paths) => {
        return paths.map(item => 
            <SectionPathItems1 item={item} navigation={navigation} />
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

    const seeAllPaths = () => {
        if (title === 'Paths') {
            navigation.push(navName.listPaths);
        }
        else {
            navigation.push(navName.topic);
        }
    }

    return (
        <View>
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={styles.title}>{title}</Text>
                {hideButton ? null :
                    <TouchableOpacity 
                        style={{backgroundColor: '#FF5252', 
                            padding: 4, borderRadius: 50, minWidth: 80,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => seeAllPaths()}
                    >
                        <Text style={{color: 'white', fontSize: 13}}>{eventButton}</Text>
                    </TouchableOpacity>
                }
            </View>
            {type === 2 ?
                <View>
                    <FlatList 
                        data={paths}
                        renderItem={({item}) => <SectionPathItems2 item={item} navigation={navigation}/>}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
                </View>
                :
                <View>
                    <ScrollView horizontal={true}>
                        {renderListPaths(paths)}
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
    }
});

export default SectionPaths;