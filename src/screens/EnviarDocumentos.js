import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EnviarDocumentoScreen = ({ navigation }) => {
    const [rg, setRg] = useState('');
    const [orgaoEmissor, setOrgaoEmissor] = useState('');
    const [estadoEmissor, setEstadoEmissor] = useState('');

    const handleEnviarSelfie = () => {
        // Aqui você poderia enviar as informações do documento e da selfie para o servidor
        // Ou, se preferir, poderia validar os campos antes de permitir que o usuário prossiga

        // Exemplo:
        if (!rg || !orgaoEmissor || !estadoEmissor) {
            alert('Por favor preencha todos os campos');
            return;
        }

        navigation.navigate('TirarSelfie');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enviar Documento</Text>
            <TextInput
                placeholder="RG"
                value={rg}
                onChangeText={setRg}
                style={styles.input}
            />
            <TextInput
                placeholder="Órgão emissor"
                value={orgaoEmissor}
                onChangeText={setOrgaoEmissor}
                style={styles.input}
            />
            <TextInput
                placeholder="Estado de emissão"
                value={estadoEmissor}
                onChangeText={setEstadoEmissor}
                style={styles.input}
            />
            <TouchableOpacity onPress={handleEnviarSelfie} style={styles.button}>
                <Text style={styles.buttonText}>Tirar selfie com documento</Text>
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
});

export default EnviarDocumentoScreen;
