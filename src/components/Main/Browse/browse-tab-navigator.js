import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navName } from '../../../Global/constant';
import Browse from './browse';
import NewReleases from '../Home/NewReleases/new-releases';
import PopularSkillDetails from '../Home/PopularSkillDetails/popular-skill-details';
import TopicDetails from '../TopicDetails/topic-details';
import ListPaths from '../../ListPaths/list-paths';
import PathDetails from '../PathDetails/path-details';
import ListPathsTopic from '../../ListPaths/list-paths-topic';
import CourseDetail from '../../CourseDetail/course-detail';
import AuthorDetails from '../AuthorDetails/author-details';
import RelatedPathsCourses from '../Home/RelatedPathsCourses/related-paths-courses';
import ListCourses from '../../ListCourses/list-courses';

const BrowseTabNavigation = createStackNavigator();

const BrowseTabNavigator = () => {
    return (
        <BrowseTabNavigation.Navigator initialRouteName={navName.browse}>
            <BrowseTabNavigation.Screen name={navName.browse}
                component={Browse}
                options={{ headerShown: false }}
            />
            <BrowseTabNavigation.Screen name={navName.newRelease}
                component={NewReleases}
            />
            <BrowseTabNavigation.Screen name={navName.skill}
                component={PopularSkillDetails}
            />
            <BrowseTabNavigation.Screen name={navName.topic}
                component={TopicDetails}
            />
            <BrowseTabNavigation.Screen name={navName.listPaths}
                component={ListPaths}
            />
            <BrowseTabNavigation.Screen name={navName.path}
                component={PathDetails}
            />
            <BrowseTabNavigation.Screen name={navName.pathsTopic}
                component={ListPathsTopic}
            />
            <BrowseTabNavigation.Screen name={navName.courseDetails}
                component={CourseDetail}
                options={{ headerShown: false }}
            />
            <BrowseTabNavigation.Screen name={navName.author}
                component={AuthorDetails}
            />
            <BrowseTabNavigation.Screen name={navName.relatedPathsCourses}
                component={RelatedPathsCourses}
            />
            <BrowseTabNavigation.Screen name={navName.listCourses}
                component={ListCourses}
            />
        </BrowseTabNavigation.Navigator>
    )
}

export default BrowseTabNavigator;
