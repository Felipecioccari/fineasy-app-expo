import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/fineasylogo.png')}
          style={{maxWidth:'100%'}}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Fique em dia com o seu time Fineasy</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A054',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    width: '95%',
    maxWidth: '95%',
    maxHeight: '25%',
    marginTop: '30%',
    marginBottom: '65%',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingStart: '5%',
    paddingEnd: '5%',
    justifyContent: 'top',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#41454A',
  },
  text: {
    color: '#41454A',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#A855A0',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 218,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});