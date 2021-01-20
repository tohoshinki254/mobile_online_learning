import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { SettingCommonContext } from '../../../../providers/setting-common-provider';
import AuthorItem2 from '../../Home/Authors/author-item2';

const screenHeight = Math.round(Dimensions.get('window').height);

const SearchAuthors = ({ navigation, route }) => {
    const { language, theme } = useContext(SettingCommonContext);

    const renderListAuthorsType2 = (author, navigation) => (
        <AuthorItem2 
            author={author}
            navigation={navigation}
        />
    );

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
        route.params.authors.length !== 0 ?
        <View style={styles.root(theme)}>
            <Text style={{color: theme ? 'lightgray' : '#616161', fontWeight: 'bold', fontSize: 18}}>{`${route.params.authors.length} ${language ? 'authors' : 'giảng viên'}`}</Text>
            <FlatList 
                data={route.params.authors}
                renderItem={({item}) => renderListAuthorsType2(item, navigation)}
                ItemSeparatorComponent={FlatListItemSeparator}
                showsVerticalScrollIndicator={false}
                style={{ height: screenHeight - 200 }}
            />
        </View>
        : 
        <View style={styles.root(theme)}>
            <View style={{ margin: 20 }}>
                <Text 
                    style={{fontSize: 20, marginTop: 40, color: theme ? 'lightgray' : '#616161', textAlign: 'center'}}
                >
                    {language ? `No matching results were found`  : `Không tìm thấy kết quả phù hợp`}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            height: '100%',  
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
        
    }
});

export default SearchAuthors;