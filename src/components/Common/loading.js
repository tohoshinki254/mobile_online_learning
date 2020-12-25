import React, { useContext } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { LoadingContext } from '../../providers/loading-provider';

const Loading = () => {
    const { loading } = useContext(LoadingContext);

    return (
        <Modal visible={loading}
            transparent={true}
            style={{ width: '100%', height: '100%' }}
        >
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                <ActivityIndicator size="large" color="#FF5252"/>
            </View> 
        </Modal>
    )
}

export default Loading;