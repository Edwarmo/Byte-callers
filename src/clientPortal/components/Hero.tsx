import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Hero: React.FC = () => (
  <View style={styles.hero}>
    <Text style={styles.title}>Ponte en contacto con nosotros</Text>
    <Text style={styles.subtitle}>
      Descubre los canales que ByteCallers Call Center tiene para ti
    </Text>
    <TouchableOpacity style={styles.ctaButton}>
      <Text style={styles.ctaText}>Obtener ayuda dando clic aquí</Text>
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