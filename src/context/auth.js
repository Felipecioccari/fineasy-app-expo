import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/index';
import React, {createContext, useEffect, useState} from 'react';
import { jwtDecode } from "jwt-decode";
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

  // async function handleLogin(email, password) {
  //   try {
  //     const response = await api.loginUser(email, password);
  //     const user = response.data;
  //     console.log(user);
  //     await AsyncStorage.setItem('user', JSON.stringify(user));
  //     setUser(user);
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
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
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      console.error(error.config);
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
    confirmPassword,
    squad,
  ) => {
    try {
      if (!password || password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      const newUser = await api.registerUser(name, email, password, squad);
      if (!newUser || !newUser.token) {
        throw new Error('Failed to register user');
      }
      const token = newUser.token;
      const parts = token.split('.');
      const payload = parts[1];
      await AsyncStorage.setItem('token', token);
      const decodedToken = JSON.parse(Buffer.from(payload, 'base64').toString());
      setUser(decodedToken);
      navigation.navigate('Home');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      console.error(error.config);
    }
  };

  return (
    <AuthContext.Provider
      value={{user, isLoading, handleLogin, handleLogout, handleSignUp}}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
