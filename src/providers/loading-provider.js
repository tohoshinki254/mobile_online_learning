import React, { useState } from 'react';

const LoadingContext = React.createContext();

const LoadingProvider = props => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export {LoadingProvider, LoadingContext};
