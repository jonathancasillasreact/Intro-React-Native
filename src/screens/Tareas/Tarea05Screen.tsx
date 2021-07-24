import React from 'react'
import { StyleSheet,  View } from 'react-native'

const Tarea05Screen = () => {
    return (
        <View style={styles.conteiner} >
            <View style= {styles.cajaMorada} />
            <View style= {styles.cajaNaranja} />
            <View style= {styles.cajaAzul } />
        </View>
    )
}

export default Tarea05Screen;

const styles = StyleSheet.create({

    conteiner: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#28425B',
        justifyContent: 'space-between',
    },

    cajaMorada: {
        width: 100,

        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        width: 100,

        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        width: 100,

        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#28C4D9'
    }
    
})
