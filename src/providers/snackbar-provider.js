import React, { useState } from 'react';

const SnackbarContext = React.createContext();

const SnackbarProvider = props => {
    const [snackbar, setSnackbar] = useState({ 
        open: false,
        status: null, 
        message: null 
    });

    return (
        <SnackbarContext.Provider value={{snackbar, setSnackbar}}>
            {props.children}
        </SnackbarContext.Provider>
    )
}

export {SnackbarProvider, SnackbarContext};
