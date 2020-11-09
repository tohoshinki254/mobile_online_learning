import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SectionPaths from '../Main/Home/SectionPaths/section-paths';

const ListPaths = () => {
    const paths = [
        {
            title: 'Conferences',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Certifications',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Software Development',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'IT Ops',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Information Security',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Data Professional',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Business Professional',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Creative Professional',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Manufacturing and Design',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        },
        {
            title: 'Architecture & Construction',
            data: [
                {
                    id: '1',
                    title: 'Big Data LDN 2020',
                    quantum: '44 course',
                },
                {
                    id: '2',
                    title: 'Pluralsight LIVE 2020',
                    quantum: '109 courses',
                },
                {
                    id: '3',
                    title: 'DevSecCon24',
                    quantum: '38 courses',
                },
            ]
        }
    ];


    return (
        <ScrollView style={{margin: 10}}>
            {paths.map(item => (
                <View>
                    <SectionPaths paths={item.data} title={item.title} type={1} hideButton={false} eventButton='See all >'/>
                    <View style={{margin: 17}} />
                </View>
            ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default ListPaths;