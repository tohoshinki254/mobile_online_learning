import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCourses from '../../ListCourses/list-courses';
import ListPathsTopic from '../../ListPaths/list-paths-topic';
import Authors from '../Home/Authors/authors';

const Tab = createMaterialTopTabNavigator();

const StackSearch = () => {
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

    const authors = [
        {
            id: '1',
            name: 'Stefan Hyltoft',
            description: 'Stefan has been building software since elementary school starting out with Visual Basic 6.0. Since then he has been dabbling with Python(Pygame), PHP & MySQL, and Java during university. Since he discovered the JavaScript world he found an intense interest in web development especially using ReactJs/React Native and using NodeJs for the backend. ',
            image: 'https://img-a.udemycdn.com/user/75x75/24073182_a927.jpg?9FMFReUSmMekTlK1avPBjI73kO7EwAI_qRDHSrakNRgDOtEzPpCcYHPl_S5jR5fWmvkIGEYJP46rxcoJTjWIxKJiqaQuylARpxJplfbLDklG4xoK8--4funXHQ',
            courses: '8 courses'
        },
        {
            id: '2',
            name: 'Andrei Neagoie',
            description: 'Andrei is the instructor of the highest rated Development courses on Udemy as well as one of the fastest growing. His graduates have moved on to work for some of the biggest tech companies around the world like Apple, Google, Tesla, Amazon, JP Morgan, IBM, UNIQLO etc... He has been working as a senior software developer in Silicon Valley and Toronto for many years, and is now taking all that he has learned, to teach programming skills and to help you discover the amazing career opportunities that being a developer allows in life. ',
            image: 'https://img-a.udemycdn.com/user/75x75/38516954_b11c_3.jpg?cpu-ktwg5cJGqK8ifXic8ljZZ_XP0ogoY5M5BXdTr5kmP9xLvh6gXLsNTxPpXEqFk0T0PA4V1tNv0nCCJ6XrWhA0GklO23ZSyEOyzIARZSc6dTKpudoxEoOv0InE',
            courses: '14 courses'
        },
        {
            id: '3',
            name: 'Rob Percival',
            description: "I'm passionate about teaching kids to code, so every summer I run Code School in the beautiful city of Cambridge. I also run the popular web hosting and design service, Eco Web Hosting which leaves me free to share my secrets with people like you.",
            image: 'https://img-a.udemycdn.com/user/75x75/4387876_78bc.jpg?v4ZLGd_fKY5C7VkfQpLDZ0s6w2BTm0KMpwef3M-h-Dygi7leN-IH8mjAjYw4921fxkbWYtNUhZcP0e5Y3SG4elbBDdJQJRqeHmkMyRjV3190SaDVNxXCVlEB',
            courses: '41 courses'
        },
        {
            id: '4',
            name: 'Andrew Mead',
            description: "Before I ever heard about Udemy or thought about teaching, I created a web app development company. I've helped companies of all sizes launch production web applications to their customers. I've had the honor of working with awesome companies like Siemens, Mixergy, and Parkloco.",
            image: 'https://img-a.udemycdn.com/user/75x75/7231684_bc0d_4.jpg?b7HIKc7GUO2BWqtW1HhEZnWXIaabxYkzJXtXik1oI9N9KuUvRmGycOUkj_OLtvqdVToXI_BtLfYGC2R64gDHr_qULwKqxlHLS-ytMLGSMXOeG08WyYF3nbgu81o',
            courses: '4 courses'
        },
        {
            id: '5',
            name: 'Maximilian Schwarzmuller',
            description: 'Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS 2 in a lot of projects. I love both worlds nowadays!',
            image: 'https://img-a.udemycdn.com/user/75x75/13952972_e853.jpg?Q88_-Q9MIzLNKRFjWptlI2fQjvHyxZqRmXHRCz4PlJQUeumWBRf6UhO6av37WmU6WV1B0AeUw0o4sgaIeRn8S9sj_NmxJLfbYDTWZ3H0yLoZaA0Tqv8G3_4Ryw',
            courses: '35 courses'
        },
        {
            id: '6',
            name: 'Stephen Grider',
            description: "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.  With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.  Invest in yourself by learning from Stephen's published courses.",
            image: 'https://img-b.udemycdn.com/user/75x75/5487312_0554.jpg?secure=aP_A-Z6_BrlrJQIIFL-esA%3D%3D%2C1606460454',
            courses: '28 courses',
        },
        {
            id: '7',
            name: 'Elshad Karimov',
            description: 'I am Elshad Karimov and I am a Software Developer, online instructor , blogger and author of book, Data Structures and Algorithms in Swift. I have more than 10 years of software development experience with a solid background in iOS development and Game Development as well as Oracle PL/SQL, Java and Python. I worked in several companies and developed several extensions for financial and billing softwares. I have developed two games using Unity and I have more than 10 iOS Applications available on Appstore.',
            image: 'https://img-b.udemycdn.com/user/75x75/31517360_e260.jpg?secure=zASlAgzjxX35BXFgdPqfOQ%3D%3D%2C1606476855',
            courses: '3 courses',
        },
        {
            id: '8',
            name: 'Binary Brain',
            description: 'With an MSc in Software Engineering in addition to over 10 years of professional experience in various software development sectors including e-commerce, finance, and gaming spanning both front end and back end development - I will be delivering to you high-quality courses containing condensed information of different technologies and software architecture design skills that I have acquired through my years. ',
            image: 'https://img-a.udemycdn.com/user/75x75/21178878_27a5.jpg?0TCWUu-iCPh1XNcWgcaXWbbd2Da1751VLb7ga2hpZVYhfJTT4uaSk2MSXwJ2Rvr6F_it-Ip6R2taj0RiWXfy29Ew1wxYB1u0wL_t13M4I0nK1ouCE2K2m85Yqg',
            courses: '6 courses',
        },
        {
            id: '9',
            name: 'Stephane Maarek',
            description: "Stephane is a solutions architect, consultant and software developer that has a particular interest in all things related to Big Data, Cloud & API. He's also a many-times best seller instructor on Udemy for his courses in Apache Kafka and AWS.",
            image: 'https://img-a.udemycdn.com/user/75x75/16122994_284f_14.jpg?4IEbxADHto95YN6ZWMgsaJj_-TVb_5XVCQxWVcui5sKyJwySJ25qF-Tc06C30dSAe341YBFndbVUH_5ssvd4_eJfdKuGO1-OzwYbtc8zqd4y2y3_PxliikhHaK3JVg',
            courses: '37 courses',
        },
        {
            id: '10',
            name: 'Jonas Schmedtmann',
            description: "Hi, I'm Jonas! I have been identified as one of Udemy's Top Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction. I'm a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps since 2007 and also have a Master's degree in Engineering.",
            image: 'https://img-a.udemycdn.com/user/75x75/7799204_2091_5.jpg?FQ2kAgDSj3gRavlb5-3iT7dPA_D_AHq-YEm6XEPaBvs81XXMNd6KQb3wLFUS-oj45pENnoAFMF3el8ns6xSUMPrHX9FfV2IUn8T68r8GRkK2VkIU6p36VGUWlAE',
            courses: '5 courses',
        },
    ];

    return (
        <Tab.Navigator initialRouteName="All"
            lazy={true}
            tabBarOptions={{
                activeTintColor: '#EF5350',
                inactiveTintColor: '#616161',
                indicatorStyle: {
                    backgroundColor: '#EF5350',
                    elevation: 10,
                },
            }}
        >
            <Tab.Screen name="Courses"
                component={ListCourses}
                options={{ 
                    tabBarLabel: ({color}) => (
                        <View>
                            <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>Courses</Text>
                        </View>
                    )
                }}
                initialParams={{ courses: courses, mb: 100 }}
            />
            <Tab.Screen name="Paths"
                component={ListPathsTopic}
                options={{ 
                    tabBarLabel: ({color}) => (
                        <View>
                            <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>Paths</Text>
                        </View>
                    )
                }}
                initialParams={{ paths: paths }}
            />
            <Tab.Screen name="Authors"
                component={Authors}
                options={{ 
                    tabBarLabel: ({color}) => (
                        <View>
                            <Text style={{fontSize: 15, color: color, fontWeight: 'bold'}}>Authors</Text>
                        </View>
                    )
                }}
                initialParams={{ 
                    authors: authors,
                    type: 2,
                    hideButton: true,
                    title: `${authors.length} results`,
                    marginBottom: 100,
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({});

export default StackSearch;
