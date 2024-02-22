import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import api from '../../services/index';
import {AuthContext} from '../../context/auth';
import CheckedInCard from '../../components/CheckedInCard';
import Profile from '../../components/Profile';
import Button from '../../components/Button';

export default function Home() {
  const {user, handleLogout} = useContext(AuthContext);
  const [isCheckedIn, setIsCheckedIn] = useState(user.checkedIn);
  const [isLoading, setIsLoading] = useState(true);

  const usarName=user.name
  const handleCheckIn = async () => {
    try {
      const response = await api.checkIn(user.id);
      setIsCheckedIn(true);
    } catch (error) {
      console.log('error');
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await api.checkOut(user.id);
      setIsCheckedIn(false);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButtons}>
            <Image style={styles.headerButtonContent} source={require('../../assets/iconNavBar.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButtons} onPress={handleLogout}>
            <Image style={styles.headerButtonContent} source={require('../../assets/iconLogOut.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.profilePicture}>
            <Profile />
          </TouchableOpacity>
        </View>
        <View style={styles.containerMenu}>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.squad}>{user.squad}</Text>
          </View>
          <View style={styles.menuItems}>
            <TouchableOpacity
              style={[styles.checkedConteiner]}>
              <View style={[styles.checkedContent]}>
                <CheckedInCard/>
              </View>
            </TouchableOpacity>
            <Button
              title={isCheckedIn ? 'CHECK-OUT' : 'CHECK-IN'}
              type= {isCheckedIn ? 'negative' : 'positive'}
              onPress={isCheckedIn ? handleCheckOut : handleCheckIn}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A054',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#FFF',
  },
  headerButtons: {
    borderRadius: 10,
    height: 40,
    width: 40,
  },
  headerButtonContent: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  profile: {
    alignItems: 'center',
    bottom: -20,
    zIndex: 1,
  },
  profilePicture: {
    alignItems: 'center',
  },
  containerMenu: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: '28%',
    paddingVertical: 20,
    height: '100%',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#41454A',
  },
  squad: {
    fontSize: 16,
    marginBottom: 16,
    color: '#41454A',
  },

  checkedConteiner: {
    alignSelf: 'center',
    marginBottom: '15%',
    width: '100%',
    padding: 0,
  },

  checkedContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuItems: {
    marginTop: 16,
  },
});
