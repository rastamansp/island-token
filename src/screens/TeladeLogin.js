import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const TeladeLogin = ({ navigation, setIsAuthenticated }) => {
  const [email, setEmail] = useState('pedro.hp.almeida@gmail.com');
  const [senha, setSenha] = useState('senha');

  const handleLogin = async () => {
    // Verifica se os campos de email e senha foram preenchidos
    if (!email || !senha) {
      alert('Por favor preencha todos os campos');
      return;
    }

    try {
      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: senha
        })
      };

      /**
      // Realiza a chamada REST para o login usando os valores de email e senha
      const response = await fetch('http://192.168.10.201:8080/api/v1/users/login', request);

      if (!response.ok) {
        alert('Não foi possível realizar o login. Verifique suas credenciais e tente novamente.');
        return;
      }

      // Converte a resposta para JSON
      const data = await response.json();

       */

      const data = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDM1YjE4ZTg2NWY4ZDFmNjAxMWY1ZGYiLCJpYXQiOjE2ODE0MjY4Mjl9._sBy-XLg3PSN2bfSQzjG-fU94AOefj2ITKdkLz-MuKg."
      };

      // Salva o token JWT no armazenamento local
      await AsyncStorage.setItem('token', data.token);

      // seta como autenticado
      //setIsAuthenticated(true);

      // Redireciona para a tela de contas após o login
      navigation.navigate('Transacoes');
    } catch (error) {
      alert('Não foi possível realizar o login. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu login</Text>
      <TextInput
        placeholder="E-mail ou número de telefone"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EsqueciMinhaSenha')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#0066CC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0066CC',
    fontSize: 16,
  },
});

export default TeladeLogin;
