import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ImagemTT from './src/components/ImagemTT';
import AreaFrase from './src/components/AreaFrase';
import Botao from './src/components/Botao';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      frase: ''
    };
    this.geraNovaFrase = this.geraNovaFrase.bind(this);
  }

  geraNovaFrase() {

    let numRandom = Math.random();
    numRandom = Math.floor(numRandom * 5);

    var frases = Array();
    frases[0] = '"Enfrente os problemas e leve a melhor!"';
    frases[1] = '"Dê mais atenção ao que você tem de bom na sua vida"';
    frases[2] = '"Para chegar ao topo, o que importa é começar!"';
    frases[3] = '"De nada adianta ter sonhos, se você não se empenhar em correr atrás"';
    frases[4] = '"Preste atenção nas oportunidades que estão à sua frente!"';

    let fraseEscolhida = frases[numRandom];

    this.setState({ frase: fraseEscolhida });


  }

  render() {
    return (
      <View style={{
        backgroundColor: 'white',
        marginItens: 100,
        alignItems: 'center'
      }}>


        <AreaFrase
          frase={this.state.frase}
        />
        <ImagemTT img={this.state.img}
          largura={400}
          altura={200}
          alinha={'center'}
        />

        <Botao
          style={styles.bottun}
          geraNovaFrase={this.geraNovaFrase}
          onPress={this.enviar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  img: {
    alignItems: 'center',
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },


})