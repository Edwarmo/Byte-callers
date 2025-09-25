import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Benefits: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>¿Por qué un socio experto en IA?</Text>
    <Text style={styles.subtitle}>
      En el mercado actual, la velocidad y la calidad de cada interacción definen a los líderes. Te ayudamos a diseñar y ejecutar una estrategia de comunicación inteligente, utilizando IA para crear experiencias únicas que generan lealtad y resultados medibles.
    </Text>
    
    <View style={styles.benefitsList}>
      <View style={styles.benefit}>
        <Text style={styles.benefitIcon}>🎯</Text>
        <Text style={styles.benefitTitle}>Customer Experience IA</Text>
        <Text style={styles.benefitText}>
          Automatizamos la atención y el soporte, resolviendo el 90% de las consultas de forma instantánea y 24/7
        </Text>
      </View>
      
      <View style={styles.benefit}>
        <Text style={styles.benefitIcon}>📈</Text>
        <Text style={styles.benefitTitle}>Ventas & Captación E2E</Text>
        <Text style={styles.benefitText}>
          Potenciamos tus procesos comerciales con agentes IA que califican leads y acortan el ciclo de venta
        </Text>
      </View>
      
      <View style={styles.benefit}>
        <Text style={styles.benefitIcon}>📊</Text>
        <Text style={styles.benefitTitle}>Business Intelligence Conversacional</Text>
        <Text style={styles.benefitText}>
          Transformamos millones de minutos de llamadas en datos estructurados e insights accionables
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 32,
  },
  benefitsList: {
    gap: 24,
  },
  benefit: {
    alignItems: 'center',
    padding: 16,
  },
  benefitIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  benefitTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  benefitText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default React.memo(Benefits);