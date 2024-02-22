import React, {useEffect, useState,} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/index';


const CheckedInCard = () => {
  const navigation = useNavigation();
  const [checkedInCount, setCheckedInCount] = useState(0);

  const fetchCheckedInCount = async () => {
    try {
      const response = await api.getAllUsers();
      const count = response.data.data.filter(user => user.checkedIn).length;
      setCheckedInCount(count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCheckedInCount();
    const intervalId = setInterval(fetchCheckedInCount, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePress = () => {
    navigation.navigate('CheckedInDetails');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>Usuários no escritório hoje</Text>
      <Text style={styles.count}>{checkedInCount}</Text>
      <Text style={styles.subtitle}>Clique para ver mais</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#41454A',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomColor: '#41454A',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  count: {
    fontSize: 48,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#41454A',
  },
  subtitle: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 5,
    color: '#41454A',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckedInCard;
