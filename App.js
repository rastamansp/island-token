
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BoasVindas from './src/screens/BoasVindas';
import TeladeLogin from './src/screens/TeladeLogin';
import TelaContas from './src/screens/TelaContas';
import CadastroScreen from './src/screens/Cadastro';
import EnviarDocumentoScreen from './src/screens/EnviarDocumentos';
import AjudaScreen from './src/screens/Ajuda';
import EsqueciMinhaSenha from './src/screens/EsqueciMinhaSenha';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contas" component={TelaContas} />
      <Stack.Screen name="EnviarDoc" component={EnviarDocumentoScreen} />
    </Stack.Navigator>
  );
};

const MenuBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Extrato') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Transacoes') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Produtos') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={BoasVindas} />
      <Tab.Screen name="Extrato" component={AppStack} />
      <Tab.Screen name="Transacoes" component={TelaContas} />
      <Tab.Screen name="Produtos" component={CadastroScreen} />
      <Tab.Screen name="Ajuda" component={AjudaScreen} />
      <Tab.Screen name="Login" component={TeladeLogin} />
      <Tab.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />

    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MenuBottom />
    </NavigationContainer>
  );
};

export default App;
