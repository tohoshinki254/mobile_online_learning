import React, { useEffect, useState, useContext } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import SectionPaths from './SectionPaths/section-paths';
import Authors from './Authors/authors';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { getProcessCourses } from '../../../actions/user-actions';
import { getInstructors } from '../../../actions/instructor-actions';

const Home = ({ navigation }) => {
    const authContext = useContext(AuthenticationContext);

    const [continueCourses, setContinueCourses] = useState({ successful: false, courses: [] });

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

    const [authors, setAuthors] = useState({ successful: false, list: [] });

    useEffect(() => {
        if (!authors.successful && authors.list.length === 0) {
            console.log('aaa');
            getInstructors(setAuthors);
        }
    }, [authors, setAuthors])

    useEffect(() => {
        if (!continueCourses.successful && continueCourses.courses.length === 0) {
            getProcessCourses(authContext.state.token, setContinueCourses);
        }
    }, [authContext, continueCourses, setContinueCourses])

    const renderContinueCourses = () => {
        if (continueCourses.courses.length !== 0) {
            return <View>
                <SectionCourses courses={continueCourses.courses} 
                    title='Continue learning' 
                    type={1} 
                    hideButton={false} eventButton='See all >'
                    navigation={navigation}
                />
                <View style={{margin: 7}} />
            </View>
        }
    }

    return (
        <ScrollView style={styles.root}>
            {renderContinueCourses()}
            
            <SectionPaths paths={paths} 
                title='Paths' 
                type={1} 
                hideButton={false} eventButton='See all >'
                navigation={navigation} 
            />
            <View style={{margin: 7}} />

            <Authors authors={authors.list}
                title="Top Authors" 
                type={2} 
                hideButton={true}
                navigation={navigation}
            />
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
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 10,
    },
});

export default Home;