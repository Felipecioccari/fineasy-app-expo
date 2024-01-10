import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#38a69d',
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
      backgroundColor: '#51C1C5',
      borderRadius: 50,
      paddingVertical: 16,
      width: '60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    registerText: {
      color: 'black',
    },
  });