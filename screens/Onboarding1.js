import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Onboarding1({navigation}) {
  const [board1Focus, setBoard1Focus] = useState(false);
  const [board2Focus, setBoard2Focus] = useState(false);
  const [board3Focus, setBoard3Focus] = useState(false);

  const handleBoard1 = () => {
    setBoard1Focus(true);
    setBoard2Focus(false);
    setBoard3Focus(false);
    navigation.navigate('OnboardingScreen1');
  };

  const handleBoard2 = () => {
    setBoard1Focus(false);
    setBoard3Focus(false);
    setBoard2Focus(true);
    navigation.navigate('OnboardingScreen2');
  };

  const handleBoard3 = () => {
    setBoard3Focus(true);
    setBoard1Focus(false);
    setBoard2Focus(false);
    navigation.navigate('OnboardingScreen3');
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen');
  };
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(50),
          //   backgroundColor: 'green',
          position: 'absolute',
        }}>
        <Image
          source={require('../assets/images/gradient2.png')}
          resizeMode="cover"
          //   blurRadius={30}
          style={styles.gradientBackground}
        />
        <TouchableWithoutFeedback onPress={handleSkip}>
          <View
            style={{
              backgroundColor: 'rgba(106,89,49,0.65)',
              alignItems: 'center',
              justifyContent: 'center',
              width: responsiveWidth(18),
              height: responsiveHeight(4),
              borderRadius: responsiveWidth(5),
              position: 'absolute',
              right: responsiveWidth(5),
              top: responsiveHeight(4),
              zIndex: 1,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}>
              skip
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: responsiveHeight(-65),
            left: responsiveWidth(5),
            width: responsiveWidth(100),
          }}>
          <Image
            source={require('../assets/images/onboardingimg1.png')}
            resizeMode="contain"
            style={{width: responsiveWidth(130), height: responsiveHeight(130)}}
          />
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'grey',
          width: responsiveWidth(90),
          margin: responsiveWidth(5),
          height: responsiveHeight(50),
          position: 'relative',
          top: responsiveHeight(50),
          alignItems: 'center',
        }}>
        <View
          style={{
            // backgroundColor: 'pink',
            width: responsiveWidth(70),
            height: responsiveHeight(12),
            alignItems: 'center',
            justifyContent:'center'
          }}>
          <Text
            style={{
              color: 'rgba(233,171,23,1)',
              fontSize: responsiveHeight(4),
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Take full control of your finances
          </Text>
        </View>
        <View
        style={{
          // backgroundColor: 'yellow',
          width: responsiveWidth(60),
          height: responsiveHeight(5),
        }}
        >
          <Text
            style={{
              color: 'rgba(106,89,49,0.65)',
              fontSize: responsiveHeight(1.8),
              textAlign: 'center',
            }}>
            Managing your finances is easier with us :
          </Text>
        </View>
        <View
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(8),
            // backgroundColor: 'lightgrey',
            position: 'relative',
            top: responsiveHeight(6),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* gesturehandler dots  */}
          <TouchableWithoutFeedback onPress={handleBoard1}>
            <View>
              {board1Focus === false ? (
                <Text
                  style={{
                    color: 'rgba(233, 171, 23, 1)',
                    fontSize: responsiveFontSize(4),
                  }}>
                  ●
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'rgba(233, 171, 23, 1)',
                    fontSize: responsiveFontSize(5),
                  }}>
                  ●
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleBoard2}>
            <View>
              {board2Focus === false ? (
                <Text
                  style={{
                    color: 'rgba(233, 171, 23, 1)',
                    fontSize: responsiveFontSize(4),
                  }}>
                  ●
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'rgba(233, 171, 23, 1)',
                    fontSize: responsiveFontSize(5),
                  }}>
                  ●
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleBoard3}>
            <View>
              {board3Focus === false ? (
                <Text
                  style={{
                    color: 'rgba(233, 171, 23, 1)',
                    fontSize: responsiveFontSize(4),
                  }}>
                  ●
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'rgba(233, 171, 23, 1)',
                    fontSize: responsiveFontSize(5),
                  }}>
                  ●
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{marginTop: responsiveWidth(5), marginBottom: 0}}>
          <TouchableWithoutFeedback onPress={handleSignUp}>
            <View
              style={{
                backgroundColor: 'rgba(57, 40, 0, 1)',
                height: responsiveHeight(6.5),
                width: responsiveWidth(80),
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                top: responsiveHeight(10),
                marginBottom: responsiveWidth(5),
                shadowColor: 'rgba(106, 89, 49, 1)',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOffset: 0,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: responsiveFontSize(2),
                  fontWeight: '600',
                }}>
                Sign Up
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleLogin}>
            <View
              style={{
                backgroundColor: 'rgba(106, 89, 49, 1)',
                height: responsiveHeight(6.5),
                width: responsiveWidth(80),
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                top: responsiveHeight(10),
                //   bottom:0
              }}>
              <Text
                style={{
                  color: '#rgba(233, 171, 23, 1)',
                  fontSize: responsiveFontSize(2),
                  fontWeight: '600',
                }}>
                Login
              </Text>
            </View>
          </TouchableWithoutFeedback>
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
