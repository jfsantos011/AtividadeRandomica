import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class ImagemTT extends Component {
    render(){
         

       
        let imgBookOpen = './img/LVAberto.png',
            imgBookClose = './img/LVFechado.png'
        return(
            <View style={style.container}>
                <Image
                
                    source={{
                        uri: this.state.aberto
                          ? this.state.imgBookOpen
                          : this.state.imgBookClose,
                      }}
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