import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import api from '../../services/index';

const CheckinDetails = () => {
  const [checkedInUsers, setCheckedInUsers] = useState([]);

  const fetchCheckedInUsers = async () => {
    try {
      const response = await api.getAllUsers();
      const data = response.data.data.filter(user => user.checkedIn);
      setCheckedInUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCheckedInUsers();
  }, []);

  return (
    <View style={styles.container}>
{checkedInUsers.map((user, index) => (
  <View key={user.id || index} style={styles.userContainer}>
    <Text style={styles.userName}>{user.name}</Text>
    <Text style={styles.subText}>{user.email}</Text>
    <Text style={styles.subText}>{user.squad}</Text>
  </View>
))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  userContainer: {
    borderBottomWidth: 1,
    borderEndColor: '#fff',
    paddingLeft: '8%',
    paddingVertical: 5,
    width: '105%',
    alignSelf: 'center',
    
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 3,
  },
  subText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 0,
    marginTop: 0,
  },
});

export default CheckinDetails;
