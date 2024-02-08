import react from 'react';
import {Text, TextInput, StyleSheet, Alert,} from 'react-native';


const InputText = (props) => {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText= {props.onChangeText}
      placeholder= {props.placeholder}
      keyboardType= {props.keyboardType}
      secureTextEntry= {props.secureTextEntry}
    />
  );
  }

  const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      color: 'black',
    },
  });
export default InputText ;