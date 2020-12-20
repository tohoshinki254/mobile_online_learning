import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SectionCourses from '../SectionCourses/section-courses';

const RelatedPathsCourses = ({ navigation }) => {
    const courses = [
        {
            id: '1',
            title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Maximilian Schwarzmuller',
            level: 'All Levels',
            released: 'November 11, 2020',
            duration: '40.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg?Hw1TFbDdL1pNwqk25OXHSmRKnKjYlFi982K9veiBwH0INlFJ1wzNtbF8QcgngHj6xiMwKoJnN6FCtpF1JiTenik238BvQsiiAtGLbuJM4R8TYxFEAuit8yQ_Xl4dcA'
        },
        {
            id: '2',
            title: 'The Complete React Developer Course (w/ Hooks and Redux)',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Andrew Mead',
            level: 'Beginner',
            released: 'October 10, 2020',
            duration: '39 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1286908_1773_5.jpg?GFSKpB6hDjMgAVyS5da6lDp6OGhk-yJ9EJ644H7IYI0PveVrxdl4w-rfVedbgaILNSiemi6fOVQEro87LT_lJJd1nydzoPM2Lo4HMmuSbhFDO1HchqZlUWaLORPmEw'
        },
        {
            id: '3',
            title: 'GraphQL with React: The Complete Developers Guide',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Stephen Grider',
            level: 'Intermediate',
            released: 'November 11, 2020',
            duration: '13.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1109926_7f97_2.jpg?GBLoIwZ22fE5tAoZMWDsVj8DbQEU8d_cCmq-Ute1HMV8jCPAOObKr7HxXYYUm51ykYVSvgNBSM6-jhoPtxctZs15FxU4pFbnI27HA_LsihRdhVKb0sCBeBr27lTEXQ'
        },
        {
            id: '4',
            title: 'Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Andrei Neagoie',
            level: 'All Levels',
            released: 'November 11, 2020',
            duration: '40.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/2365628_0b60_7.jpg?J7zzL_F67QYYtutluN7PVsHCPC-e1qLqtSZJOgH8ZARJbJVBGWuPyprAlrtDvzG_eXhMzQqP-JNYI2AtomSybGQUxkKmfD-z_uuQRmVVVEtCGbWzjXkrztXJSc-ypQ'
        },
        {
            id: '5',
            title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Maximilian Schwarzmuller',
            level: 'All Levels',
            released: 'November 11, 2020',
            duration: '40.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1879018_95b6_2.jpg?CkSDmRjXIM6S3T6sWPTlnnl7pzNxk7T6Kb4jiFec9ryHzAD1iBn79EI9C9_8ypCUmKioU5OVGvwNpPIKzsoI0aJlghPdY2qLd-eB1rU0bhHriDd0dxGt-2XYrSgc4Q'
        },
        {
            id: '6',
            title: "MongoDB - The Complete Developer's Guide 2020",
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Maximilian Schwarzmuller',
            level: 'All Levels',
            released: 'October 10, 2020',
            duration: '17.5 hours',
            url: 'https://img-b.udemycdn.com/course/240x135/1906852_93c6.jpg?secure=qQc9hBvNRU_YVpXpTtyUHg%3D%3D%2C1606461370'
        },
        {
            id: '7',
            title: 'React Native - The Practical Guide [2020 Edition]',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Maximilian Schwarzmuller',
            level: 'All Levels',
            released: 'October 10, 2020',
            duration: '32.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1436092_2024_4.jpg?93ljx9xAynL83sQgMdW17G32OxWTDcXMEoClPixtRddhI5EhXa4IXhLvfV-WvxmSdKlHbvnahiA53_gjDayqPP2jxU3NF3W9P66rrcMOwNs5CP9aSl239JwOnP9pRQ'
        },
        {
            id: '8',
            title: 'The Complete Web Developer in 2020: Zero to Mastery',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Andrew Mead',
            level: 'All Levels',
            released: 'September 9, 2020',
            duration: '37 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1430746_2f43_9.jpg?Nqo8fuZ56yCNRY-mcsO9L9K9tKFXv57N4pbkRBYwO_bhCuooU8N7sPoopgNJGaIrowAE9oP_pA0Bc6jBgPiKIs9RajTOOuwPleDBuXuXDFWiNC494UhYoGzGCqEHgg'
        },
        {
            id: '9',
            title: "Typescript: The Complete Developer's Guide [2020]",
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Stephen Grider',
            level: 'Beginner',
            released: 'October 10, 2020',
            duration: '24.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/2337318_abfd_4.jpg?10BhwDvmN2fbUakwzPH5HQFmsNuippFYyduMQb4fEznXlliW-NUu3G_ygBjbQjMnvDKKp1hQP5cBt8l3F_6gaFpTcRv61LfLZ0fSZcpRTzydt6rNlQuZoIk-EFShFg'
        },
        {
            id: '10',
            title: 'Angular - The Complete Guide (2020 Edition)',
            description: `This course is fully up-to-date with the latest version of React and includes React Hooks! Of course it will be kept up-to-date in the future

            ---
            
            What's this course about?
            
            Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!
            
            More details please!
            
            JavaScript is the major driver of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.
            
            But using JavaScript can be challenging - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.`,
            author: 'Andrew Mead',
            level: 'All Levels',
            released: 'October 10, 2020',
            duration: '33.5 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/756150_c033_2.jpg?lAB05olNjUZ8bxWQqAy6X8wRKtpEQWaoT7xuYvV6vW9xEbQxBdwnvC7reV7G0sVnQkiuAoTQdkf303TFALpCeG6HnV1JyGGVl5nphRmeJlGzjCCsdL0FJL94eKtk'
        },
    ];

    return (
        <ScrollView style={styles.root}>
            <SectionCourses courses={courses} 
                title='Courses' 
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
    }
})

export default RelatedPathsCourses
