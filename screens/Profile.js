import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Profile({navigation}) {
  const UserData = [
    {
      id: 1,
      name: 'Invite Friends',
      image: require('../assets/icons/add-user.png'),
    },
    {
      id: 2,
      name: 'Settings',
      image: require('../assets/icons/settings.png'),
    },
    {
      id: 3,
      name: 'Customer Support',
      image: require('../assets/icons/customer-service.png'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <View style={{width: '100%'}}>
          {/* <Image
            source={require('../assets/icons/shopping.png')}
            resizeMode="cover"
            style={styles.gradientBackground}
          /> */}
          <View style={styles.gradientBackground}></View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/icons/baji.png')}
                style={styles.userImage}
              />
            </View>
            <Text style={styles.userName}>Hafsa Khalid</Text>
          </View>
        </View>
        <View style={styles.contentView}>
          {UserData.map(item => (
            <TouchableOpacity key={item.id}>
              <View key={item.id} style={styles.listItem}>
                <Image
                  source={item.image}
                  resizeMode='center'
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    height: responsiveHeight(70),
    width: responsiveWidth(150),
    borderRadius: 500,
    marginLeft: -80,
    marginTop: -250,
    backgroundColor: 'rgba(57, 40, 0, 1)',
  },
  imageView: {
    // borderColor: 'grey',
    // borderWidth: 2,
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
  userImage: {
    width: responsiveWidth(34),
    height: responsiveHeight(17),
    // borderWidth: 2,
    borderRadius:100
  },
  userName: {
    color: 'rgba(0, 0, 0, 1)',
    marginVertical: 8,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  contentView: {
    width: responsiveWidth(100),
    flex: 1,
    marginTop: responsiveWidth(10),
    // backgroundColor:'lightblue',
    height: responsiveHeight(20),
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  listItem: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    // marginBottom: responsiveWidth(5),
    borderBottomColor: 'lightgrey',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
  },
  itemIcon: {
    tintColor: 'rgba(57, 40, 0, 1)',
    backgroundColor: 'rgba(233, 171, 23, 1)',
    borderRadius:20,
    marginLeft: -30,
    marginRight: -80,
    marginBottom: 3,
    // padding:responsiveWidth(5),
    height: responsiveHeight(5),
    width: responsiveHeight(5),
  },
  itemText: {
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
    fontSize: 18,
  },
});
