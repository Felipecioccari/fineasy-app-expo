import React, { useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Animatable from 'react-native';
import { AuthContext } from '../../context/auth';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

// Define validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido!').required('Obrigatório!'),
  password: Yup.string().required('Obrigatório!'),
});


export default function SignIn() {
  const { handleLogin } = useContext(AuthContext);
  const navigation = useNavigation();
  const passwordInput = useRef();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleLogin(values.email, values.password);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <InputText
                title="Email"
                returnKeyType="next"
                onSubmitEditing={() => passwordInput.current.focus()}
                blurOnSubmit={false}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                placeholder="Seu email"
              />
              {errors.email && <Text>{errors.email}</Text>}

              
              <InputText
                title="Senha"
                ref={passwordInput}
                returnKeyType="done"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Sua senha"
                secureTextEntry
              />
              {errors.password && <Text>{errors.password}</Text>}

              <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Acessar</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
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