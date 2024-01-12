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
import CheckedInCard from '../../components/CheckedInCard';
import api from '../../services/index';
import {AuthContext} from '../../context/auth';

export default function Home() {
  const {user, handleLogout} = useContext(AuthContext);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
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
            <Image
              source={require('../../assets/profile.png')}
              style={styles.profileImage}
            />
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
                <CheckedInCard />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.checkInButton,
                styles.centerButton,
                isCheckedIn ? styles.disabledButton : null,
              ]}
              onPress={handleCheckIn}
              disabled={isCheckedIn}>
              <Text style={styles.checkInButtonText}>CHECK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.checkOutButton,
                styles.centerButton,
                !isCheckedIn ? styles.disabledButton : null,
              ]}
              onPress={handleCheckOut}
              disabled={!isCheckedIn}>
              <Text style={styles.checkOutButtonText}>CHECK-OUT</Text>
            </TouchableOpacity>
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
    color: '#FFF',
    fontSize: 16,
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  containerMenu: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 90,
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
    marginBottom: '20%',
    width: '100%',
    padding: 0,
  },

  checkedContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkInButton: {
    height: 52,
    width: 218,
    backgroundColor: '#A4B548',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginBottom: 16,
    alignItems: 'center',
  },
  checkInButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkOutButton: {
    height: 52,
    width: 218,
    backgroundColor: '#41454A',
    borderRadius: 50,
    paddingVertical: 16,
    alignItems: 'center',
    color: '#FFF',
  },
  checkOutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItems: {
    marginTop: 16,
  },
  centerButton: {
    alignSelf: 'center',
  },
  disabledButton: {
    color: '#FFF',
    backgroundColor: '#41454A',
  },
});
