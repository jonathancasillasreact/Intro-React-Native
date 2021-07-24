import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const en = () => {
    return (
        <View style={styles.conteiner} >
            <Text style={styles.caja1} >Caja 1</Text>
            <Text style={styles.caja2} >Caja 2</Text>
            <Text style={styles.caja3} >Caja 3</Text>
        </View>
    )
}

export default en;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#28C4D9',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        

    },


    caja1: {
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
    },
    caja2: {
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
    },
    caja3: {
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
    },

})
