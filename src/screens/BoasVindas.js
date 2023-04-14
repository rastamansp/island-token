import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BoasVindas = ({ navigation }) => {
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={{ uri: 'https://www.saosebastiao.sp.gov.br/images/peixe.jpg' }} />
      <Text style={styles.titulo}>Bem-vindo ao aplicativo</Text>
      <Text style={styles.texto}>Faça login ou cadastre-se para continuar</Text>
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.link}>Já tem uma conta? Faça login</Text>
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
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  texto: {
    fontSize: 16,
    marginBottom: 32,
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
  link: {
    color: '#0066CC',
    fontSize: 16,
  },
});

export default BoasVindas;
