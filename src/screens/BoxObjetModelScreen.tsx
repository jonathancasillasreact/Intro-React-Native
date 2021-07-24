import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjetModelScreen = () => {
    return (
        <View style={styles.conteiner} >
            <Text style={styles.title} >Box Objet Model</Text>
        </View>
    )
}

export default BoxObjetModelScreen;

const styles = StyleSheet.create({

    conteiner: {
        flex: 1,
        backgroundColor: 'red',
    },

    title: {
        padding: 50,
        fontSize: 20,
        // width: 250,
        borderWidth: 10,
        marginHorizontal: 20,
        // backgroundColor: 'blue',
    }
});

