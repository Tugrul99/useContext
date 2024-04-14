import React, { useState, createContext } from 'react'

import ComponentB from './ComponentB'

// useContext() React hook allows us to share values 
//              between multiple levels of components 
//              without passing props through each level

export const UserContext = createContext();


function ComponentA() {
    const [user, setUser] = useState("Toghrul")
    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>


            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>


        </div>
    )




}


export default ComponentA