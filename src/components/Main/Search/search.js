import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionCourses from '../Home/SectionCourses/section-courses';
import Authors from '../Home/Authors/authors';
import { searchV2, searchHistory, deleteSearchHistory } from '../../../actions/course-actions';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { SettingCommonContext } from '../../../providers/setting-common-provider';

const BeforeSearch = (history, clearAll, language, theme) => {
    const renderFindText = (text) => (
        <View style={{flexDirection: 'row', margin: 10}}>
            <Icon name="search" size={20} color='#616161'/>
            <Text style={{color: '#616161', fontSize: 16, flex: 1, marginLeft: 10, marginRight: 10}}
                numberOfLines={1}
            >
                {text}
            </Text>
        </View>
    )

    return (
        <View style={{margin: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18, flex: 1}}>{language ? "Recent searches" : "Tìm kiếm gần đây"}</Text>
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
            setHistory({ successful: false, data: [] });
        }
    }
    const onSubmit = () => {
        searchV2(searchText, setSubmitted);
    }

    const clearAll = () => {
        for (let i = 0; i < history.data.length; i++) {
            deleteSearchHistory(authContext.state.token, history.data[i].id);
        }
        setHistory({ successful: false, data: [] });
    }

    return (
        <View>
            <SearchBar 
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainer}
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
                <ScrollView style={styles.list}>
                    {submitted.info.courses.data.length !== 0 ? 
                    <View>
                        <SectionCourses courses={submitted.info.courses.data}
                            title={language ? "Courses" : "Các khóa học"} 
                            type={1} 
                            hideButton={false} eventButton={language ? "See all" : "Xem tất cả"}
                            navigation={navigation}
                        />
                        <View style={{margin: 7}} />
                    </View>
                    : null}

                    {submitted.info.instructors.data.length !== 0 ?
                    <Authors authors={submitted.info.instructors.data}
                        title={language ? "Authors" : "Giảng viên"}
                        type={1} 
                        hideButton={true}
                        navigation={navigation}
                    />
                    : null}
                </ScrollView>
                :
                BeforeSearch(history, clearAll, language, theme)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 27,
        backgroundColor: '#f3f3f3'
    },
    inputContainer: {
        height: 35,
        backgroundColor: 'white',
    },
    inputStyle: {
        fontSize: 16,
    },
    list: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 80
    },
});

export default Search;