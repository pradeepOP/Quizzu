"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";
import ApiRequest from "@/utils/apiRequest";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await ApiRequest.get("/user/me");
        console.log(res);
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setUser({});
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
