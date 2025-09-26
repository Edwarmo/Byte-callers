import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HeroSection: React.FC = () => {
  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>
          Soluciones de Atención al Cliente de Nueva Generación
        </Text>
        <Text style={styles.heroSubtitle}>
          Transformamos la experiencia de atención al cliente con tecnología avanzada, 
          inteligencia artificial y un equipo humano excepcional.
        </Text>
        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Comenzar Ahora</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Ver Demo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    backgroundColor: '#3498db',
    paddingVertical: 100,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroContent: {
    maxWidth: 800,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#ecf0f1',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 28,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  primaryButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HeroSection;