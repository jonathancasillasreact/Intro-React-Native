import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tarea09Screen = () => {
    return (
        <View style={styles.conteiner} >
            <View style= {styles.cajaMorada} />
            <View style= {styles.cajaNaranja} />
            <View style= {styles.cajaAzul } />
        </View>
    )
}

export default Tarea09Screen;

const styles = StyleSheet.create({

    conteiner: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        ...StyleSheet.absoluteFillObject
    },

    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#5856D6',
        top: 100,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#F0A23B',
        left: 100,
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#28C4D9'
    }
    
})
