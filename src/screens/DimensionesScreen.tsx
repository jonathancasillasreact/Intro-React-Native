import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';



const DimensionesScreen = () => {


    //Hook de React native para diseños resposivos 
    const { width, height } =  useWindowDimensions();

    return (

        <View>
        <View style={styles.conteiner} >

            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
        </View>
                <Text style={styles.title } >W: {width}  </Text>
                <Text style={styles.title} >H: {height} </Text>
        </View>

)}

export default DimensionesScreen;

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },

    cajaMorada: {
        width: '50%',
        height: '50%',
        backgroundColor: '#5856D6',
    },

    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
    }
});
