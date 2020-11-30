import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import Content from './content';
import RadiusButton from '../Common/radius-button';
import IconButton from '../Common/icon-button';
import { navName } from '../../Global/constant';

const CourseDetail = ({ route, navigation }) => {
    const { item } = route.params;

    const contents = [
        {
            index: '1',
            title: 'Introduction',
            duration: '12min',
            content: ['Course Outline', 'Join Our Online Classroom', 'Exercise: Meet the community', 'Join Our Open Source Projects']
        },
        {
            index: '2',
            title: 'How The Internet Works',
            duration: '24min',
            content: ['Browsing the Web', 'Breaking Google', 'The Internet Backbone', 'Traceroute', 'Developer Fundamentals I', 'What does a developer do?']
        },
        {
            index: '3',
            title: 'History Of The Web',
            duration: '15min',
            content: ['WWW vs Internet', 'HTML, CSS, Javascript', 'Developer Fundamentals II', 'Developer History']
        },
        {
            index: '4',
            title: 'HTML 5',
            duration: '40min',
            content: ['Build Your First Website', 'DEVELOPER FUNDAMENTALS: III', 'HTML Tags', 'HTML Tags 2', 'Self Closing HTML Tags', 'Anchor Tag']
        }
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

    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 5,
              borderRadius: 50,
            }}
          />
        );
    }

    const [showDesc, setShowDesc] = useState(false);

    const seeAuthorDetails = () => {
        navigation.push(navName.author, { author: authors.find(a => a.name === item.author)})
    }

    return (
        <View style={{ marginTop: 20, marginBottom: 175 }}>
            <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20, zIndex: 1}}
                onPress={() => navigation.goBack()}
            >
                <Icon name="times" size={27} color="white" />
            </TouchableOpacity>

            <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: '100%', height: 170 }}
            />

            <ScrollView style={{margin: 10}}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <RadiusButton onPress={() => seeAuthorDetails()} text={item.author} />
                </View>
                <Text style={styles.darkText}>{item.level} . {item.released} . {item.duration}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
                    <IconButton url='https://cdn.iconscout.com/icon/premium/png-256-thumb/bookmark-44-206919.png'
                        text='Bookmark'
                        onPress={() => {}}
                    />
                    <IconButton url='https://icon-library.com/images/add-icon-transparent/add-icon-transparent-23.jpg'
                        text='Add to channel'
                        onPress={() => {}}
                    />
                    <IconButton url='https://www.svgimages.com/svg-image/s8/download-folder-icon-grey-256x256.png'
                        text='Download'
                        onPress={() => {}}
                    />
                </View>
                {FlatListItemSeparator()}
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
                    <Text style={{fontSize: 15, color: '#616161', flex: 1}} 
                        numberOfLines={showDesc ? undefined : 3}
                    >
                        {item.description}
                    </Text>
                    <TouchableOpacity style={{backgroundColor: 'lightgray', borderRadius: '3',
                                width: '10%', justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => setShowDesc(!showDesc)}
                    >
                        {showDesc ?
                            <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_up_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                            :
                            <Image source={{url: 'https://www.materialui.co/materialIcons/hardware/keyboard_arrow_down_grey_192x192.png'}} style={{width: 30, height: 30}}/>
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.push(navName.relatedPathsCourses)}
                >
                    <Image source={require('../../../assets/related_courses_detail.png')} style={{width: 25, height: 25}}/>
                    <Text style={{color: 'white', fontSize: 15, marginLeft: 15}}>Related paths & courses</Text>
                </TouchableOpacity>
                {FlatListItemSeparator()}
                
                
                <Text style={[styles.title, {marginTop: 15}]}>Content</Text>
                <FlatList 
                    data={contents}
                    renderItem={({item}) => <Content item={item}/>}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#616161', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 15, 
        maxHeight: 70
    },
    darkText: {
        color: 'grey',
        marginBottom: 15,
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#EF5350',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CourseDetail;