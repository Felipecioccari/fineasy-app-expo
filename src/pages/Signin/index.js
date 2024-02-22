import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../context/auth';

import * as Animatable from 'react-native';

import InputText from '../../components/InputText';
import Button from '../../components/Button';

export default function SignIn() {
  
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {handleLogin} = useContext(AuthContext);

  const navigation = useNavigation();

  function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}(\.br)?$/;
    return regex.test(email);
  };

  function handleSubmit() {
    if (email && password){
      if (validateEmail(email)) {
        handleLogin(email, password);
      } else {
        Alert.alert('Por favor digite um email valido');
      }
    }
    else {
      Alert.alert('Preencha todos os campos corretamente!');
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <InputText
          title="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Seu email"
        />

        <InputText
          title="Senha"
          placeholder="Sua senha"
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
        
        <Button 
          onPress={handleSubmit} 
          type = {'neutral'}
          title={'Entrar'}
        />
        
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A054',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: 'black',
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  
  registerText: {
    color: '#A855A0',
  },
});


  

  