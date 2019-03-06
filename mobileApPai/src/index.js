import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import ListaReserva from './listarReserva';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'
import socket from 'socket.io-client'



export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state =  { 
            reservas:[]
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Agenda',
    })
    
    async componentDidMount(){
        axios.get(`http://10.0.2.2:3000/reservas`).then(res=>{
            const reservas = res.data
            this.setState({reservas})
        }).catch(erro => { alert(erro)})
        this.subscribeToEvent()
    }

    subscribeToEvent = () => {
        const io = socket('http://10.0.2.2:3000')

        io.on('reserva', data => {
            axios.get(`http://10.0.2.2:3000/reservas`).then(res=>{
            const reservas = res.data
            this.setState({reservas})
        }).catch(erro => { alert(erro)})
        })


        io.on('reservaApagada', data => {
            axios.get(`http://10.0.2.2:3000/reservas`).then(res=>{
            const reservas = res.data
            this.setState({reservas})
        }).catch(erro => {alert(erro)})
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
                <View style={{flex: 1}}>
                    <TouchableHighlight
                        onPress={()=> this.props.navigation.push('adicionarReserva')}
                        style={styles.btnAdc}
                    >
                        <Text>Adicionar</Text>
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
        backgroundColor: '#2196F3'
    }
})