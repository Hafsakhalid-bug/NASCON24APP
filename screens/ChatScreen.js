import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {firebase} from '@react-native-firebase/database';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [roomId, setRoomId] = useState('');

  //   useEffect(() => {
  //     // Set up Firebase listener to fetch messages
  //     const messagesRef = firebase.database().ref('messages');
  //     messagesRef.on('value', snapshot => {
  //       const data = snapshot.val();
  //       if (data) {
  //         const messageList = Object.keys(data).map(key => ({
  //           ...data[key],
  //           id: key,
  //         }));
  //         setMessages(messageList);
  //       }
  //     });

  //     return () => messagesRef.off('value');
  //   }, []);

  const loadmessage = async () => {
    try {
      const messagesRef = ref(db, "messages");
      const roomMessagesQuery = query(
        messagesRef,
        orderByChild("roomid"),
        equalTo(roomId)
      );

      // console.log(roomId, "roomid");
      onValue(roomMessagesQuery, (snapshot) => {
        const messages = snapshot.val();
        if (messages) {
          const roomMessagesArray = Object.values(messages);
          const sortedMessages = roomMessagesArray.sort((a, b) => {
            return a.createdAt - b.createdAt;
          });

          setChat(sortedMessages);
          if (sortedMessages.length > 0) {
            handleNewMessage();
          }
        }
        else {
          console.log("No messages with roomid found");
        }
      });
    } catch (error) {
      console.error("Error in loadmessage:", error);
    }
  };

  const userRoom = async () => {
    try {
      const loggedUser = JSON.parse(await AsyncStorage.getItem("user"));
      const loggedUserid = loggedUser._id;
      setUserid(loggedUserid);
      setUserUsername(loggedUser.username);
      // setExpoPushToken(data.token);
      const msgUser = data._id;

      let roomid = "";
      if (loggedUserid > msgUser) {
        roomid = loggedUserid + msgUser;
      } else {
        roomid = msgUser + loggedUserid;
      }
      setRoomid(roomid);
      // console.log(roomid, "roomid");
      loadmessage();
    } catch (error) {
      console.error("Error in userRoom:", error);
    }
  };

  
  const sendMessage = () => {
    if (text.trim() === '') return;

    const newMessageRef = firebase.database().ref('messages').push();
    newMessageRef.set({
      text,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
    setText('');
  };

  const renderItem = ({item}) => (
    <View style={{padding: 10}}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{flex: 1, height: 40, borderWidth: 1, padding: 10}}
          placeholder="Type your message here"
          value={text}
          onChangeText={setText}
        />
        {/* <Button title="Send" onPress={sendMessage} /> */}
        <Button title="Send" onPress={chatRoom} />
      </View>
    </View>
  );
};

export default ChatScreen;
