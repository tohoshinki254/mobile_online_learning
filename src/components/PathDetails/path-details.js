import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SectionCourses from '../Main/Home/SectionCourses/section-courses';

const PathDetails = () => {
    const [showDesc, setShowDesc] = useState(false);

    const courses = [
        {	        
            id: '1',	            
            title: 'React Native',	            
            author: 'Main',	           
            level: 'Beginner',	          
            released: 'May 6, 2020',	           
            duration: '20 hours',	        
        },	       
        {	      
            id: '2',	        
            title: 'iOS',	           
            author: 'Main',	           
            level: 'Beginner',	         
            released: 'May 6, 2020',	           
            duration: '25 hours',	         
        },	     
        {	       
            id: '3',	          
            title: 'iOS',	        
            author: 'Main',	          
            level: 'Beginner',	          
            released: 'May 6, 2020',	       
            duration: '25 hours',	        
        }	
    ];

    return (
        <ScrollView>
            <View style={{margin: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 40, marginBottom: 20}}>Path</Text>
                
                <View style={{flexDirection: 'row', marginBottom: 17}}>
                    <Image source={{url: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png'}} style={{width: 50, height: 50, marginRight: 7}}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.title} numberOfLines={1}>Working with REST API's in Javascript</Text>
                        <Text style={styles.darkText}>5 courses  7 hours</Text>
                    </View>
                </View>

                <Text style={styles.description} numberOfLines={showDesc ? undefined : 2}>It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content here, content here', making it 
                    look like readable English. Many desktop publishing packages and web page editors now use 
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
                    sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like).
                </Text>
                <TouchableOpacity onPress={() => setShowDesc(!showDesc)} style={{marginBottom: 25}}>
                    <Text style={{color: '#FF5252', fontSize: 16}}>{showDesc ? 'Less' : 'More'}</Text>
                </TouchableOpacity>

                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}} numberOfLines={1}>Working with REST API's in Javascript</Text>
            </View>
            <View style={{height: 1, width: '100%', backgroundColor: '#BDBDBD'}} />
            <View style={{margin: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.description} numberOfLines={1}>It is a long established fact that a reader will be distracted by the readable content of a 
                            page when looking at its layout.
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{height: 1 ,backgroundColor: '#BDBDBD', borderRadius: 50, marginTop: 10}}/>
                <SectionCourses courses={courses} type={2} hideButton={true}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: 300,
        marginBottom: 5,
    },
    darkText: {
        color: 'gray',
        fontSize: 14,
        marginTop: 3,
    },
    description: {
        color: '#757575',
        fontSize: 16,
    }
});

export default PathDetails;