import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import StackSearch from './stack-search';
import { navName } from '../../../Global/constant';

const Stack = createStackNavigator();

const Search = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <Stack.Navigator initialRouteName={navName.search}>
            <Stack.Screen name="Search" 
                component={StackSearch} 
                options={{
                    header: () => (
                        <SearchBar 
                            containerStyle={styles.containerStyle}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputStyle}
                            cancelButtonProps={{color: '#EF5350', buttonTextStyle: {fontSize: 16, paddingTop: 20}}}
                            placeholder="Search"
                            platform="ios"
                            onChangeText={searchText => setSearchText(searchText)}
                            value={searchText}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 27,
    },
    inputContainer: {
        height: 35,
    },
    inputStyle: {
        fontSize: 16,
    }
});

export default Search;
