import { createContext, useContext, useEffect, useState } from "react";
import addBlockToCloud from "../addBlockToCloud";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPayload, setUserPayload] = useState({});
  const [username, setUsername] = useState("");
  useEffect(() => {
    // addBlockToCloud('asdsadasdasdasd','tam,a')
    const uid = localStorage.getItem("uid");
    if (uid) setIsLoggedIn(true);
    const uname = localStorage.getItem("username");
    if (uname) setUsername(uname);
  }, []);
  const signIn = (payload) => {
    localStorage.setItem("uid", payload.user_id);
    const uname = payload.customFieldInputValues.Name;
    localStorage.setItem("username", uname);
    setIsLoggedIn(true);
    setUsername(uname);
  };
  const data = { signIn, isLoggedIn, username };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
