import { createContext, useState, useEffect } from "react";
export const ContextData = createContext(null);
import users from "@/data/users";
const Context = ({ children }) => {
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
  const fetchUser = async (authtoken) => {
    const response = await fetch('/api/verifyuser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ authtoken })
    })
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setUserData(json.user);
      setLogin(true)
    } else {
      setLogin(false);
    }
  }
  useEffect(() => {
    if (typeof window != undefined) {
      let authtoken = localStorage.getItem('authtoken');
      console.log(authtoken);
      if (authtoken) {
        fetchUser(authtoken);
      } else {
        localStorage.removeItem('authtoken');
        setLogin(false);
      }
    }
  }, [])
  return <ContextData.Provider value={{ "name": "usman", login, setLogin, toggleProfileMenu, userData, setUserData, fetchUser }}>
    {children}
  </ContextData.Provider>
}
export default Context
