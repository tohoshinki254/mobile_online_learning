import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';

const AuthorDetails = () => {
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
        },
        {	        
            id: '4',	            
            title: 'React Native',	            
            author: 'Main',	           
            level: 'Beginner',	          
            released: 'May 6, 2020',	           
            duration: '20 hours',	        
        },	       
        {	      
            id: '5',	     
            title: 'iOS',	           
            author: 'Main',	           
            level: 'Beginner',	         
            released: 'May 6, 2020',	           
            duration: '25 hours',	         
        },	     
        {	       
            id: '6',	          
            title: 'iOS',	        
            author: 'Main',	          
            level: 'Beginner',	          
            released: 'May 6, 2020',	       
            duration: '25 hours',	        
        }	
    ];

    return (
        <ScrollView style={{margin: 10}}>
            <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 40, marginBottom: 20}}>Author</Text>
            
            <View style={{alignItems: 'center', marginBottom: 5}}>
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg'}}
                />
                <Text style={styles.title} numberOfLines={1}>Deborah Kurata</Text>
                <Text style={styles.darkText}>Pluralsight Author</Text>
            </View>

            <Text style={styles.description} numberOfLines={showDesc ? undefined : 8}>It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                normal distribution of letters, as opposed to using 'Content here, content here', making it 
                look like readable English. Many desktop publishing packages and web page editors now use 
                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
                sites still in their infancy. Various versions have evolved over the years, sometimes by 
                accident, sometimes on purpose (injected humour and the like).
            </Text>
            <TouchableOpacity onPress={() => setShowDesc(!showDesc)} style={{marginBottom: 15}}>
                <Text style={{color: '#FF5252', fontSize: 17}}>{showDesc ? 'Less' : 'More'}</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/link_icon8.png')} style={{width: 30, height: 30, marginRight: 10}}/>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={styles.description} numberOfLines={1}>
                        http://msmvps.com/blogs/deborahk
                    </Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/facebook_icon8.png')} style={{width: 30, height: 30, marginRight: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/twitter_icon8.png')} style={{width: 30, height: 30, marginRight: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/network_icon8.png')} style={{width: 30, height: 30, marginRight: 30}}/>
                </TouchableOpacity>
            </View>

            <View style={{height: 1, width: '100%', backgroundColor: '#BDBDBD'}} />

            <SectionCourses courses={courses} type={2} hideButton={true}/>
            <View style={{margin: 10}}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 10, 
        maxHeight: 70
    },
    darkText: {
        color: 'grey',
        marginBottom: 15,
    },
    description: {
        color: '#757575',
        fontSize: 17,
    }
});

export default AuthorDetails;