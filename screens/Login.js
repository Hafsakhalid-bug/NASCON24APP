import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleLogin = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
      navigation.navigate('Tabs');
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
    <LinearGradient
      colors={['#E9AB17', '#392800']}
      style={{
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(70),
          //   backgroundColor: 'grey',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: responsiveFontSize(5),
            fontWeight: '600',
          }}>
          Wallet
        </Text>
        <Text
          style={{
            color: '#E9AB17',
            fontSize: responsiveFontSize(5),
            fontWeight: '600',
          }}>
          Wise
        </Text>
      </View>
      <View
        style={{
          //   backgroundColor: 'grey',
          width: responsiveWidth(90),
          marginTop: responsiveHeight(6),
        }}>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 1)',
            fontSize: responsiveFontSize(3),
            fontWeight: 'bold',
            marginBottom: responsiveHeight(3),
          }}>
          Login
        </Text>
        <View
        //   style={{ backgroundColor: 'pink' }}
        >
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor={'rgba(145, 140, 140, 1)'}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.inputTextField}
          />
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            placeholder="Enter your Password"
            placeholderTextColor={'rgba(145, 140, 140, 1)'}
            secureTextEntry={visible}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputTextField}
          />
          <TouchableOpacity
            style={styles.iconViewStyle}
            onPress={() => {
              setVisible(!visible);
              setShow(!show);
            }}>
            <Image
              source={
                show === false
                  ? require('../assets/icons/show-password.png')
                  : require('../assets/icons/hide-password.png')
              }
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
        onPress={()=>{navigation.navigate('ForgotPasswordScreen')}}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: responsiveHeight(2.5),
            }}>
            <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
              Forgot your password?
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          width: responsiveWidth(80),
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback onPress={handleLogin}>
          <View
            style={{
              backgroundColor: 'rgba(233, 171, 23, 1)',
              height: responsiveHeight(6.5),
              width: responsiveWidth(60),
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: responsiveWidth(5),
              marginBottom: responsiveWidth(5),
            }}>
            <Text
              style={{
                color: 'rgba(57, 40, 0, 1)',
                fontSize: responsiveFontSize(2),
                fontWeight: '600',
              }}>
              Login
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: responsiveFontSize(1.8),
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    marginBottom: responsiveHeight(1),
  },

  inputTextField: {
    width: '100%',
    height: responsiveHeight(5.5),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    padding: responsiveWidth(3),
    color: 'black',
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.4),
    marginBottom: responsiveWidth(2),
  },
  iconStyle: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    tintColor: 'rgba(145, 145, 159, 1)',
  },
  iconViewStyle: {
    position: 'absolute',
    right: responsiveWidth(5),
    top: responsiveHeight(15),
  },
});
