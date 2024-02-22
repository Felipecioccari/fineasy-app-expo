import React, { useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Animatable from 'react-native';
import { AuthContext } from '../../context/auth';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
 
// Define validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().matches(/(.+\s.+)/, "Por favor, digite seu nome completo.").required('Obrigatório!'),
  email: Yup.string().email('Email Invalido').required('Obrigatório!'),
  password: Yup.string().required('Obrigatório!'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas precisam ser iguais!').required('Obrigatório!'),
  squad: Yup.string().required('Obrigatório!'),
});
 
export default function () {
  const { handleSignUp } = useContext(AuthContext);
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const squadInput = useRef();
  const nameInput = useRef();
 
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
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Formik
              initialValues={{ name: '', email: '', password: '', confirmPassword: '', squad: '' }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setFieldError }) => {
                try {
                  await handleSignUp(values.name, values.email, values.password, values.confirmPassword, values.squad);
                  // Navigate to the next screen or show a success message
                } catch (error) {
                  console.error('Error:', error);
                  console.log('Erro singup', error.response.data.message)
                  if (error.message && error.response.data && error.response.data.message) {
                    // If the error is that the email already exists, set field error
                    if (error.response.data.message === 'Este email já está em uso') {
                      setFieldError('email', 'Este email já está em uso!');
                    } else {
                      // For other errors, show an alert
                      Alert.alert('Error', error.response.data.message);
                    }
                  } else {
                    Alert.alert('Error', 'Tivemos um problema ao criar sua conta! Por favor, tente novamente mais tarde.');
                  }
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  
                  <InputText
                    title="Nome"
                    returnKeyType="next"
                    onSubmitEditing={() => emailInput.current.focus()}
                    blurOnSubmit={false}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Digite seu nome"
                  />
                  {errors.name && <Text>{errors.name}</Text>}
 
                  
                  <InputText
                    title="Email"
                    ref={emailInput}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInput.current.focus()}
                    blurOnSubmit={false}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    placeholder="Digite seu email"
                  />
                  {errors.email && <Text>{errors.email}</Text>}
                  
                  <InputText
                    title="Senha"
                    ref={passwordInput}
                    returnKeyType="next"
                    onSubmitEditing={() => confirmPasswordInput.current.focus()}
                    blurOnSubmit={false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Digite sua senha"
                    secureTextEntry
                  />
                  {errors.password && <Text>{errors.password}</Text>}
 
                  <InputText
                    title="Confirme sua senha"
                    ref={confirmPasswordInput}
                    returnKeyType="next"
                    onSubmitEditing={() => squadInput.current.focus()}
                    blurOnSubmit={false}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    placeholder="Confime sua senha"
                    secureTextEntry
                  />
                  {errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}

                  <InputText
                    title="Squad"
                    ref={squadInput}
                    returnKeyType="done"
                    onChangeText={handleChange('squad')}
                    onBlur={handleBlur('squad')}
                    value={values.squad}
                    placeholder="Digite seu Squad"
                  />
                  {errors.squad && <Text>{errors.squad}</Text>}

                  <Button
                    title="Criar"
                    type='positive'
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
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