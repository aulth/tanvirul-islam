import { createContext, useState } from "react";
export const ContextData = createContext(null);
const Context = ({children})=>{
    const [login, setLogin] = useState(true)
    return <ContextData.Provider value={{"name":"usman", login, setLogin}}>
        {children}
    </ContextData.Provider>
}
export default Context
