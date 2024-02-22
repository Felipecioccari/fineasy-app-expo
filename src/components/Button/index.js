import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

const Styler = (type) => {
    if (type === 'positive') {
        return styles.pos;
    } else if (type === 'neutral') {
        return styles.neut;
    } else if (type === 'negative') {
        return styles.neg;
    }
}
const Button = (props) => {
  return (
    <TouchableOpacity style={Styler(props.type)} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pos:{
    backgroundColor: '#A4B548',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 218,
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf: 'center',
  },
  neg:{
    backgroundColor: '#41454A',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 218,
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf: 'center',
  },
  neut: {
    backgroundColor: '#A855A0',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 218,
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
