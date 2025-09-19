import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Hero: React.FC = () => (
  <View style={styles.hero}>
    <Text style={styles.title}>Gestionamos el ciclo de vida de tus clientes con Inteligencia Artificial</Text>
    <Text style={styles.subtitle}>
      Integramos IA conversacional en cada interacción para potenciar tus ventas, optimizar tus operaciones y fidelizar a tus clientes. Nos convertimos en tu socio para la transformación digital de la voz.
    </Text>
    <TouchableOpacity style={styles.ctaButton}>
      <Text style={styles.ctaText}>Descubre Nuestras Soluciones</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  hero: {
    backgroundColor: '#0f172a',
    paddingVertical: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 400,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 28,
  },
  ctaButton: {
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: 'transparent',
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default React.memo(Hero);