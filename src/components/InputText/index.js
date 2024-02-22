import React, { forwardRef } from 'react';
import {Text, TextInput, StyleSheet, Alert,} from 'react-native';


const InputText = forwardRef((props, ref) => {
  return <TextInput
      style={styles.input}
      ref={ref}
      {...props}
    />
  });

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