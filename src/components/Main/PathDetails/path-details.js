import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SectionCourses from '../Home/SectionCourses/section-courses';

const PathDetails = ({ route, navigation }) => {
    const [showDesc, setShowDesc] = useState(false);

    const { item } = route.params;

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
    ];

    return (
        <ScrollView>
            <View style={{margin: 10}}>
                <View style={{flexDirection: 'row', marginBottom: 17}}>
                    <Image source={{url: item.url}} style={{width: 50, height: 50, marginRight: 7}}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                        <Text style={styles.darkText}>{item.quantum} . {item.duration}</Text>
                    </View>
                </View>

                <Text style={styles.description} numberOfLines={showDesc ? undefined : 2}>
                    {item.description}
                </Text>
                <TouchableOpacity onPress={() => setShowDesc(!showDesc)} style={{marginBottom: 25}}>
                    <Text style={{color: '#FF5252', fontSize: 16}}>{showDesc ? 'Less' : 'More'}</Text>
                </TouchableOpacity>

                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}} numberOfLines={1}>{item.title}</Text>
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
                <SectionCourses courses={courses} type={2} hideButton={true} navigation={navigation}/>
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