import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imgIndex: 0,
      phraseIndex: 0,
      images: [
        'https://cdn.pensador.com/img/imagens/pa/ul/paulo_vanzolini_levanta_sacode_a_poeira_da_volta_por_cima_1.jpg',
        'https://cdn.pensador.com/img/imagens/ne/mt/nem_todos_os_dias_sao_bons_mas_ha_algo_bom.jpg',
        'https://cdn.pensador.com/img/imagens/ma/rt/martin_luther_king_suba_primeiro_degrau_com_fe.jpg',
        'https://cdn.pensador.com/img/imagens/to/da/toda_manha_voce_tem_duas_escolhas_continuar_dormindo.jpg',
        'https://cdn.pensador.com/img/imagens/fr/as/frases_positivas_para_o_dia_1.jpg',
        'https://cdn.pensador.com/img/imagens/fr/as/frases_positivas_para_o_dia_2_0.jpg'
      ],
      phrases: [
        'Enfrente os problemas e leve a melhor!',
        'Dê mais atenção ao que você tem de bom na sua vida!',
        'Para chegar ao topo, o que importa é começar!',
        'De nada adianta ter sonhos, se você não se empenhar em correr atrás',
        'Preste atenção nas oportunidades que estão à sua frente!',
        'Positividade para começar o dia é colocar a sua fé em prática'
      ]
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.images[this.state.imgIndex] }}
          style={styles.image}
        />

        <Text style={styles.phrase}>{this.state.phrases[this.state.phraseIndex]}</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setState({
              ...this.state,
              imgIndex: Math.floor(Math.random() * (6 + 1)),
              phraseIndex: Math.floor(Math.random() * (6 + 1))
            })
          }}
        >
          <Text style={styles.btnText}>Abrir frase do dia</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 4
  },
  phrase: {
    marginVertical: 16
  },
  button: {
    width: 300,
    height: 30,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 8,
    paddingVertical: 5
  },
  btnText: {
    textAlign: 'center'
  }
});