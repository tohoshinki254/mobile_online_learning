import React, { useEffect, useState, useContext } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import SectionPaths from './SectionPaths/section-paths';
import Authors from './Authors/authors';
import { AuthenticationContext } from '../../../providers/authentication-provider';
import { getProcessCourses } from '../../../actions/user-actions';

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

            <Authors authors={authors}
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