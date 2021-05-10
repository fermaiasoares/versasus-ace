import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../src/pages/Login';
import Home from '../../src/pages/Home';



const Navegacao =  createStackNavigator();

const AppRotas: React.FC = () => (
    <Navegacao.Navigator 
       initialRouteName="Home"
       headerMode='none'
    >
        <Navegacao.Screen component={Login} name="Login"/>
        <Navegacao.Screen component={Home} name="Home" />

    </Navegacao.Navigator>
)

export default AppRotas;