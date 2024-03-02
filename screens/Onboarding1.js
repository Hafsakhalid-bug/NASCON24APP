import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Onboarding1() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff',position:'absolute'}}>
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(50),
          //   backgroundColor: 'lightgrey',
        }}>
        <Image
          source={require('../assets/images/gradient2.png')}
          resizeMode="cover"
          style={styles.gradientBackground}
        />
        <View style={{alignItems:'center',justifyContent:'center',position:'relative',top:responsiveHeight(-65),left:responsiveWidth(5),width:responsiveWidth(100)}}>
          <Image
            source={require('../assets/images/onboardingimg1.png')}
                      resizeMode="contain"
                      style={{width:responsiveWidth(130),height:responsiveHeight(130)}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    height: responsiveHeight(90),
    width: responsiveWidth(120),
    borderRadius: 999,
    marginLeft: responsiveWidth(-10),
    marginTop: responsiveHeight(-40),
  },
});
