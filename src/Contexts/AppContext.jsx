import React, {createContext} from 'react';

const ApplicationContext = createContext({
    config : null,
    setConfig : () => {}
})


export default ApplicationContext;