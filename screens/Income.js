import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Dropdown} from 'react-native-element-dropdown';

export default function () {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [expense, setExpense] = useState('');
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    {label: 'Bottle', value: 'Bottle'},
    {label: 'Mobile', value: 'Mobile'},
    {label: 'Car', value: 'Car'},
    {label: 'Laptop', value: 'Laptop'},
    {label: 'Smart Watch', value: 'Smart Watch'},
  ];

  useEffect(() => {
    const userRef = firebase.database().ref('users');
    const userid = 'wfTNVHoh4AeSDoQqQkFO1kGoW7j1';
    userRef
      .orderByKey()
      .equalTo(userid)
      .once('value', snapshot => {
        if (snapshot.exists()) {
          const userData = snapshot.val()[userid];
          console.log('User Data:', userData.expenses);
          setTotalExpenses(userData.expenses);
        }
      });
  }, []);

  const addExpense = async () => {
    try {
      const userRef = firebase.database().ref('users');
      //   const snapshot = await userRef.once('value');
      //   const data = snapshot.val();
      //   const id = Object.keys(data)[0];
      //   console.log('ID:', id);
      //   console.log('User data:', data.expenses);

      const userid = 'wfTNVHoh4AeSDoQqQkFO1kGoW7j1';
      const expenseRef = firebase.database().ref('expenses/' + userid);
      expenseRef.push({
        expense,
        category,
        description,
        Date: new Date().toISOString(),
      });

      const newExpense = parseInt(expense) + parseInt(totalExpenses);
      console.log('New Expense:', newExpense);
      userRef.child(userid).update({expenses: newExpense});
      setTotalExpenses(newExpense);
      // const newExpenseRef = expenseRef.push();
      // newExpenseRef.set({
      //     category,
      //     description,
      //     Date: new Date().toISOString(),
      // });
      console.log('Expense added successfully');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#E9AB17'}}>
      <View
        style={{
          height: '35%',
        }}>
        <View
          style={{
            height: responsiveHeight(10),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.5),
              color: '#C40000',
              fontWeight: 'bold',
            }}>
            Expenses
          </Text>
        </View>
        <View
          style={{
            height: responsiveHeight(20),
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#392800',
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(5),
            }}>
            How much?
          </Text>
          <Text
            style={{
              color: '#C40000',
              fontSize: responsiveFontSize(5),
              marginLeft: responsiveWidth(5),
              fontWeight: 'bold',
            }}>
            RS 0
          </Text>
        </View>
      </View>

      <View
        style={{
          height: '65%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <Dropdown
          style={{
            backgroundColor: '#EFEFEF',
            borderRadius: 8,
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(5),
            marginRight: responsiveWidth(3),
            height: responsiveHeight(6.5),
            paddingHorizontal: responsiveWidth(3),
            marginBottom: responsiveHeight(1.7),
            width: '90%',
            color: '#56595D',
          }}
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
          inputSearchStyle={{
            height: responsiveHeight(6),
            fontSize: responsiveFontSize(1.5),
            fontFamily: 'Poppins-Regular',
            color: '#56595D',
          }}
          iconStyle={{height: responsiveHeight(2), width: responsiveWidth(5)}}
          itemTextStyle={{
            color: '#56595D',
            //   fontWeight: '700',
            fontSize: responsiveFontSize(1.5),
          }}
          data={cities}
          search
          maxHeight={responsiveHeight(30)}
          labelField="label"
          valueField="value"
          placeholder="Category"
          searchPlaceholder="Search..."
          value={selectedCity}
          onChange={item => {
            setSelectedCity(item.value);
          }}
        />

        <TextInput
          placeholder="Description"
          placeholderTextColor={'rgba(145, 140, 140, 1)'}
          keyboardType="default"
          value={description}
          onChangeText={text => setDescription(text)}
          style={{
            width: '90%',
            height: responsiveHeight(6),
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 10,
            marginLeft: responsiveWidth(5),
            marginRight: responsiveWidth(3),
            marginTop: responsiveHeight(2),
            padding: responsiveWidth(3),
            //   fontFamily: 'Poppins-Medium',
            color: 'black',
            textAlignVertical: 'center',
            fontSize: responsiveFontSize(1.48),
            marginBottom: responsiveWidth(2),
          }}
        />

        <View
          style={{
            height: responsiveHeight(6),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'lightgrey'}}>Add Attachment</Text>
        </View>

        <View
          style={{
            height: responsiveHeight(8),
            justifyContent: 'center',
            marginLeft: responsiveWidth(5),
            borderColor: 'lightgrey',
            borderWidth: 1,
            borderRadius: 10,
            width: '90%',
            padding: responsiveWidth(3),
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: responsiveFontSize(2),
            }}>
            Repeat
          </Text>
          <Text style={{color: 'lightgrey', fontSize: responsiveFontSize(1.8)}}>
            Repeat
          </Text>
        </View>

        <View
          style={{
            height: responsiveHeight(8),
            justifyContent: 'center',
            marginLeft: responsiveWidth(5),
            borderColor: 'lightgrey',
            borderWidth: 1,
            borderRadius: 10,
            width: '90%',
            padding: responsiveWidth(3),
            marginTop: responsiveHeight(2),
          }}>
          <Text
            style={{
              color: 'lightgrey',
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
            }}>
            Location
          </Text>
        </View>

        <TouchableWithoutFeedback >
          <View
            style={{
              backgroundColor: '#C40000',
              height: responsiveHeight(6.5),
              width: responsiveWidth(90),
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              margin: responsiveWidth(5),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: responsiveFontSize(2),
                fontWeight: '600',
              }}>
              Continue
            </Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    </View>
  );
}
