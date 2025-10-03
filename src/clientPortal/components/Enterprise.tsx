import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Enterprise: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      company: 'BancoDigital',
      industry: 'Banca',
      challenge: 'Consultas de saldo saturaban líneas',
      result: '85% consultas automatizadas',
      description: 'Voicebots atienden consultas de saldo, movimientos y horarios. Agentes humanos se enfocan en créditos y productos complejos.'
    },
    {
      company: 'TelecomPlus',
      industry: 'Telecomunicaciones',
      challenge: 'Frustración de clientes no detectada',
      result: '40% mejora en satisfacción',
      description: 'Análisis de sentimiento en tiempo real alerta supervisores cuando detecta frustración, permitiendo intervención inmediata.'
    },
    {
      company: 'EcommerceMax',
      industry: 'E-commerce',
      challenge: 'Seguimiento de pedidos colapsa WhatsApp',
      result: '90% consultas resueltas por chatbot',
      description: 'Chatbot en WhatsApp Business resuelve seguimientos, cambios y devoluciones. Escalamiento inteligente a agentes cuando es necesario.'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casos de Éxito Empresariales</Text>
      <Text style={styles.subtitle}>Empresas que transformaron su operación con ByteCallers</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {cases.map((case_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, activeCase === index && styles.activeCard]}
            onPress={() => setActiveCase(index)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.company}>{case_.company}</Text>
              <Text style={styles.industry}>{case_.industry}</Text>
            </View>
            <Text style={styles.challenge}>Desafío: {case_.challenge}</Text>
            <Text style={styles.result}>{case_.result}</Text>
            <Text style={styles.description}>{case_.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>85%</Text>
          <Text style={styles.metricLabel}>Llamadas Automatizadas</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>60%</Text>
          <Text style={styles.metricLabel}>Reducción de Costos</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>24/7</Text>
          <Text style={styles.metricLabel}>Atención Continua</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  carousel: {
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    marginRight: 16,
    width: 300,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  activeCard: {
    borderColor: '#3498db',
    elevation: 4,
  },
  cardHeader: {
    marginBottom: 16,
  },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  industry: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 4,
  },
  challenge: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
  },
  metric: {
    alignItems: 'center',
  },
  metricNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3498db',
  },
  metricLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});

export default React.memo(Enterprise);