import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubeVideo = ({ id }) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <YoutubePlayer
            height={215}
            width="100%"
            play={playing}
            videoId={id}
            onChangeState={onStateChange}
        />
    )
}

export default YoutubeVideo;

const styles = StyleSheet.create({});
