import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import ResetPassword from './screens/ResetPassword';
import Tabs from './screens/Tabs';
import Expense from './screens/Expense';
import MapScreen from './screens/MapScreen';
import OTPScreen from './screens/OTPScreen';
import ForgotPassword from './screens/ForgotPassword';
import EmailSent from './screens/EmailSent';

const Stack = createStackNavigator();

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnboardingScreen1"
      component={Onboarding1}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="OnboardingScreen2"
      component={Onboarding2}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="OnboardingScreen3"
      component={Onboarding3}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LoginScreen"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
    name="EmailSentScreen"
    component={EmailSent}
    options={{headerShown: false}}
  />
    <Stack.Screen
      name="ResetPasswordScreen"
      component={ResetPassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignUpScreen"
      component={Signup}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="MapLocation"
      component={MapScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <Text>App</Text> */}
      {/* <SplashScreen/> */}
      <NavigationContainer>
        {appReady ? <AccountStack /> : <SplashScreen />}
        {appReady ? <AccountStack /> : <SplashScreen />}
      </NavigationContainer> 
      {/* <Login/> */}
      {/* // <Expense/> */}
      {/* <OTPScreen/> */}
    </View>
  );
};

export default App;
