import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ImageButton from '../../Common/image-button';
import RadiusButton from '../../Common/radius-button';
import Authors from '../Home/Authors/authors';
import SectionCourses from '../Home/SectionCourses/section-courses';
import { navName } from '../../../Global/constant';
import { getInstructors } from '../../../actions/instructor-actions';
import { getAllCategory } from '../../../actions/category-actions';
import { getTopSell } from '../../../actions/course-actions';

const Browse = ({ navigation }) => {
    const paths = [
        {
            id: '1',
            title: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
            description: 'Build and deploy a social network with Node.js, Express, React, Redux & MongoDB. Fully updated April 2019',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1646980_23f7_2.jpg?JXazFODL9lSm2-GJuXrXRRbZK6I_UO48IX461CJ8yQBcio_wrwTODwOdZTYGDo9AB9WVdNAC8U8sUhcKTS_81Yh3xOQgyQxeSlS59NyVw-aJpH7zDZGepSOPtCK0GQ'
        },
        {
            id: '2',
            title: 'React JS, Angular & Vue JS - Quickstart & Comparison',
            description: 'Angular (Angular 2+), React or Vue? Get a Crash Course on each of them and a detailed comparison!',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1208638_2604.jpg?xJ7UP27DZaOjxkHmarkPElFub9blb7PX2k3XUZHi7r_B2xvAPONVVbqHMqhppkFwjYi91yyfMu4DozRt0Asafi2T6s7uemRym6j3CPHOCgCNoEpixKCMe1Q-5Uc'
        },
        {
            id: '3',
            title: 'Seja Full-Stack com Vue JS + ASP.NET Core Web API + EF Core',
            description: 'Criando aplicações SPA utilizando VUE JS com WEB API ASP.NET Core 2 e Banco de Dados! Ou seja Angular + React = VUE JS',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/2208312_b42a_4.jpg?hZAjRy5wyOEx5qZs628FY2OprB2c7JvyxsuJ_Gu6MatajkBOkFYYuAlVtV8g2AA1CdfjBUoDkucFBNlIrHk02aQ1OCSsvQU1PrPnYxB83rOQgmGB111uow_YAW3B5A'
        },
        {
            id: '4',
            title: 'Beginner Full Stack Web Development: HTML, CSS, React & Node',
            description: 'Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1042110_ffc3_4.jpg?Vbt64IzYmDY8ElwCviW21vwZZKGAbFdBSLmRl0YXcB93AHs16RNPP12utCfIjLsqQIOa9AVGYQn-fYuysbahkbFOrSaN3efvNC8SO5z9h4oubQcHqHc1KphdlVqncw'
        },
        {
            id: '5',
            title: 'Taxi App in React Native',
            description: 'Make a basic taxi app in React Native!',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/2360302_f10e_3.jpg?fgSQYLQIuwaBT3LmZppNROycPyR7RkEyH5HR2_FdrkZQemGj9Gy2HUsdLYFx9v2uHuDdp1YgzCehuW-HTNdu2y6Nl31w8i6zjYfK2VlBczaiSi44eYHNLrB8h16Bqw'
        },
    ];

    const [topSell, setTopSell] = useState({ successful: false, courses: [] });
    useEffect(() => {
        const data = {
            limit: 20,
            page: 1
        };
        if (!topSell.successful) {
            getTopSell(data, setTopSell);
        }
    }, [topSell, setTopSell]);

    const [category, setCategory] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!category.successful && category.list.length === 0) {
            getAllCategory(setCategory);
        }
    }, [category, setCategory])

    const [authors, setAuthors] = useState({ successful: false, list: [] });
    useEffect(() => {
        if (!authors.successful && authors.list.length === 0) {
            getInstructors(setAuthors);
        }
    }, [authors, setAuthors])


    const navigateSkill = () => {
        navigation.navigate(navName.skill);
    }

    const renderListSkills = (list) => {
        return list.map(item => 
            <RadiusButton /*onPress={() => navigateSkill()}*/ text={item.name} />
        );
    }

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            <ImageButton 
                title='NEW RELEASES' 
                onPress={() => navigation.navigate(navName.newRelease)}
                URL="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                fontSize={24}
            />
            <View style={{padding: 7}} />
            <ImageButton 
                title='RECOMMENDED FOR YOU'
                onPress={() => navigation.navigate(navName.recommend)}
                URL="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80"
                fontSize={24}
            />

            <View style={{margin: 17}} />
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderListSkills(category.list)}
            </ScrollView>
            
            <View style={{margin: 17}} />
            {topSell.courses.length !== 0 ?
                <SectionCourses courses={topSell.courses} 
                    title='Top sell' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
            : null}

            <View style={{margin: 17}} />
            {authors.list.length !== 0 ? 
                <Authors authors={authors.list}
                    title="Top Authors" 
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
            : null}

            <View style={{margin: 17}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 24,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 6
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    }
});

export default Browse;