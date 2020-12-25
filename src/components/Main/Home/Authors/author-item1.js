import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import { navName } from '../../../../Global/constant';
import { getDetailInstructor } from '../../../../actions/instructor-actions';

const AuthorItem1 = ({ author, navigation}) => {
    const [detail, setDetail] = useState({ successful: false, info: null });

    useEffect(() => {
        if (!detail.successful && detail.info === null) {
            getDetailInstructor(author.id, setDetail);
        }
    }, [detail, setDetail]);

    return (
        <View>
            {detail.successful ? 
                <TouchableOpacity style={{marginRight: 15, alignItems: 'center'}}
                    onPress={() => navigation.push(navName.author, { author: detail.info })}
                >
                    <Image 
                        style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                        source={{uri: detail.info.avatar}}
                    />
                    <Text style={{color: '#424242', fontSize: 15, maxWidth: 100}}>{detail.info.name}</Text>
                </TouchableOpacity>
            : null}
        </View>
    )
}

export default AuthorItem1

const styles = StyleSheet.create({})
