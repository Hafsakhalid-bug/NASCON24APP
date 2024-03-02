import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from './Home';
import Transactions from './Transactions';
import Budget from './Budget';
import Profile from './Profile';
import Add from './Add';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MapScreen from './MapScreen';
import Expense from './Expense';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E9AB17',

          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: 'lightgray',
            height: responsiveHeight(9),
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveHeight(4),
                    tintColor: focused ? '#E9AB17' : 'gray',
                  }}
                />

                <Text
                  style={{
                    color: focused ? '#E9AB17' : 'gray',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  Home
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={MapScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/icons/transaction.png')}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveHeight(4),
                    tintColor: focused ? '#E9AB17' : 'gray',
                  }}
                />

                <Text
                  style={{
                    color: focused ? '#E9AB17' : 'gray',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  Transactions
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
      name="Add"
          component={Expense}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#E9AB17',
                  height: responsiveHeight(7.5),
                  width: responsiveWidth(15),
                  borderRadius: responsiveWidth(8),
                  marginBottom: responsiveHeight(8),
                }}>
                <Image
                  source={require('../assets/icons/add.png')}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveHeight(4),
                    tintColor:  'white',
                  }}
                />
              </View>
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Budget"
          component={Budget}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/icons/budget.png')}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveHeight(4),
                    tintColor: focused ? '#E9AB17' : 'gray',
                  }}
                />

                <Text
                  style={{
                    color: focused ? '#E9AB17' : 'gray',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  Budget
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/icons/avatar.png')}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveHeight(4),
                    tintColor: focused ? '#E9AB17' : 'gray',
                  }}
                />

                <Text
                  style={{
                    color: focused ? '#E9AB17' : 'gray',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  Profile
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;
