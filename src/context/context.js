import { createContext, useState } from "react";
export const ContextData = createContext(null);
const Context = ({children})=>{
    const [login, setLogin] = useState(true);
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
    return <ContextData.Provider value={{"name":"usman", login, setLogin, toggleProfileMenu}}>
        {children}
    </ContextData.Provider>
}
export default Context
