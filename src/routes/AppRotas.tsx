import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../src/pages/Login';


const Navegacao =  createStackNavigator();

const AppRotas: React.FC = () => (
    <Navegacao.Navigator 
       initialRouteName="Login"
       headerMode='none'
    >
        <Navegacao.Screen component={Login} name="Login"/>

    </Navegacao.Navigator>
)

export default AppRotas;