import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

export default function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#392800',
        width: responsiveWidth(100),
        height: responsiveHeight(100),
      }}>
      <View
        style={{
          margin: responsiveWidth(5),
          alignItems: 'center',
          justifyContent: 'center',
          width: responsiveWidth(100),
          height: responsiveHeight(100),
        }}>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(25),
          }}>
          <View
            style={{height: responsiveHeight(15), margin: responsiveWidth(10)}}>
            <LinearGradient
              colors={[
                '#E9AB19',
                '#E9AB17',
                '#E9AB19',
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={{
                borderRadius: responsiveHeight(15) / 2,
                width: responsiveWidth(20),
                height: responsiveHeight(10),
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'absolute',
              }}>
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 100,
                }}
                blurType="light" // Adjust blurType as needed
                blurAmount={50} // Adjust blurAmount as needed
              />
            </LinearGradient>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: responsiveWidth(50),
              position: 'relative',
              top: responsiveHeight(-19),
              left: responsiveHeight(8),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(6),
                fontWeight: '700',
              }}>
              Wallet
            </Text>
            <Text
              style={{
                color: '#E9AB17',
                fontSize: responsiveFontSize(6),
                fontWeight: '700',
              }}>
              Wise
            </Text>
          </View>
          <View
            style={{
              height: responsiveHeight(10),
              alignItems: 'center',
              position: 'relative',
              top: responsiveHeight(-15),
            }}>
            <Text style={styles.textStyle}>Your Compass to Financial</Text>
            <Text style={styles.textStyle}>Confidence!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#E9AB17',
    fontSize: responsiveFontSize(2.3),
  },
});
