import {View, Text, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';

export default function () {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [expense, setExpense] = useState('');
  const [totalExpenses, setTotalExpenses] = useState([]);

    useEffect(() => {
        const userRef = firebase.database().ref('users');
        const userid = 'wfTNVHoh4AeSDoQqQkFO1kGoW7j1';
        userRef.orderByKey().equalTo(userid).once('value', (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val()[userid];
                console.log('User Data:', userData.expenses);
                setTotalExpenses(userData.expenses);
            }
        }
        );
    }
    , []);


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

      const newExpense = parseInt(expense)+ parseInt(totalExpenses);
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
    <View>
      <Text>{totalExpenses}</Text>
      <TextInput
        placeholder="Enter Expense"
        value={expense}
        onChangeText={setExpense}
      />
      <TextInput
        placeholder="Enter Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add" onPress={addExpense} />
    </View>
  );
}
