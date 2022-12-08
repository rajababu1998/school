import React, { createContext, useEffect, useState } from 'react'


const DataAppContext = createContext();

const DataApp = (props) => {
    const [isLoggedIn,setLogin] = useState(true);
    const [userName, setUserName] = useState('Raja Babu');
    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
        // console.log('isLoggedIn', isLoggedIn);
        // console.log('userName', userName);
        // console.log('bgColor', bgColor);
    })
    return (
        <>
            <DataAppContext.Provider value={{isLoggedIn, setLogin, userName, setUserName, bgColor, setBgColor}}>
                <div style={{'background':bgColor}}>
                    <div className="app-main">
                        {props.children}
                    </div>
                </div>
                
            </DataAppContext.Provider>
        </>
    )
}

export default DataApp
export {DataAppContext}