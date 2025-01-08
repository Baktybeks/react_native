import {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";
import { getCurrentUser } from "../lib/appwrite";

export const useGlobalContext = () => useContext(GlobalContext);
const GlobalContext = createContext();
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(null);

useEffect(() => {
  getCurrentUser
    .then(() => {
      if (res) {
        setIsLoggedIn(true);
        setUser(res);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
}, []);

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
