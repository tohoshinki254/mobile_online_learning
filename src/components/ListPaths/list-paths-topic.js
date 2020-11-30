import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SectionPaths from '../Main/Home/SectionPaths/section-paths';

const ListPathsTopic = ({ navigation, route }) => {
    const paths = route.params?.paths;
    const title = `${paths.length} results`;
    return (
        <View style={styles.root}>
            <SectionPaths paths={paths}
                title={title}
                type={2}
                hideButton={true}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 100
    },
});

export default ListPathsTopic;