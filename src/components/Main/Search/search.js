import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionCourses from '../Home/SectionCourses/section-courses';
import Authors from '../Home/Authors/authors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { searchV2, searchHistory, deleteSearchHistory } from '../../../actions/course-actions';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';
import SearchTabResults from './SearchTabResults/search-tab-results';

const BeforeSearch = (history, clearAll, language, theme) => {
    const renderFindText = (text) => (
        <View style={{flexDirection: 'row', margin: 10 }}>
            <Icon name="search" size={20} color='#616161'/>
            <Text style={{color: theme ? 'lightgray' : '#616161', fontSize: 16, flex: 1, marginLeft: 10, marginRight: 10}}
                numberOfLines={1}
            >
                {text}
            </Text>
        </View>
    )

    return (
        <View style={{padding: 10, backgroundColor: theme ? '#212121' : '#f3f3f3', height: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: theme ? 'lightgray' : '#616161', fontWeight: 'bold', fontSize: 18, flex: 1}}>{language ? "Recent searches" : "Tìm kiếm gần đây"}</Text>
                <TouchableOpacity onPress={() => clearAll()}>
                    <Text style={{color: '#FF5252', fontSize: 15}}>{language ? "Remove all" : "Xóa tất cả"}</Text>
                </TouchableOpacity>
            </View>
            {history !== undefined ? history.data.map(item => renderFindText(item.content)) : null}
        </View>
    )
}

const Search = ({ navigation }) => {
    const [history, setHistory] = useState({ successful: false, data: [] });
    const [searchText, setSearchText] = useState('');
    const [submitted, setSubmitted] = useState({ successful: false, info: null });
    const authContext = useContext(AuthenticationContext);
    const { language, theme } = useContext(SettingCommonContext);

    useEffect(() => {
        if (!history.successful) {
            searchHistory(authContext.state.token, setHistory);
        }
    }, [history, setHistory, authContext])

    const onChange =  (searchText) => {
        setSearchText(searchText);
        if (searchText === '') {
            setSubmitted({ successful: false, info: null });
        }
    }
    const onSubmit = () => {
        searchV2(searchText, setSubmitted);
        const temp = history.data;
        temp.push({ content: searchText });
        setHistory({ successful: true, data: temp})
    }

    const clearAll = () => {
        for (let i = 0; i < history.data.length; i++) {
            deleteSearchHistory(authContext.state.token, history.data[i].id);
        }
        setHistory({ successful: false, data: [] });
    }

    const Tab = createMaterialTopTabNavigator();

    return (
        <ScrollView scrollEnabled={false} style={{ backgroundColor: theme ? '#212121' : '#f3f3f3', marginTop: 22 }}>
            <SearchBar 
                containerStyle={styles.containerStyle(theme)}
                inputContainerStyle={styles.inputContainer(theme)}
                inputStyle={styles.inputStyle}
                cancelButtonProps={{color: '#EF5350', buttonTextStyle: {fontSize: 16, paddingTop: 20}}}
                cancelButtonTitle={language ? "Cancel" : "Hủy bỏ"}
                placeholder={language ? "Search" : "Tìm kiếm"}
                platform="ios"
                onChangeText={searchText => onChange(searchText)}
                value={searchText}
                onSubmitEditing={() => onSubmit()}
            />
            
            {submitted.successful ? 
                <SearchTabResults results={submitted.info}/>
                :
                BeforeSearch(history, clearAll, language, theme)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerStyle: (theme) => {
        return {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 15,
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
    },
    inputContainer: (theme) => {
        return {
            height: 35,
            backgroundColor: theme ? 'white' : '#BDBDBD',
        }
    },
    inputStyle: {
        fontSize: 16,
    },
    list: (theme) => {
        return {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 80,
            backgroundColor: theme ? '#212121' : '#f3f3f3',
            height: '100%'
        }
    },
});

export default Search;