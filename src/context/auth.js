import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/index';
import React, {createContext, useEffect, useState} from 'react';
import { Buffer } from 'buffer';


export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser !== null) {
          setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, []);

  async function handleLogin(email, password) {
    try {
      const response = await api.loginUser(email, password);
      const {token} = response.data;
      await AsyncStorage.setItem('token', token);
      const parts = token.split('.');
      const payload = parts[1];
      const decodedToken = JSON.parse(Buffer.from(payload, 'base64').toString());
      setUser(decodedToken);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('user');
    setUser({});
    navigation.navigate('Welcome');
  }

  const handleSignUp = async (
    name,
    email,
    password,
    squad,
  ) => {
      const newUser = await api.registerUser(name, email, password, squad);
      const token = newUser.token;
      const parts = token.split('.');
      const payload = parts[1];
      await AsyncStorage.setItem('token', token);
      const decodedToken = JSON.parse(Buffer.from(payload, 'base64').toString());
      setUser(decodedToken);
      navigation.navigate('Home');
  };

  return (
    <AuthContext.Provider
      value={{user, isLoading, handleLogin, handleLogout, handleSignUp}}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
