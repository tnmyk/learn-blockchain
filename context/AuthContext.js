import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPayload, setUserPayload] = useState({});

    useEffect(()=>{
        const uid = localStorage.getItem("uid")
        if(uid) setIsLoggedIn(true)
    },[])
  const signIn = (payload) => {
      localStorage.setItem("uid",payload.user_id);
      setIsLoggedIn(true)
  };
  const data = { signIn,isLoggedIn };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
