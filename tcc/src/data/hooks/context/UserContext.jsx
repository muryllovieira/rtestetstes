import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [accessToken, setAccessToken] = useState("")

    return <UserContext.Provider value={{accessToken, setAccessToken}}>
        {children}
    </UserContext.Provider>
}

export default UserContext
