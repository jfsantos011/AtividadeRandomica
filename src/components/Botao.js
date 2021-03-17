import React, { Component } from 'react';
import { Alert, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Botao = props => {
    return(
        <View style={styles.areaImg}>
            <TouchableOpacity onPress={props.geraNovaFrase} style={styles.botao}>
                <Text style={styles.button}>Abrir frase do dia</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    areaImg: {
        flex:7,
        alignItems: 'center',
        
    },

    botao: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 400,
        borderRadius: 5
    },

    textoBotao: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderColor : 'red',
        borderWidth: 1,
      }

});

export default Botao;