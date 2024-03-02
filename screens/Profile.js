import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView, StyleSheet
} from 'react-native';
import React,{useState} from 'react';

export default function Profile({navigation}) {
  const UserData = [
    {
      id: 1,
      name: 'Name',
      image: require('../assets/icons/shopping.png'),
    },
    {
      id: 2,
      name: 'Birthday',
      image: require('../assets/icons/shopping.png'),
    },
    {
      id: 3,
      name: 'Email',
      image: require('../assets/icons/shopping.png'),
    },
    {
      id: 4,
      name: 'Contact',
      image: require('../assets/icons/shopping.png'),
    },
    {
      id: 5,
      name: 'Password',
      image: require('../assets/icons/shopping.png'),
    },
    {
      id: 6,
      name: 'Donation History',
      image: require('../assets/icons/shopping.png'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex:1}}>
        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/icons/shopping.png')}
            resizeMode="cover"
            style={styles.gradientBackground}
          />
          <View style={{alignItems: 'center'}}>
            <View
              style={styles.imageView}>
              <Image
                source={require('../assets/icons/shopping.png')}
                style={styles.userImage}
              />
            </View>
            <Text style={styles.userName}>Hafsa Khalid</Text>
          </View>
        </View>
        <View
          style={styles.contentView}>
          {UserData.map(item => (
            <TouchableOpacity key={item.id}>
              <View
                key={item.id}
                style={styles.listItem}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.itemIcon}
                />
                <Text
                  style={styles.itemText}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{margin:30}}>
          <TouchableOpacity  style={{alignItems:'center',justifyContent:'center'}}>
            <Image
              source={require('../assets/icons/shopping.png')}
              resizeMode="cover"
              style={styles.btnBackground}
            />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
gradientBackground:{
  height: 600,
  width: 500,
  borderRadius: 999,
  marginLeft: -50,
  marginTop: -380,
  },
  imageView:{
    borderColor: 'grey',
    borderWidth: 2,
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginTop: -80,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  userImage:{
    width: 80,
    height: 80,
    borderWidth: 2
  },
userName:{
  color: 'black',
  marginVertical: 8,
  fontSize: 20,
  fontWeight: 'bold',
  },
contentView:{
  width: '100%',
  flex: 1,
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
},
listItem:{
  height: 40,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderWidth: 1,
  marginBottom: 10,
  borderBottomColor: 'grey',
  borderTopColor: 'white',
  },
  itemIcon: {
    tintColor: 'maroon',
    marginLeft: 15,
    marginBottom: 8, height: 35, width: 35
  },
itemText:{
  color: 'gray',
  fontSize: 18,
  width: '60%',
  justifyContent: 'flex-start',
},

  btnBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 50,
    borderRadius: 28,
    position: 'absolute',
  },
  btnText: {
    color: 'white',
    fontSize: 18
  },
})

