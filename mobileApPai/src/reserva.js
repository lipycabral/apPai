import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert, ScrollView } from 'react-native';
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
        const vh = this.state.reserva.qtHamburguer*2.0
        const vp = this.state.reserva.qtPizza*1.5
        const vcq = this.state.reserva.qtCachorroQuente*1.5
        const vc = this.state.reserva.qtCrepe * 3
        const vs = this.state.reserva.qtSuco * 8
        const vg = this.state.reserva.qtGarcon * 100
        const vbtf = this.state.reserva.qtBatataFrita * 1.5
        const vsal = this.state.reserva.qtSalgados * 30
        const vr = this.state.reserva.qtRefrigerante
        const vt = vh+vp+vcq+vc+vs+vg+vbtf+vsal+vr
        const diaSemana = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.viewTop}>
                    <Text style={styles.txtText}>Numero: {this.state.reserva.numeroCliente}</Text>
                    <Text style={styles.txtText}>Data: {dataCompleta.getDate() < 10 ? '0'+dataCompleta.getDate():dataCompleta.getDate()}/{dataCompleta.getMonth() < 10 ? '0'+(dataCompleta.getMonth()+1):dataCompleta.getMonth()+1}/{dataCompleta.getFullYear()}</Text>
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
                        >Quantidade comidinhas</Text>
                <View style={styles.viewQt}>
                    <Text style={styles.txtText}>Hamburguer: {this.state.reserva.qtHamburguer > 0 ? this.state.reserva.qtHamburguer:0} - R${vh}</Text>
                    <Text style={styles.txtText}>Pizza: {this.state.reserva.qtPizza > 0 ? this.state.reserva.qtPizza : 0} - R${vp} </Text>
                    <Text style={styles.txtText}>Cachorro Quente: {this.state.reserva.qtCachorroQuente > 0 ? this.state.reserva.qtCachorroQuente : 0} - R${vcq}</Text>
                    <Text style={styles.txtText}>Suco: {this.state.reserva.qtSuco > 0 ? this.state.reserva.qtSuco:0} - R${vs}</Text>
                    <Text style={styles.txtText}>Crepe: {this.state.reserva.qtCrepe > 0 ? this.state.reserva.qtCrepe:0} - R${vc}</Text>
                    <Text style={styles.txtText}>Garçom: {this.state.reserva.qtGarcon > 0 ? this.state.reserva.qtGarcon: 0} - R${vg}</Text>
                    <Text style={styles.txtText}>Batata Frita: {this.state.reserva.qtBatataFrita > 0 ? this.state.reserva.qtBatataFrita: 0} - R${vbtf}</Text>
                    <Text style={styles.txtText}>Salgados: {this.state.reserva.qtSalgados > 0 ? this.state.reserva.qtSalgados: 0} - R${vsal}</Text>
                    <Text style={styles.txtText}>Refrigerante: {this.state.reserva.qtRefrigerante > 0 ? this.state.reserva.qtRefrigerante: 0} - R${vr}</Text>
                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    textAlign: 'center',
                    marginVertical: 5
                }}>Total - R${vt}</Text>
                <Text style={
                        {
                            fontWeight: 'bold',
                            fontSize: 20,
                            textAlign: 'center',
                        }
                    }
                        >Quantidade entradinhas</Text>
                <View style={[styles.viewQt, {marginBottom: 50}]}>
                    <Text style={styles.txtText}>Bobó de camarão: {this.state.reserva.qtBobo > 0 ? this.state.reserva.qtBobo: 0}</Text>
                    <Text style={styles.txtText}>Risoto de pato: {this.state.reserva.qtRisotoPato > 0 ? this.state.reserva.qtRisotoPato: 0}</Text>
                    <Text style={styles.txtText}>Risoto de carneiro: {this.state.reserva.qtRisotoCarneiro > 0 ? this.state.reserva.qtRisotoCarneiro: 0}</Text>
                    <Text style={styles.txtText}>Estrogonofe Carne: {this.state.reserva.qtEstrogonofeCarne > 0 ? this.state.reserva.qtEstrogonofeCarne: 0}</Text>
                    <Text style={styles.txtText}>Estrogonofe Frango: {this.state.reserva.qtEstrogonofeFrango > 0 ? this.state.reserva.qtEstrogonofeFrango: 0}</Text>
                    <Text style={styles.txtText}>Escondidinho Carne: {this.state.reserva.qtEscondidinhoCarne > 0 ? this.state.reserva.qtEscondidinhoCarne: 0}</Text>
                </View>
                
                <TouchableHighlight 
                    style={styles.button}
                    onPress={()=>{
                        Alert.alert('Remover', 'Confirmar remoção',[
                            {text: 'Confirmar', onPress: () => {
                                axios.delete(`https://agendapai.herokuapp.com/delete/${this.state.reserva._id}`)
                                this.props.navigation.goBack()
                            }},
                            {text: 'Cancelar',style: 'cancel', }
                        ]
                        )
                    }}
                    >
                    <Text style={{color: 'white', fontSize: 25}}>Remover</Text>
                </TouchableHighlight>
                </ScrollView>
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