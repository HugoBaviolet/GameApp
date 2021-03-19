import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from '../components/MainButton';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      
      </View>
      <View style = {styles.resultContainer}>
      <BodyText style = {styles.resultText}>
        The phone took <Text style={styles.highlight}>{props.roundNumber} </Text>
        rounds to guess the number<Text style={styles.highlight}> {props.userNumber}</Text>.
      </BodyText>

      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
      marginHorizontal: 30,
      marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  }
});

export default GameOver;
