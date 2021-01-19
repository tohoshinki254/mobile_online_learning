import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubeVideo = ({ id }) => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef();

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
            ref={playerRef}
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
