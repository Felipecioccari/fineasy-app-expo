import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    setIsLoading(true);
    // Handle sign up logic
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <TextInput
        placeholder="Digite um nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.title}>Email</Text>
      <TextInput
        placeholder="Digite um email"
        style={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (!validateEmail(text)) {
            setEmailError('Por favor, insira um email válido.');
          } else {
            setEmailError('');
          }
        }}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <Text style={styles.title}>Senha</Text>
      <TextInput
        placeholder="Digite uma senha"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        <Text>{isPasswordVisible ? 'Hide Password' : 'Show Password'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
      </TouchableOpacity>
    </View>
  );
}
