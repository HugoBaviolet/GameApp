import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });
};

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return (
    <AppLoading startAsync={fetchFonts} 
    onFinish ={() => setDataLoaded(true)} 
    onError = {(err) => console.log(err)}
    />
    );
  }

  const configNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

const startGameHandler = (selectedNumber) => {
  setUserNumber(selectedNumber);
  setGuessRounds(0);
};

const gameOverHandler = numOfRounds =>{
  setGuessRounds(numOfRounds);
}

let content = <StartGame onStartGame = {startGameHandler} />;

if (userNumber && guessRounds <= 0){
  content = <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler}/>
} else if (guessRounds > 0){
  content = <GameOver roundNumber = {guessRounds} userNumber ={userNumber} onRestart={configNewGame}/>;
}

  return (
    <View stlye={styles.screen}>
      <Header title="Guess a number" />
      {content}
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
