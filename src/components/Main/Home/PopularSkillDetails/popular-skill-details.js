import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SectionPaths from '../SectionPaths/section-paths';
import SectionCourses from '../SectionCourses/section-courses';
import Authors from '../Authors/authors';

const PopularSkillDetails = ({skill}) => {
    const courses = [
        {	        
            id: 1,	            
            title: 'React Native',	            
            author: 'Main',	           
            level: 'Beginner',	          
            released: 'May 6, 2020',	           
            duration: '20 hours',	        
        },	       
        {	      
            id: 2,	     
            title: 'iOS',	           
            author: 'Main',	           
            level: 'Beginner',	         
            released: 'May 6, 2020',	           
            duration: '25 hours',	         
        },	     
        {	       
            id: 3,	          
            title: 'iOS',	        
            author: 'Main',	          
            level: 'Beginner',	          
            released: 'May 6, 2020',	       
            duration: '25 hours',	        
        }	
    ];

    const paths = [
        {
            id: '1',
            title: 'Managing Conflict',
            quantum: '1 course',
        },
        {
            id: '2',
            title: 'Managing Conflict',
            quantum: '2 courses',
        },
        {
            id: '3',
            title: 'Managing Conflict',
            quantum: '3 courses',
        },
    ];

    return (
        <ScrollView style={{margin: 10}}>
            <SectionPaths paths={paths} title='Paths' type={1} hideButton={false} eventButton='See all >'/>
            <View style={{margin: 10}} />
            <SectionCourses courses={courses} title='New' type={1} hideButton={false} eventButton='See all >'/>
            <View style={{margin: 10}} />
            <SectionCourses courses={courses} title='Trending' type={1} hideButton={false} eventButton='See all >'/>
            <View style={{margin: 10}} />
            <Authors title="Top Authors" type={1} hideButton={true}/>
            <View style={{margin: 17}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default PopularSkillDetails;