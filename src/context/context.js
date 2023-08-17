import { createContext, useState, useEffect } from "react";
export const ContextData = createContext(null);
import users from "@/data/users";
const Context = ({children})=>{
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState();
    const toggleProfileMenu = () => {
        if (typeof window != undefined) {
          let elem = document.querySelector('.prof-menu');
          if (elem.classList.contains('-left-full')) {
            elem.classList.remove('-left-full');
            elem.classList.add('left-0');
          } else {
            elem.classList.add('-left-full');
            elem.classList.remove('left-0');
          }
        }
      }
    useEffect(() => {
      if(typeof window!=undefined){
        let id = localStorage.getItem('duati-id')
        if(id){
          setLogin(true);
          const foundUser = users.find((user) => user.id === id);
          setUserData(foundUser)
        }else{
          setLogin(false)
        }
      }
      }, [])
    return <ContextData.Provider value={{"name":"usman", login, setLogin, toggleProfileMenu, userData, setUserData}}>
        {children}
    </ContextData.Provider>
}
export default Context
