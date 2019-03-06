import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import axios from 'axios'

export default class Reserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserva: {}
        };
    }
    componentDidMount(){
        const reserva = this.props.navigation.getParam('reserva')
        this.setState({reserva})
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('nome'),
    })
    render() {
        const dataCompleta = new Date(this.state.reserva.data)
        const diaSemana = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <Text style={styles.txtText}>Numero: {this.state.reserva.numeroCliente}</Text>
                    <Text style={styles.txtText}>Data: {dataCompleta.getDate() < 10 ? '0'+dataCompleta.getDate():dataCompleta.getDate()}/{dataCompleta.getMonth() < 10 ? '0'+dataCompleta.getMonth():dataCompleta.getMonth()}/{dataCompleta.getFullYear()}</Text>
                    <Text style={styles.txtText}>Dia da semana: {diaSemana[dataCompleta.getDay()]}</Text>
                    <Text style={styles.txtText}>Horário da festa: {dataCompleta.getHours() < 10 ? '0' + dataCompleta.getHours():dataCompleta.getHours()}:{dataCompleta.getMinutes() < 10 ? '0'+dataCompleta.getMinutes():dataCompleta.getMinutes()}</Text>
                    <Text style={styles.txtText}>Local: {this.state.reserva.local}</Text>
                </View>
                <Text style={
                        {
                            fontWeight: 'bold',
                            fontSize: 20,
                            textAlign: 'center',
                        }
                    }
                        >Quantidades</Text>
                <View style={styles.viewQt}>
                    <Text style={styles.txtText}>Hamburguer: {this.state.reserva.qtHamburguer}</Text>
                    <Text style={styles.txtText}>Pizza: {this.state.reserva.qtPizza}</Text>
                    <Text style={styles.txtText}>Cachorro Quente: {this.state.reserva.qtCachorroQuente}</Text>
                    <Text style={styles.txtText}>Suco: {this.state.reserva.qtSuco}</Text>
                    <Text style={styles.txtText}>Crepe: {this.state.reserva.qtCrepe}</Text>
                    <Text style={styles.txtText}>Garçom: {this.state.reserva.qtGarcon}</Text>
                </View>
                <TouchableHighlight 
                    style={styles.button}
                    onPress={()=>{
                        Alert.alert('Remover', 'Confirmar remoção',[
                            {text: 'Confirmar', onPress: () => {
                                axios.delete(`http://10.0.2.2:3000/delete/${this.state.reserva._id}`)
                                this.props.navigation.goBack()
                            }},
                            {text: 'Cancelar',style: 'cancel', }
                        ]
                        )
                    }}
                    >
                    <Text style={{color: 'white', fontSize: 25}}>Remover</Text>
                </TouchableHighlight>
            </View>
        );
  }
}


const styles = StyleSheet.create({
    viewQt: {
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderStyle: 'dashed'
    },
    container:{
        flex: 1,
    },
    txtText:{
        fontSize: 20,
        marginLeft: 10
    },
    viewTop:{
        marginVertical: 20,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6961',
        width: '100%',
        height: 50
    }
})