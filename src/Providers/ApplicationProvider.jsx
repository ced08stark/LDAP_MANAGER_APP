import React, { useContext, useState } from 'react';
import ApplicationContext from '../Contexts/AppContext';

const ApplicationProvider = ({children}) => {

    const [config, changeConfig] = useState(useContext(ApplicationContext).config)



    const setConfig = (cfg) => changeConfig(cfg)









    return <ApplicationContext.Provider value={{
        config,
        setConfig

    }}>{children}</ApplicationContext.Provider>;
}
 
export default ApplicationProvider;