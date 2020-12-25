import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { SnackbarContext } from '../../providers/snackbar-provider';

const MySnackbar = () => {
    const context = useContext(SnackbarContext);

    return (
        <View>
            {context.snackbar.open && (
                <Snackbar style={{ flex: 1, justifyContent: 'space-between' }}
                    visible={context.snackbar.open}
                    action={{
                        label: 'X',
                        onPress: () => context.setSnackbar({ open: false, status: null, message: null })
                    }}
                    onDismiss={() => context.setSnackbar({ open: false, status: null, message: null })}
                >
                    {context.snackbar.status}: {context.snackbar.message}
                </Snackbar>
            )}
        </View>
    )
}

export default MySnackbar;
