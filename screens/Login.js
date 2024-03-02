import { View, Text, Alert, Button } from 'react-native'
import React, {useState} from 'react'
import auth from '@react-native-firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Invalid Email', 'Please enter a valid email address');
      }
      if (error.code === 'auth/user-not-found') {
        Alert.alert('User Not Found', 'Please enter a valid email address');
      }
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Invalid Password', 'Please enter a valid password');
      }
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  )
}