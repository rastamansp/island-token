import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ContasScreen = () => {
    const [saldo, setSaldo] = useState(5999);
    const [transacoes, setTransacoes] = useState([
        {
            id: 1,
            titulo: 'Compra no supermercado',
            descricao: 'Lorem ipsum dolor sit amet',
            data: '10/04/2023',
            valor: -127.50,
        },
        {
            id: 2,
            titulo: 'Pagamento da fatura do cartão',
            descricao: 'Lorem ipsum dolor sit amet',
            data: '08/04/2023',
            valor: -1567.22,
        },
        {
            id: 3,
            titulo: 'Depósito bancário',
            descricao: 'Lorem ipsum dolor sit amet',
            data: '06/04/2023',
            valor: 4000.00,
        },
        {
            id: 4,
            titulo: 'Compra na loja de roupas',
            descricao: 'Lorem ipsum dolor sit amet',
            data: '02/04/2023',
            valor: -256.90,
        },
        {
            id: 5,
            titulo: 'Pagamento de conta de luz',
            descricao: 'Lorem ipsum dolor sit amet',
            data: '01/04/2023',
            valor: -87.30,
        },
    ]);
    const [busca, setBusca] = useState('');

    const handleBusca = (text) => {
        setBusca(text);
    };

    const filtrarTransacoes = () => {
        if (!busca) {
            return transacoes;
        }
        return transacoes.filter((transacao) =>
            transacao.titulo.toLowerCase().includes(busca.toLowerCase())
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>$</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.data}>{item.data}</Text>
            </View>
            <View style={styles.valorContainer}>
                <Text style={item.valor < 0 ? styles.valorNegativo : styles.valorPositivo}>
                    {item.valor.toFixed(2)}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.saldoContainer}>
                <Text style={styles.saldoLabel}>Saldo Disponível:</Text>
                <Text style={styles.saldoValor}>R${saldo.toFixed(2)}</Text>
            </View>
            <View style={styles.buscaContainer}>
                <TextInput
                    placeholder="Buscar transações"
                    value={busca}
                    onChangeText={handleBusca}
                    style={styles.buscaInput}
                />
            </View>
            <FlatList
                data={filtrarTransacoes()}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.lista}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:
            16,
    },
    saldoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    saldoLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    saldoValor: {
        fontSize: 18,
    },
    buscaContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: 'gray',
    },
    buscaInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    lista: {
        flex: 1,
        paddingTop: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    iconContainer: {
        backgroundColor: 'gray',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    icon: {
        color: 'white',
        fontSize: 18,
    },
    textContainer: {
        flex: 1,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    descricao: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 4,
    },
    data: {
        fontSize: 14,
        color: 'gray',
    },
    valorContainer: {
        alignItems: 'flex-end',
    },
    valorNegativo: {
        fontSize: 16,
        color: 'red',
    },
    valorPositivo: {
        fontSize: 16,
        color: 'green',
    },
});

export default ContasScreen;