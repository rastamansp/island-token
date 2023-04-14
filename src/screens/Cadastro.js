import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';

const CadastroScreen = ({ navigation }) => {
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [paisNascimento, setPaisNascimento] = useState('');
    const [cep, setCep] = useState('');
    const [numeroResidencia, setNumeroResidencia] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [rendaMensal, setRendaMensal] = useState('');
    const [senhaCartao, setSenhaCartao] = useState('');
    const [diaVencimento, setDiaVencimento] = useState('');
    const [selectedDiaVencimento, setSelectedDiaVencimento] = useState('');

    const [limiteCartao, setLimiteCartao] = useState('');
    const [programaFidelidade, setProgramaFidelidade] = useState(false);

    const handleEnviarDocumento = () => {
        // Aqui você poderia enviar os dados do cadastro para o servidor ou para o próximo passo do fluxo de cadastro
        // Ou, se preferir, poderia validar os campos antes de permitir que o usuário prossiga

        // Exemplo:
        /**
         * 
        if (!cpf || !email || !senha || !dataNascimento || !paisNascimento || !cep || !numeroResidencia || !bairro || !cidade || !estado || !telefone || !nomeMae || !rendaMensal || !senhaCartao || !diaVencimento || !limiteCartao) {
            alert('Por favor preencha todos os campos');
            return;
        }
        */

        navigation.navigate('EnviarDoc');
    };

    return (
        <ScrollView  style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
                style={styles.input}
            />
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha de acesso"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                style={styles.input}
            />
            <Text style={styles.subtitulo}>Dados pessoais</Text>
            <TextInput
                placeholder="Data de nascimento"
                value={dataNascimento}
                onChangeText={setDataNascimento}
                style={styles.input}
            />
            <TextInput
                placeholder="País de nascimento"
                value={paisNascimento}
                onChangeText={setPaisNascimento}
                style={styles.input}
            />
            <TextInput
                placeholder="CEP"
                value={cep}
                onChangeText={setCep}
                style={styles.input}
            />
            <TextInput
                placeholder="Número da residência"
                value={numeroResidencia}
                onChangeText={setNumeroResidencia}
                style={styles.input}
            />
            <TextInput
                placeholder="Complemento"
                value={complemento}
                onChangeText={setComplemento}
                style={styles.input}
            />
            <TextInput
                placeholder="Bairro"
                value={bairro}
                onChangeText={setBairro}
                style={styles.input}
            />
            <TextInput
                placeholder="Cidade"
                value={cidade}
                onChangeText={setCidade}
                style={styles.input}
            />
            <TextInput
                placeholder="Estado"
                value={estado}
                onChangeText={setEstado}
                style={styles.input}
            />
            <TextInput
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                style={styles.input}
            />
            <TextInput
                placeholder="Nome da mãe"
                value={nomeMae}
                onChangeText={setNomeMae}
                style={styles.input}
            />
            <TextInput
                placeholder="Renda mensal média"
                value={rendaMensal}
                onChangeText={setRendaMensal}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha do cartão"
                value={senhaCartao}
                onChangeText={setSenhaCartao}
                secureTextEntry={true}
                style={styles.input}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 8 }}>Dia do vencimento da fatura:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="05"
                            status={selectedDiaVencimento === '05' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedDiaVencimento('05')}
                        />
                        <Text style={{ marginLeft: 8 }}>05</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="07"
                            status={selectedDiaVencimento === '07' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedDiaVencimento('07')}
                        />
                        <Text style={{ marginLeft: 8 }}>07</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="08"
                            status={selectedDiaVencimento === '08' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedDiaVencimento('08')}
                        />
                        <Text style={{ marginLeft: 8 }}>08</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="12"
                            status={selectedDiaVencimento === '12' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedDiaVencimento('12')}
                        />
                        <Text style={{ marginLeft: 8 }}>12</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                        <RadioButton
                            value="15"
                            status={selectedDiaVencimento === '15' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedDiaVencimento('15')}
                        />
                        <Text style={{ marginLeft: 8 }}>15</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="18"
                            status={selectedDiaVencimento === '18' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedDiaVencimento('18')}
                        />
                        <Text style={{ marginLeft: 8 }}>18</Text>
                    </View>
                </View>
            </View>




            <TextInput
                placeholder="Ajustar limite do cartão"
                value={limiteCartao}
                onChangeText={setLimiteCartao}
                style={styles.input}
            />
            <TouchableOpacity onPress={() => setProgramaFidelidade(!programaFidelidade)} style={styles.checkbox}>
                <Text style={styles.checkboxText}>Programa de fidelidade</Text>
                {programaFidelidade && <Text>Selecionado</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEnviarDocumento} style={styles.button}>
                <Text style={styles.buttonText}>Enviar Documento</Text>
            </TouchableOpacity>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24,
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
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxText: {
        marginRight: 8,
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

export default CadastroScreen;