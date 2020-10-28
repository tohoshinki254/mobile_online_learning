import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';

const Home = () => {
    const onPressNewRelease = () => {
        console.log("On Press new release");
    }

    return (
        <ScrollView>
            <ImageButton title='NEW RELEASES' onPress={onPressNewRelease()}/>
            <SectionCourses title='Continue learning'/>
            <SectionCourses title='Path'/>
            <SectionCourses title='Channel'/>
            <SectionCourses title='Bookmarks'/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default Home;