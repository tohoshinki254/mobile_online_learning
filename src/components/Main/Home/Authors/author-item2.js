import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { navName } from '../../../../Global/constant';
import { getDetailInstructor } from '../../../../actions/instructor-actions';

const AuthorItem2 = ({ author, navigation }) => {
    const [detail, setDetail] = useState({ successful: false, info: null });

    useEffect(() => {
        if (!detail.successful && detail.info === null) {
            getDetailInstructor(author.id, setDetail);
        }
    }, [detail, setDetail]);

    return (
        <View>
            {detail.successful ?
                <TouchableOpacity style={{margin: 10, alignItems: 'center', flexDirection: 'row'}}
                    onPress={() => navigation.push(navName.author, { author: detail.info })}
                >
                    <Image 
                        style={{width: 65, height: 65, borderRadius: 65/2}}
                        source={{uri: detail.info.avatar}}
                    />
                    <View style={{marginLeft: 20}}>
                        <Text style={{color: '#424242', fontSize: 17}}>{detail.info.name}</Text>
                        <Text style={styles.darkText}>{detail.info.courses.length} courses</Text>
                    </View>
                </TouchableOpacity>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 3,
    }
});

export default AuthorItem2;
