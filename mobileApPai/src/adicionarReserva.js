import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';


export default class AdicionarReserva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null, 
            nome: null, 
            numeroCliente: null,
            qtHamburguer: null,
            qtPizza: null,
            qtCachorroQuente: null,
            qtSuco: null,
            qtCrepe: null,
            qtGarcon: null,
            local: null,
            qtBatataFrita: null,
            qtSalgados: null,
            qtRefrigerante: null,
            qtBobo: null,
            qtRisotoPato: null,
            qtRisotoCarneiro: null,
            qtEstrogonofeCarne: null,
            qtEstrogonofeFrango: null,
            qtEscondidinhoCarne: null
        };
    }
    static navigationOptions = navigation => ({
        title: 'Adicionando reserva'
    })

    
    render() {
        return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.dados}>
                    <TextInput 
                        placeholder='Cliente' 
                        returnKeyType={'next'}
                        onSubmitEditing={() => { this.numeroCliente.focus() }}
                        value={this.state.nome}
                        onChangeText={e => this.setState({nome: e})}
                        />
                    <TextInput 
                        placeholder='Número cliente'
                        ref={ input => {this.numeroCliente = input }}
                        returnKeyType={'next'}
                        onSubmitEditing={() => {this.local.focus()}}
                        value={this.state.numeroCliente}
                        onChangeText={e => this.setState({numeroCliente: e})}
                        />
                    <TextInput 
                        placeholder='Local'
                        ref={ input => {this.local = input }}
                        value={this.state.local}
                        onChangeText={e => this.setState({local: e})}
                        />
                    <DatePicker
                        style={{width: 300, marginBottom: 5,}}
                        date={this.state.data}
                        mode="datetime"
                        placeholder="Data evento"
                        format="DD-MM-YYYY"
                        minDate="01-01-2019"
                        maxDate="01-01-2020"
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        showIcon={false}
                        onDateChange={(date, data) => {
                            this.setState({data})
                            }
                        }
                    />
                    
                </View>
                <Text style={styles.txt}>Quantidade</Text>
                <View style={styles.viewQt}>
                    <TextInput 
                        placeholder='Hamburguer' 
                        keyboardType='numeric' 
                        returnKeyType= {'next'}
                        onSubmitEditing={() => { this.pizza.focus() }}
                        value={this.state.qtHamburguer}
                        onChangeText={e => this.setState({qtHamburguer: e})}
                    />
                    <TextInput 
                        placeholder='Pizza' 
                        keyboardType='numeric'
                        ref={(input) => { this.pizza = input; }}
                        returnKeyType= {'next'}
                        onSubmitEditing={() => { this.cQ.focus() }}
                        value={this.state.qtPizza}
                        onChangeText={e => this.setState({qtPizza: e})}
                    />
                    <TextInput 
                        placeholder='Cachorro Quente' 
                        keyboardType='numeric' 
                        ref={(input) => { this.cQ = input; }}
                        returnKeyType= {'next'}
                        onSubmitEditing={() => { this.sC.focus() }}
                        value={this.state.qtCachorroQuente}
                        onChangeText={e => this.setState({qtCachorroQuente: e})}
                    />
                    <TextInput 
                        placeholder='Suco' 
                        keyboardType='numeric' 
                        ref={(input) => { this.sC = input; }}
                        returnKeyType= {'next'}
                        onSubmitEditing={() => {this.crepe.focus()}}
                        value={this.state.qtSuco}
                        onChangeText={e => this.setState({qtSuco: e})}
                    />
                    <TextInput 
                        placeholder='Crepe' 
                        keyboardType='numeric' 
                        ref={ input => { this.crepe = input}}
                        returnKeyType = {'next'}
                        onSubmitEditing = { () => this.garcom.focus()}
                        value={this.state.qtCrepe}
                        onChangeText={e => this.setState({qtCrepe: e})}
                    />
                    <TextInput 
                        placeholder='Garçom' 
                        keyboardType='numeric' 
                        returnKeyType = {'next'}
                        ref = { input => this.garcom = input}
                        onSubmitEditing = { () => this.batata.focus()}
                        value={this.state.garcom}
                        onChangeText={e => this.setState({qtGarcon: e})}
                    />
                    <TextInput 
                        placeholder='Batata frita' 
                        keyboardType='numeric'
                        returnKeyType={'next'}
                        ref={ input =>{ this.batata = input}}
                        onSubmitEditing = { () => this.salgado.focus()}
                        value={this.state.qtBatataFrita}
                        onChangeText = { e => this.setState({qtBatataFrita: e})}
                    />
                    <TextInput 
                        placeholder='Salgados'
                        keyboardType='numeric'
                        returnKeyType={'next'}
                        ref={ input =>{ this.salgado = input}}
                        onSubmitEditing = { () => this.refrigerante.focus()}
                        value={this.state.qtSalgados}
                        onChangeText = { e => this.setState({qtSalgados: e})}
                    />
                    <TextInput 
                        placeholder='Refrigerante' 
                        keyboardType='numeric'
                        returnKeyType={'next'}
                        ref={ input =>{ this.refrigerante = input}}
                        onSubmitEditing = { () => this.bobo.focus()}
                        value={this.state.qtRefrigerante}
                        onChangeText = { e => this.setState({qtRefrigerante: e})}
                    />
                </View>
                <Text style={styles.txt}>Entradas</Text>
                <View style={styles.viewQt}>
                        <TextInput 
                            placeholder='Bobó de camarão' 
                            keyboardType='numeric'
                            returnKeyType={'next'}
                            ref={ input =>{ this.bobo = input}}
                            onSubmitEditing = { () => this.risotoPato.focus()}
                            value={this.state.qtBobo}
                            onChangeText = { e => this.setState({qtBobo: e})}
                        />
                        <TextInput 
                            placeholder='Risoto de pato' 
                            keyboardType='numeric'
                            returnKeyType={'next'}
                            ref={ input =>{ this.risotoPato = input}}
                            onSubmitEditing = { () => this.risotoCarneiro.focus()}
                            value={this.state.qtRisotoPato}
                            onChangeText = { e => this.setState({qtRisotoPato: e})}
                        />
                        <TextInput 
                            placeholder='Risoto de carneiro' 
                            keyboardType='numeric'
                            returnKeyType={'next'}
                            ref={ input =>{ this.risotoCarneiro = input}}
                            onSubmitEditing = { () => this.estrogonofeCarne.focus()}
                            value={this.state.qtRisotoCarneiro}
                            onChangeText = { e => this.setState({qtRisotoCarneiro: e})}
                        />
                        <TextInput 
                            placeholder='Estrogonofe de carne' 
                            keyboardType='numeric'
                            returnKeyType={'next'}
                            ref={ input =>{ this.estrogonofeCarne = input}}
                            onSubmitEditing = { () => this.estrogonofeFrango.focus()}
                            value={this.state.qtEstrogonofeCarne}
                            onChangeText = { e => this.setState({qtEstrogonofeCarne: e})}
                        />
                        <TextInput 
                            placeholder='Estrogonofe de frango' 
                            keyboardType='numeric'
                            returnKeyType={'next'}
                            ref={ input =>{ this.estrogonofeFrango = input}}
                            onSubmitEditing = { () => this.escondidinho.focus()}
                            value={this.state.qtEstrogonofeFrango}
                            onChangeText = { e => this.setState({qtEstrogonofeFrango: e})}
                        />
                        <TextInput 
                            placeholder='Escondidinho de carne' 
                            keyboardType='numeric'
                            returnKeyType={'done'}
                            ref={ input =>{ this.escondidinho = input}}
                            value={this.state.qtEscondidinhoCarne}
                            onChangeText = { e => this.setState({qtEscondidinhoCarne: e})}
                        />
                </View>
                <View style={styles.viewBt}>
                <TouchableHighlight 
                    style={styles.btn}
                    onPress={() => {
                        axios.post(`https://agendapai.herokuapp.com/reservas`, 
                        { 
                            cliente: this.state.nome,
                            numeroCliente: this.state.numeroCliente,
                            data: this.state.data,
                            local: this.state.local,
                            qtHamburguer: this.state.qtHamburguer,
                            qtPizza: this.state.qtPizza,
                            qtCachorroQuente: this.state.qtCachorroQuente,
                            qtSuco: this.state.qtSuco,
                            qtCrepe: this.state.qtCrepe,
                            qtGarcon: this.state.qtGarcon,
                            qtBatataFrita: this.state.qtBatataFrita,
                            qtSalgados: this.state.qtSalgados,
                            qtRefrigerante: this.state.qtRefrigerante,
                            qtBobo: this.state.qtBobo,
                            qtRisotoPato: this.state.qtRisotoPato,
                            qtRisotoCarneiro: this.state.qtRisotoCarneiro,
                            qtEstrogonofeCarne: this.state.qtEstrogonofeCarne,
                            qtEstrogonofeFrango: this.state.qtEstrogonofeFrango,
                            qtEscondidinhoCarne: this.state.qtEscondidinhoCarne 
                        }).then(res => {
                            Alert.alert('Sucesso', 'Reserva adicionada')
                        }).catch(erro => {
                            Alert.alert("Erro", erro)
                        })
                        this.props.navigation.goBack()
                    }}
                    >
                    <Text>Adicionar</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.btn}
                    onPress={() => this.props.navigation.goBack()}
                    >
                    <Text>Cancelar</Text>
                </TouchableHighlight>
            </View>
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
    },
    container:{
        flex: 1,
        height: '90%'
    },
    dados:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBt:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        height: 40
    },
    btn:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: '100%',
        backgroundColor: '#2196F3'
    },
    txt:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
})