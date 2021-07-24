import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tarea02Screen = () => {
    return (
        <View style={styles.conteiner} >
            <View style= {styles.cajaMorada} />
            <View style= {styles.cajaNaranja} />
            <View style= {styles.cajaAzul } />
        </View>
    )
}

export default Tarea02Screen;

const styles = StyleSheet.create({

    conteiner: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
    },

    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {

        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#28C4D9',

    }
    
})
