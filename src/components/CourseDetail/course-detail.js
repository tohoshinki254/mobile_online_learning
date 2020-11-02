import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Content from './content';
import RadiusButton from '../Common/radius-button';
import IconButton from '../Common/icon-button';
import Button from '../Common/button';

const CourseDetail = (props) => {
    const contents = [
        {
            index: '1',
            title: 'Manage Deployments with ARM Templates',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        },
        {
            index: '2',
            title: 'Manage Deployments with ARM',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        },
        {
            index: '3',
            title: 'Manage Deployments with',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        },
        {
            index: '4',
            title: 'Manage Deployments',
            duration: '17m55s',
            content: ['Introduction', 'Modify an ARM Template', 'Demo: Modify an ARM Template', 'Deploy from Template', 'Demo: Deploy from Template']
        }
    ];

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 5,
              borderRadius: 50,
            }}
          />
        );
    }

    return (
        <View style={{margin: 10}}>
            <Text style={styles.title}>Microsoft Azure Administrator: Automate Deployment and Config</Text>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                <RadiusButton onPress={() => {}} text='Michael Teske' />
            </View>
            <Text style={styles.darkText}>Beginner . Oct 29, 2020 . 34m28s</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
                <IconButton url='https://cdn.iconscout.com/icon/premium/png-256-thumb/bookmark-44-206919.png'
                    text='Bookmark'
                    onPress={() => {}}
                />
                <IconButton url='https://icon-library.com/images/add-icon-transparent/add-icon-transparent-23.jpg'
                    text='Add to channel'
                    onPress={() => {}}
                />
                <IconButton url='https://www.svgimages.com/svg-image/s8/download-folder-icon-grey-256x256.png'
                    text='Download'
                    onPress={() => {}}
                />
            </View>
            {FlatListItemSeparator()}
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {}}
            >
                <Image source={require('../../../assets/related_courses_detail.png')} style={{width: 25, height: 25}}/>
                <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>Related paths & courses</Text>
            </TouchableOpacity>
            
            <FlatList 
                data={contents}
                renderItem={({item}) => <Content item={item}/>}
                ItemSeparatorComponent={FlatListItemSeparator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 15, 
        maxHeight: 70
    },
    darkText: {
        color: 'grey',
        marginBottom: 15,
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#EF5350',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CourseDetail;