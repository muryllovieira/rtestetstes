import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [accessToken, setAccessToken] = useState("")
    const [ id, setId ] = useState("")

    return <UserContext.Provider value={{accessToken, setAccessToken, id, setId}}>
        {children}
    </UserContext.Provider>
}

export default UserContext
