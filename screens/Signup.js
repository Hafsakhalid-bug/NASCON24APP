import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import axios from 'axios';
import fetchCountriesData from '../localStorage/fetchCountriesData';
import { storeData, getData } from '../localStorage/storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';

export default function Signup({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
//   const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [password, setPassword] = useState('');

  const cities = [
    {label: 'Rawalpindi', value: 'Rawalpindi'},
    {label: 'Islamabad', value: 'Islamabad'},
    {label: 'Lahore', value: 'Lahore'},
    {label: 'Karachi', value: 'Karachi'},
    {label: 'Quetta', value: 'Quetta'},
    {label: 'Peshawar', value: 'Peshawar'},
    {label: 'Sialkot', value: 'Sialkot'},
  ];

    
  useEffect(() => {
    const fetchData = async () => {
      // Check if data is already stored locally
      const storedData = await getData('countries');
      if (storedData) {
        setCountries(storedData);
      } else {
        // Fetch data from API if not stored locally
        const countriesData = await fetchCountriesData();
        setCountries(countriesData);
        // Store data locally for future use
        storeData('countries', countriesData);
      }
    };

    fetchData();
  }, []);

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
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
    }
    
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
          Get Started!
        </Text>
        <View
        //   style={{ backgroundColor: 'pink' }}
        >
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor={'rgba(145, 140, 140, 1)'}
            keyboardType="default"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.inputTextField}
          />
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor={'rgba(145, 140, 140, 1)'}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.inputTextField}
          />
          <Text style={styles.inputText}>Contact</Text>
          <TextInput
            placeholder="Enter Contact Number"
            placeholderTextColor={'rgba(145, 140, 140, 1)'}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.inputTextField}
          />
          <Text style={styles.inputText}>Country</Text>
          <Dropdown
            style={[styles.dropdown, {width: '100%', color: '#56595D'}]}
            placeholderStyle={{
              fontSize: responsiveFontSize(1.5),
              fontFamily: 'Poppins-Regular',
              color: '#56595D',
              //   fontWeight: '700',
            }}
            selectedTextStyle={{
              fontSize: responsiveFontSize(1.5),
              fontFamily: 'Poppins-Regular',
              color: 'black',
            }}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={{
              color: '#56595D',
              //   fontWeight: '700',
              fontSize: responsiveFontSize(1.5),
            }}
            iconStyle={styles.iconStyle}
            // data={Countries}
            data={countries.map(country => ({
              label: country.name.common,
              value: country.cca2,
            }))}
            search
            maxHeight={responsiveHeight(30)}
            labelField="label"
            valueField="value"
            placeholder="Select Country"
            searchPlaceholder="Search..."
            value={selectedCountry}
            onChange={(value) => 
                setSelectedCountry(value)}
                  />
          <Text style={styles.inputText}>City</Text>
          <Dropdown
            style={[styles.dropdown, {width: '100%', color: '#56595D'}]}
            placeholderStyle={{
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Poppins-Regular',
                color: '#56595D',
                //   fontWeight: '700',
            }}
            selectedTextStyle={{
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Poppins-Regular',
                color: 'black',
            }}
            // disable={!Editable}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={{color: '#56595D',
            //   fontWeight: '700',
            fontSize: responsiveFontSize(1.5),}}
            data={cities}
            search
            maxHeight={responsiveHeight(30)}
            labelField="label"
            valueField="value"
            placeholder="Select City"
            searchPlaceholder="Search..."
            value={selectedCity}
            onChange={item => {
              setSelectedCity(item.value);
            }}
          />      
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            placeholder="Enter your Password"
            placeholderTextColor={'rgba(145, 140, 140, 1)'}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputTextField}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ResetPasswordScreen');
          }}>
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
          //   backgroundColor: 'green',
          width: responsiveWidth(80),
          //   height: responsiveHeight(20),
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback>
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
              Sign Up
            </Text>
          </View>
        </TouchableWithoutFeedback>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'rgba(255, 255, 255, 1)'}}>Already have an account? </Text>
          <TouchableWithoutFeedback onPress={handleLogin}>
              <Text style={{color:'rgba(233, 171, 23, 1)'}}>Login</Text>
          </TouchableWithoutFeedback>
          </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: responsiveFontSize(1.8),
    //   fontFamily: 'Poppins-Medium',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    marginBottom: responsiveHeight(1),
  },

  inputTextField: {
    width: '100%',
    height: responsiveHeight(4.5),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    padding: responsiveWidth(3),
    //   fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(1.4),
    marginBottom: responsiveWidth(2),
    },
    dropdown: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        height: responsiveHeight(4.5),
        paddingHorizontal: responsiveWidth(3),
        marginBottom: responsiveHeight(1.7),
      },
      iconStyle: {
        //dropdown icon
        height: responsiveHeight(2),
        width: responsiveWidth(5),
      },
      inputSearchStyle: {
        //dropdown search
        height: responsiveHeight(6),
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'Poppins-Regular',
        color: '#56595D',
      },
});
