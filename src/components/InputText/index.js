import react, { forwardRef } from 'react';
import {Text, TextInput, StyleSheet, Alert, TouchableOpacity, View,} from 'react-native';


const InputText = forwardRef((props, ref) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText= {props.onChangeText}
        placeholder= {props.placeholder}
        keyboardType= {props.keyboardType}
        secureTextEntry= {props.secureTextEntry}
        ref={ref}
        {...props}
      />
    </View>

    
  );
  });

  const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      color: 'black',
    },
    title: {
      fontSize: 20,
      marginTop: 28,
      color: 'black',
    },
  });
export default InputText ;