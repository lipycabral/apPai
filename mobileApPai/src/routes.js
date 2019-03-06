import Principal from './index'
import Reserva from './reserva';

import { createStackNavigator, createAppContainer} from 'react-navigation'
import AdicionarReserva from './adicionarReserva';

const StackNavigator = createStackNavigator({
    principal: Principal,
    reserva: Reserva,
    adicionarReserva: AdicionarReserva
    
},{
    initialRouteName: 'principal'
})

export default createAppContainer(StackNavigator)