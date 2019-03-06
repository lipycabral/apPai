import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class ListarReserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const {reserva} = this.props
        const dataCompleta = new Date(reserva.data)
        const diaSemana = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
        return (
            <View style={styles.item}>
                <Text>Cliente: {reserva.cliente}</Text>
                <Text>Data: {dataCompleta.getDate() < 10 ? '0'+dataCompleta.getDate():dataCompleta.getDate()}/{dataCompleta.getMonth() < 10 ? '0'+dataCompleta.getMonth():dataCompleta.getMonth()}/{dataCompleta.getFullYear()}</Text>
                <Text>Dia da semana: {diaSemana[dataCompleta.getDay()]}</Text>
                <Text>Horário da festa: {dataCompleta.getHours() < 10 ? '0' + dataCompleta.getHours():dataCompleta.getHours()}:{dataCompleta.getMinutes() < 10 ? '0'+dataCompleta.getMinutes():dataCompleta.getMinutes()}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item:{
        borderColor: 'black',
        borderWidth: 0.5,
        marginVertical: 1,        
    }
})