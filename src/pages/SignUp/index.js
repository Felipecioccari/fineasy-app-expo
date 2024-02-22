import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/auth';
import api from '../../services/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Animatable from 'react-native';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

export default function () {
  const navigation = useNavigation();
  const {handleSignUp} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [squad, setSquad] = useState('');
  const [name, setName] = useState('');

  function handleSubmit() {
  if (email && password){
      if (validateEmail(email)) {
        handleSignUp(name, email, password, confirmPassword, squad);
      } else {
        Alert.alert('Por favor digite um email valido');
      }
    }
    else {
      Alert.alert('Preencha todos os campos corretamente!');
    }
  }
  function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}(\.br)?$/;
    return regex.test(email);
  };

  return (
    <View style={styles.container}>
      <Animatable.ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo!</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <KeyboardAvoidingView>
            
            <InputText
              title="Nome"
              placeholder="Digite o seu nome"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <InputText
              title="Email"
              placeholder="Digite um email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            
            <InputText
            title="Senha"
              placeholder="Digite uma senha"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <InputText
              title="Confirmar Senha"
              placeholder="Repita a senha "
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirm}
              secureTextEntry
            />
            <InputText
              title="Time"
              placeholder="Digite o seu time"
              style={styles.input}
              value={squad}
              onChangeText={setSquad}
            />
          </KeyboardAvoidingView>

          <Button
            title="Criar"
            type="positive"
            onPress={handleSubmit}
          />
        </Animatable.View>
      </Animatable.ScrollView>
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
    paddingBottom: '25%',
  },
  
  
  
  registerText: {
    color: 'black',
  },
});