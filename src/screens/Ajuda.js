import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const FAQ_DATA = [
  {
    question: 'O que é o aplicativo?',
    answer:
      'O aplicativo é uma plataforma digital que permite que você gerencie suas contas bancárias, faça transações e tenha acesso a diversos produtos financeiros oferecidos pela instituição financeira.',
  },
  {
    question: 'Como faço para abrir uma conta?',
    answer:
      'Você pode abrir uma conta diretamente no aplicativo. Basta preencher o formulário de cadastro e seguir as instruções para concluir a abertura da conta.',
  },
  {
    question: 'Quais são as opções de pagamento disponíveis?',
    answer:
      'O aplicativo oferece diversas opções de pagamento, como transferências bancárias, pagamento de boletos e contas, pagamentos por QR Code e muito mais. Todas as transações são seguras e protegidas.',
  },
  {
    question: 'Como faço para entrar em contato com o suporte?',
    answer:
      'Você pode entrar em contato com o suporte através do menu de ajuda no aplicativo, ou pelo e-mail support@nomedaempresa.com.br. Nossa equipe está pronta para ajudar com quaisquer dúvidas ou problemas que você possa ter.',
  },
];

const FAQItem = ({ question, answer }) => (
  <View style={styles.faqItemContainer}>
    <Text style={styles.faqQuestion}>{question}</Text>
    <Text style={styles.faqAnswer}>{answer}</Text>
  </View>
);

const AjudaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Perguntas Frequentes</Text>
        {FAQ_DATA.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  faqItemContainer: {
    margin: 20,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqAnswer: {
    fontSize: 16,
  },
});

export default AjudaScreen;
