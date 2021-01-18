import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { SettingCommonContext } from '../../providers/setting-common-provider';

const Exercise = () => {
    const { language, theme } = useContext(SettingCommonContext);

    return (
        <ScrollView style={styles.root(theme)}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title(theme)}>{language ? "Exercises" : "Danh sách bài tập"}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity 
                        style={{backgroundColor: '#FF5252', 
                            padding: 4, borderRadius: 50, minWidth: 60, height: 23,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => navigation.pop()}
                    >
                        <Text style={{color: 'white', fontSize: 13}}>{language ? "Back" : "Quay lại"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: (theme) => {
        return {
            paddingLeft: 10, 
            paddingRight: 10, 
            paddingBottom: 10, 
            paddingTop: 32,
            backgroundColor: theme ? '#212121' : '#f3f3f3'
        }
    },
    title: (theme) => {
        return {
            color: theme ? 'lightgray' : '#616161', 
            fontWeight: 'bold', 
            fontSize: 20, 
            marginBottom: 15, 
            maxHeight: 70
        }
    },
    darkText: (theme) => {
        return {
            color: theme ? 'lightgray' : 'gray'
        } 
    }
})

export default Exercise;