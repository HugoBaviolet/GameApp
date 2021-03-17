import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGame from './screens/StartGame';

export default function App() {
  return (
    <View stlye={styles.screen}>
      <Header title="Guess a number"/>

      <StartGame />

    </View>
  )
};

const styles = StyleSheet.create({
  screen:{
    
  }
  });
