import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const PositionScreen = () => {

    const {width, height} = useWindowDimensions()

    return (
        <View style={styles.container} >
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}

export default PositionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 400,
        // width: 400,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center',

    },

    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: '#FFF',
        position: 'absolute',
        top: 0,
        right: 0,
        
    },

    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: '#FFF',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right:0,
        // top: 0,
        ...StyleSheet.absoluteFillObject,
    },
    
    

});
