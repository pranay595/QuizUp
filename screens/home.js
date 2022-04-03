import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from '../components/title'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title titleText='QuizUp'/>
            <View style={styles.atCenter}>
                <Image source={require('../images/quiz.png')}
                    style={styles.banner}
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    atCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#8785A2',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    }
});