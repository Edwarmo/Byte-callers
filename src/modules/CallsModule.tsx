import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ModuleProps } from '../orchestrator/ModuleOrchestrator';

export const CallsModule: React.FC<ModuleProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Módulo de Llamadas</Text>
      <Text style={styles.subtitle}>Usuario: {user.phoneNumber}</Text>
      <Text style={styles.description}>Funcionalidad en desarrollo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
  },
});