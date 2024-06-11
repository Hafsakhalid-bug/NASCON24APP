import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#392800',
          width: responsiveWidth(100),
          height: responsiveHeight(35),
        }}>
        <View
          style={{
            height: responsiveHeight(8),
            alignItems: 'center',
            // justifyContent: 'center',
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(1.5),
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(3),
            }}>
            Good Morning,
          </Text>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginRight: responsiveHeight(2.5),
              flexDirection: 'row-reverse',
            }}>
            <Image
              source={require('../assets/icons/notification.png')}
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(4.5),
                resizeMode: 'contain',
                tintColor: '#fff',
              }}
            />
            <Image
              source={require('../assets/icons/bar.png')}
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(4.5),
                resizeMode: 'contain',
                tintColor: '#fff',
              }}
            />
          </View>
        </View>
        <View style={{marginLeft: responsiveWidth(5)}}>
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(3),
              fontWeight: 'bold',
            }}>
            Hafsa
          </Text>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          // height: 225,
          height: responsiveHeight(28),
          top: '17%',
          left: '5%',
          right: '5%',
          backgroundColor: '#E9AB17',
          zIndex: 1,
          borderRadius: responsiveHeight(3),
          flex: 1,
          // flexDirection: 'row-reverse',
        }}>
        <View
          style={{
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(2.5),
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
            }}>
            Total Balance ^
          </Text>

          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(3.5),
              fontWeight: '800',
            }}>
            RS 22,000
          </Text>
        </View>

        <View
          style={{
            height: responsiveHeight(6),
            marginTop: responsiveHeight(1.5),
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/icons/downArrow.png')}
            style={{
              width: responsiveWidth(9),
              height: responsiveHeight(6),
              resizeMode: 'contain',
              tintColor: '#0B8520',
              marginLeft: responsiveWidth(5),
            }}
          />
          <Text
            style={{
              color: '#0B8520',
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
              marginLeft: responsiveWidth(1),
              marginTop: responsiveHeight(1.3),
            }}>
            Income
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
            }}>
            <Text
              style={{
                color: '#C40000',
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                marginLeft: responsiveWidth(1),
                marginTop: responsiveHeight(1.3),
                marginRight: responsiveWidth(5),
              }}>
              Expenses
            </Text>
            <Image
              source={require('../assets/icons/upArrow.png')}
              style={{
                width: responsiveWidth(9),
                height: responsiveHeight(6),
                resizeMode: 'contain',
                tintColor: '#C40000',
                marginLeft: responsiveWidth(5),
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: responsiveHeight(6),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(2.5),
              fontWeight: 'bold',
              marginLeft: responsiveWidth(5),
            }}>
            Rs 30500
          </Text>

          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(2.5),
              fontWeight: 'bold',
              marginRight: responsiveWidth(5),
            }}>
            Rs 60500
          </Text>
        </View>
      </View>

      <View
        style={{
          //   flex: 1,
          marginTop: responsiveHeight(8),
        //   backgroundColor: '#000',
        }}>
        <View
          style={{
            marginTop: responsiveHeight(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: responsiveHeight(5),
            marginHorizontal: responsiveWidth(5),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#000',
              fontWeight: 'bold',
            }}>
            Transactions History
          </Text>
          <TouchableWithoutFeedback>
            <View
              style={{
                height: responsiveHeight(5),
                width: responsiveWidth(20),
                backgroundColor: '#6A5931A6',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: responsiveHeight(2),
                // marginRight: responsiveWidth(5),
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.5),
                  color: '#fff',
                }}>
                See All
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: responsiveHeight(25),
        }}>
        <View
          style={{
            height: responsiveHeight(8),
            width: responsiveWidth(50),
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/icons/shopping.png')}
            style={{
              width: responsiveWidth(9),
              height: responsiveHeight(6),
              resizeMode: 'contain',
              tintColor: '#FCAC12',
              marginLeft: responsiveWidth(5),
            }}
          />
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                marginLeft: responsiveWidth(3),
              }}>
              Shopping
            </Text>

            <Text
              style={{
                color: '#666666',
                fontSize: responsiveFontSize(1.5),
                marginLeft: responsiveWidth(3),
              }}>
              Shopping
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            height: responsiveHeight(8),
            width: responsiveWidth(50),
            alignItems: 'center',
          }}>
          <View
            style={{flexDirection: 'column', marginRight: responsiveWidth(5)}}>
            <Text
              style={{
                color: '#000',
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                marginLeft: responsiveWidth(3),
              }}>
              -Rs 500
            </Text>

            <Text
              style={{
                color: '#666666',
                fontSize: responsiveFontSize(1.5),
                marginLeft: responsiveWidth(3),
              }}>
              11.00 AM
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            fontWeight: '600',
            marginLeft: responsiveWidth(5),
          }}>
          Chat
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: responsiveWidth(3),
          }}>
          <View
            style={{
              width: responsiveWidth(20),
              height: responsiveHeight(10),
              borderRadius: responsiveHeight(12),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/icons/baji.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: responsiveHeight(12),
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
