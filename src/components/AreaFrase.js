import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AreaFrase = props => {
    return (
        <View style={styles.areaFrase}>
            <Text style={styles.textoEstilo}>{props.frase}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    areaFrase: {
        flex: 7,
        alignItems: 'center'

    },

    textoEstilo: {
        marginTop: 130,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },


});

export default AreaFrase;