import React, { useState } from 'react';

const SettingCommonContext = React.createContext();

const SettingCommonProvider = props => {
    const [language, setLanguage] = useState(false);
    const [theme, setTheme] = useState(true);

    return(
        <SettingCommonContext.Provider value={{language, setLanguage, theme, setTheme}}>
            {props.children}
        </SettingCommonContext.Provider>
    )
}

export {SettingCommonContext, SettingCommonProvider}
