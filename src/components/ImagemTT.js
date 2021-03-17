import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class ImagemTT extends Component {
    render(){
         

       
        let imagem = 'https://st.depositphotos.com/1144687/1717/i/600/depositphotos_17177253-stock-photo-open-book.jpg'
        return(
            <View style={style.container}>
                <Image
                    source={{uri: imagem}}
                    style={{ width: this.props.largura, height: this.props.altura , alignItems:this.props.alinha}}
                    
                />
                
            </View>
        )

    }
}

export default ImagemTT;

const style = StyleSheet.create({
    container:{
        height: 45,
        borderColor: 'red',
        fontSize: 20,
        padding: 10,
        margin: 100,
        justifyContent : 'center'
        
    }
})