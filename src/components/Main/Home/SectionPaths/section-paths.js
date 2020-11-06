import React from 'react';
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import SectionPathItems1 from '../SectionPathItems/section-path-items1';
import SectionPathItems2 from '../SectionPathItems/section-path-items2';

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

    return (
        <View>
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', marginBottom: 10}}>
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
                        data={paths}
                        renderItem={({item}) => <SectionPathItems2 item={item}/>}
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
        margin: 10,
    }
});

export default SectionPaths;