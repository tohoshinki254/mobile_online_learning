import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ImageButton from '../../../Common/image-button';
import RadiusButton from '../../../Common/radius-button';
import SectionPaths from '../SectionPaths/section-paths';
import Authors from '../Authors/authors';

const Browse = () => {
    const skills = [
        'Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Patterns',
        'Python', 'React', '.NET', 'SQL Server', 'Database Administration', 'Part Modeling'
    ];

    const renderListSkills = (skills) => {
        return skills.map(item => 
            <RadiusButton onPress={() => {}} text={item} />
        );
    }

    return (
        <ScrollView style={styles.root} >
            <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 40, marginBottom: 20}}>Browse</Text>
            <ImageButton 
                title='NEW RELEASES' 
                onPress={() => {}}
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
                        onPress={() => {}}
                        URL="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                    <View style={{padding: 7}} />
                    <ImageButton 
                        title='DATA PROFESSIONAL'
                        onPress={() => {}}
                        URL="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                </View>
                <View style={{flexDirection: 'column', width: '48%'}}>
                    <ImageButton 
                        title='CERTIFICATIONS' 
                        onPress={() => {}}
                        URL="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                    <View style={{padding: 7}} />
                    <ImageButton 
                        title='BUSINESS PROFESSIONAL'
                        onPress={() => {}}
                        URL="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                </View>
            </View>
            
            <View style={{margin: 17}} />
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between'}}>
                <Text style={styles.title}>Paths</Text>
                <TouchableOpacity 
                    style={{backgroundColor: '#FF5252', 
                        padding: 4, borderRadius: 50, minWidth: 80,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => {}}
                >
                    <Text style={{color: 'white', fontSize: 13}}>See all ></Text>
                </TouchableOpacity>
            </View>
            <SectionPaths />

            <View style={{margin: 17}} />
            <Authors title="Top Authors"/>

            <View style={{margin: 17}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
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