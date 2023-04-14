import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const EsqueciSenha = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/forgot-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        alert('Solicitação enviada com sucesso!');
      } else {
        alert('Erro ao solicitar nova senha!');
      }
    } catch (error) {
      console.log(error);
      alert('Erro ao solicitar nova senha!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'http://esqueci-minha-senha.jpg' }}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Solicitar Nova Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BoasVindas')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#7159c1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#7159c1',
    fontSize: 16,
  },
});

export default EsqueciSenha;
