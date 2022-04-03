import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,Text, View } from 'react-native'
import MyStack from './navigation';

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});