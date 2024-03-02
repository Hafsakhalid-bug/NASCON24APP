import { View, Text, Alert, Button } from 'react-native'
import React, {useState} from 'react'
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log('User registration successful:', user);
      // Store user data in Firebase Realtime Database
      await firebase
        .database()
        .ref('users/' + user.uid)
        .set({
          name,
          email,
          contact,
          country: selectedCountry,
          city: selectedCity,
        });
      console.log('User data stored in Firebase Realtime Database');
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error registering user:', error.message);
    }
  }

  return (
    <View>
      <Text>Signup</Text>
      <Button
        title="Register"
        onPress={handleRegistration}
      />
    </View>
  )
}