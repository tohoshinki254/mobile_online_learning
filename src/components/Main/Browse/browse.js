import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ImageButton from '../../Common/image-button';
import RadiusButton from '../../Common/radius-button';
import SectionPaths from '../Home/SectionPaths/section-paths';
import Authors from '../Home/Authors/authors';
import { navName } from '../../../Global/constant';

const Browse = ({ navigation }) => {
    const skills = [
        'Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Patterns',
        'Python', 'React', '.NET', 'SQL Server', 'Database Administration', 'Part Modeling'
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
        {
            id: '4',
            title: 'Managing Conflict',
            quantum: '4 courses',
        },
        {
            id: '5',
            title: 'Managing Conflict',
            quantum: '5 courses',
        },
    ];

    const navigateSkill = () => {
        navigation.navigate(navName.skill);
    }

    const navigateTopic = () => {
        navigation.navigate(navName.topic);
    }

    const renderListSkills = (skills) => {
        return skills.map(item => 
            <RadiusButton onPress={() => navigateSkill()} text={item} />
        );
    }

    return (
        <ScrollView style={styles.root} >
            <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 35, marginBottom: 20}}>Browse</Text>
            <ImageButton 
                title='NEW RELEASES' 
                onPress={() => navigation.navigate(navName.newRelease)}
                URL="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                fontSize={24}
            />
            <View style={{padding: 7}} />
            <ImageButton 
                title='RECOMMENDED FOR YOU'
                onPress={() => {}}
                URL="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                fontSize={24}
            />

            <View style={{margin: 17}} />
            <Text style={styles.title}>Popular skills</Text>
            <ScrollView horizontal={true}>
                {renderListSkills(skills)}
            </ScrollView>

            <View style={{margin: 17}} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column', width: '48%'}}>
                    <ImageButton 
                        title='CONFERENCES' 
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                    <View style={{padding: 7}} />
                    <ImageButton 
                        title='DATA PROFESSIONAL'
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                </View>
                <View style={{flexDirection: 'column', width: '48%'}}>
                    <ImageButton 
                        title='CERTIFICATIONS' 
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                    <View style={{padding: 7}} />
                    <ImageButton 
                        title='BUSINESS PROFESSIONAL'
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                </View>
            </View>
            
            <View style={{margin: 17}} />
            <SectionPaths paths={paths} 
                title='Paths' 
                type={1} 
                hideButton={false} 
                eventButton='See all >'
                navigation={navigation}
            />

            <View style={{margin: 17}} />
            <Authors title="Top Authors" 
                type={1} 
                hideButton={true}
                navigation={navigation}
            />

            <View style={{margin: 17}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    }
});

export default Browse;