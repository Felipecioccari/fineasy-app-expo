import React from 'react';
import {Image} from 'react-native';

const Profile = () => {
    return (
        <Image 
            style={styles.profileImage}
            source={require('../../assets/profile.png')}
        />
    );
};

const styles = {
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#FFF',
    },
};
export default Profile;
