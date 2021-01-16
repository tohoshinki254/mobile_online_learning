import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authors from '../../Home/Authors/authors';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';

const SearchAuthors = ({ navigation, route }) => {
    const { language, theme } = useContext(SettingCommonContext);

    return (
        <View style={{ height: '100%', backgroundColor: theme ? '#212121' : '#f3f3f3', padding: 10 }}>
            {route.params.authors.length !== 0 ?
                <Authors 
                    authors={route.params.authors}
                    title={`${route.params.authors.length} ${language ? 'authors' : 'giảng viên'}`}
                    type={2}
                    hideButton={true}
                    navigation={navigation}
                />
            : 
            <View style={{ margin: 20 }}>
                <Text 
                    style={{fontSize: 20, marginTop: 40, color: theme ? 'lightgray' : '#616161', textAlign: 'center'}}
                >
                    {language ? `No matching results were found`  : `Không tìm thấy kết quả phù hợp`}
                </Text>
            </View>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchAuthors;