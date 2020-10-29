import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SectionPathItems from '../SectionPathItems/section-path-items';

const SectionPaths = () => {
    const paths = [
        {
            title: 'Managing Conflict',
            quantum: '1 course',
        },
        {
            title: 'Managing Conflict',
            quantum: '2 courses',
        },
        {
            title: 'Managing Conflict',
            quantum: '3 courses',
        },
        {
            title: 'Managing Conflict',
            quantum: '4 courses',
        },
        {
            title: 'Managing Conflict',
            quantum: '5 courses',
        },
    ];

    const renderListPaths = (paths) => {
        return paths.map(item => 
            <SectionPathItems item={item} />
        );
    }

    return (
        <ScrollView horizontal={true}>
            {renderListPaths(paths)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default SectionPaths;