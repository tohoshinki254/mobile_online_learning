import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionCourses from '../SectionCourses/section-courses';

const NewReleases = () => {
    const courses = [
        {	        
            id: 1,	            
            title: 'React Native',	            
            author: 'Main',	           
            level: 'Beginner',	          
            released: 'May 6, 2020',	           
            duration: '20h',	        
        },	       
        {	      
            id: 2,	     
            title: 'iOS',	           
            author: 'Main',	           
            level: 'Beginner',	         
            released: 'May 6, 2020',	           
            duration: '25h',	         
        },	     
        {	      
            id: 3,	          
            title: 'iOS',	        
            author: 'Main',	          
            level: 'Beginner',	          
            released: 'May 6, 2020',	       
            duration: '25h',	        
        }	
    ];

    return (
        <View style={{margin: 10}}>
            <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 40}}>New</Text>
            <SectionCourses courses={courses} type={2} hideButton={true}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default NewReleases;