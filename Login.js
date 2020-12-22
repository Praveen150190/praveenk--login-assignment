import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';


//import custom input components
import CustomButton from "./CustomButton";

//get screen size
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Login = () => {
  const [myUsername, setMyUsername] = useState(null); //local state
  const [myPassword, setMyPassword] = useState(null); //local state
  const [myProducts, setProducts] = useState([]);


  const changeMyPassword = pwd => {
    setMyPassword(pwd);
  };

  const changeMyUsername = user => {
    setMyUsername(user);
  };

  const resetInputHandler = () => {
    setMyUsername("");
    setMyPassword("");
  };

  const listViewHandler = () => {
    setProducts([
        {id:1, name: 'product 1', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'},
        {id:2, name: 'product 2', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'},
        {id:3, name: 'product 3', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}
    ])
  }

  const confirmInputHandler = user => {
    console.log(myUsername);
    console.log(myPassword);
  };

  useEffect(() => {
    console.log("useEffect has been called!");
  }, [myUsername, myPassword, myProducts]); //Değeri değişenler olduğunda çalışacak




  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView style={{flex:1,width:'100%'}}>
      <View style={styles.container}>
        <TextInput
            maxLength={11}
            keyboardType="number-pad"
            style={styles.input}
            placeholder="Username"
            // multiline="false"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={changeMyUsername}
        />

        <TextInput
            maxLength={11}
            keyboardType="number-pad"
            style={styles.input}
            placeholder="Password"
            // multiline="false"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={changeMyPassword}
        />
      
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton title="Login" onPress={confirmInputHandler} />
          </View>
          <View style={styles.button}>
            <CustomButton title="Reset" onPress={resetInputHandler} />
          </View>
          <View style={styles.button}>
            <CustomButton title="Show Products" onPress={listViewHandler} />
          </View>
        </View>

        <View>
            
                <Card>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider/>
                {
                  myProducts.map((u, i) => {
                    return (
                      <View key={i} style={styles.product}>
                        <Image
                          style={styles.image}
                          resizeMode="cover"
                          source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                      </View>
                    );
                  })
                }
              </Card>
            
        </View>
        <View>
            {
               myProducts.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
         

      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  product: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    marginTop: 10
  },
  input: {
    width: 200,
    height:50,
    marginVertical:10,
    textAlign: "center",
    borderColor: "red",
    borderWidth: 2,
    fontSize: 20
  }
});

export default Login;