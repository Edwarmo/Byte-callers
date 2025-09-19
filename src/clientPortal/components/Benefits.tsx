import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Benefits: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Transforme su centro de llamadas</Text>
    <Text style={styles.subtitle}>y su visión de CX</Text>
    
    <View style={styles.benefitsList}>
      <View style={styles.benefit}>
        <Text style={styles.benefitIcon}>🤝</Text>
        <Text style={styles.benefitTitle}>Inteligencia colaborativa</Text>
        <Text style={styles.benefitText}>
          Combine el elemento humano del servicio con IA y automatización
        </Text>
      </View>
      
      <View style={styles.benefit}>
        <Text style={styles.benefitIcon}>🤖</Text>
        <Text style={styles.benefitTitle}>IA práctica</Text>
        <Text style={styles.benefitText}>
          Reduzca costos y aumente productividad con aplicaciones prácticas de IA
        </Text>
      </View>
      
      <View style={styles.benefit}>
        <Text style={styles.benefitIcon}>⚡</Text>
        <Text style={styles.benefitTitle}>Optimización de fuerza de trabajo</Text>
        <Text style={styles.benefitText}>
          Aumente el ROI, impulse productividad y mejore la resolución
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