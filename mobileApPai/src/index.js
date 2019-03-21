import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, YellowBox } from 'react-native';
import ListaReserva from './listarReserva';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'
import socket from 'socket.io-client'
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);


export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state =  { 
            reservas:[]
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'TioSan Eventos',
    })
    async handleAtt(){
        axios.get(`https://agendapai.herokuapp.com/reservas`)
        .then( res => {
            const reservasLista = res.data
            this.setState({reservas: reservasLista})
        })
    }
    async componentDidMount(){
        this.subscribeToEvent()
        this.handleAtt()
    }

    subscribeToEvent = () => {
        const io = socket('https://agendapai.herokuapp.com/reservas/')
        io.on('reserva', () => {
            this.handleAtt()
        })
        io.on('reservaApagada', () => {
            this.handleAtt()
        })            
    }

    

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 9}}>
                    <ScrollView>
                        {this.state.reservas.map(reserva =>(
                            <TouchableHighlight key={reserva._id} onPress={() => {
                                this.props.navigation.push('reserva', {id: reserva._id, nome: reserva.cliente, reserva})
                                }}>
                                <ListaReserva reserva={reserva} />
                            </TouchableHighlight>
                        ))}
                    </ScrollView>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableHighlight
                        onPress={()=> this.props.navigation.push('adicionarReserva')}
                        style={styles.btnAdc}
                    >
                        <Text style={styles.txt}>Adicionar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => 
                            this.handleAtt()
                        }
                        style={styles.btnAtt}
                    >
                        <AntDesign name='sync' size={24} color='white' />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item:{
        flex: 1,
        borderColor: 'black',
        borderWidth: 0.5,
        marginVertical: 1,        
    },
    btnAdc: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: '100%',
        width: '80%',
        backgroundColor: '#2196F3'
    },
    btnAtt: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: '100%',
        width: '20%',
        backgroundColor: '#2196F3'
    },
    txt:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})