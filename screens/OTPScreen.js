import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import NumericPad from 'react-native-numeric-pad';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function OTPScreen() {
  const [amount, setAmount] = useState('');
  const numpadRef = useRef(null);
  return (
    <View style={styles.container}>
      <Text style={styles.Txt}>Let's setup your PIN</Text>
      <View style={styles.shadowBox}>
        <TextInput
          style={{fontSize: 20, color: 'white'}}
          showSoftInputOnFocus={false}
          maxLength={8}
          autoFocus={true}
          editable={false}
          selectTextOnFocus={false}
          value={amount}
        />
      </View>
      <View style={styles.keyboardContainer}>
        <NumericPad
          ref={numpadRef}
          numLength={4}
          buttonSize={responsiveWidth(22)}
          activeOpacity={0.1}
          onValueChange={value => setAmount(value)}
          allowDecimal={false}
          // Try them to understand each area :)
          // style={{ backgroundColor: 'black', paddingVertical: 5 }}
          buttonTextStyle={{
            color: 'rgba(252, 252, 252, 1)',
            fontSize: responsiveFontSize(5),
            fontWeight: '500',
          }}
          // buttonAreaStyle={{ backgroundColor: 'orange' }}
          buttonItemStyle={{
            backgroundColor: 'rgba(233, 171, 23, 0.57)',
            height: responsiveWidth(17),
          }}
          rightBottomButton={
            <Image
              source={require('../assets/icons/backspace-arrow.png')}
              style={styles.iconStyle}
            />
          }
          onRightBottomButtonPress={() => {
            numpadRef.current.clear();
          }}
        />
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.btn}>
          <Text style={styles.btnTxt}>Enter</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#392800',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  shadowBox: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'grey',
    margin: responsiveWidth(5),
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowColor: '#1D2660',
    elevation: 5,
  },
  Txt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    textAlign: 'center',
    marginTop: responsiveHeight(10),
    color: '#FCFCFC',
  },
  keyboardContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    position: 'relative',
    top:responsiveWidth(10),
    bottom: responsiveWidth(15),
    backgroundColor: 'grey',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowColor: '#1D2660',
    elevation: 5,
  },
  iconStyle: {
    width: responsiveWidth(15),
    height: responsiveWidth(10),
    tintColor: 'rgba(233, 171, 23, 1)',
  },
  btn: {
    backgroundColor: 'rgba(233, 171, 23, 1)',
    // width: responsiveWidth(35),
    // height: responsiveHeight(6),
    width: responsiveWidth(15),
    height: responsiveWidth(10),
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top:-10
    // bottom: responsiveWidth(5),
    // alignSelf: 'center',
  },
  btnTxt: {
    color: 'rgba(57, 40, 0, 1)',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
  },
});
