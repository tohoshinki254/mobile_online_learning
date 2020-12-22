import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import SectionCourses from '../SectionCourses/section-courses';

const RelatedPathsCourses = ({ navigation, route }) => {
    const courses = route.params.list;
    const title = `${courses.length} courses`

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <SectionCourses courses={courses} 
                title={title} 
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 10
    }
})

export default RelatedPathsCourses
