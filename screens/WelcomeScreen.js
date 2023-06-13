import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View >
      <Image
        style={styles.logo}
        source={ require("../assets/little-lemon-logo.png") }
      />
      <Text style={styles.textStyle}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable onPress={ () => navigation.navigate("Subscribe") }>
        <Text style={styles.buttonStyle}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  logo : {
    marginTop : 50,
    marginLeft : 90,
    height: 300,
    width: 200,
    resizeMode: "contain"
  },
  textStyle : {
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    fontSize: 19,
    fontWeight: "bold",
    backgroundColor : "lightgreen", 
    borderRadius : 5,
    textAlign: 'center'
  },
  buttonStyle : {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "olive",
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  }
})