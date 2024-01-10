import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/auth';
import api from '../../services/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Animatable from 'react-native';

export default function () {
  const navigation = useNavigation();
  const {handleSignUp} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [squad, setSquad] = useState('');
  const [name, setName] = useState('');

  function handleSubmit() {
    handleSignUp(name, email, password, confirmPassword, squad);
  }

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
            <Text style={styles.title}>Nome</Text>
            <TextInput
              placeholder="Digite um name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder="Digite um email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput
              placeholder="Sua senha"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Text style={styles.title}>Confirme sua senha</Text>
            <TextInput
              placeholder="Sua senha"
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirm}
              secureTextEntry
            />
            <Text style={styles.title}>Squad</Text>
            <TextInput
              placeholder="Digite um Squad"
              style={styles.input}
              value={squad}
              onChangeText={setSquad}
            />
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
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
    minHeight: '100%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: 'black',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: 'black',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonLogin: {
    backgroundColor: '#A4B548',
    borderRadius: 50,
    paddingVertical: 16,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15%',
  },
  registerText: {
    color: 'black',
  },
});