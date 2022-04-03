import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Title from '../components/title';

const Result = ({ navigation, route }) => {
  const { score } = route.params
  const greatPath = "../images/correct.png";
  const tryAgainPath = "../images/incorrect.png";
  console.log(score);

  // console.log(params);
  if(score>50){
  return (
    <View style={styles.container}>
        <Title titleText='RESULT' />
        <Text style={styles.scoreValue}>
          {score}
        </Text>
        <View style={styles.atCenter}>
        
          <Image source={require(greatPath)}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
  )}
  else{
    return (
      <View style={styles.container}>
          <Title titleText='RESULT' />
          <Text style={styles.scoreValue}>
            {score}
          </Text>
          <View style={styles.atCenter}>
          
            <Image source={require(tryAgainPath)}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>GO TO HOME</Text>
          </TouchableOpacity>
        </View>
    )}
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  atCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    backgroundColor: '#8785A2',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    maxWidth: '45%',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center'
  }
});