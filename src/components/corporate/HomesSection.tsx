import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomesSection: React.FC = () => {
  return (
    <View style={styles.section} nativeID="homes" id="homes">
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Soluciones para Hogares</Text>
        <Text style={styles.sectionSubtitle}>
          Atención personalizada para clientes individuales
        </Text>
        
        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>🏠</Text>
            <Text style={styles.cardTitle}>Atención 24/7</Text>
            <Text style={styles.cardDescription}>
              Soporte continuo para resolver cualquier consulta o problema en cualquier momento del día.
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardIcon}>👥</Text>
            <Text style={styles.cardTitle}>Agentes Especializados</Text>
            <Text style={styles.cardDescription}>
              Equipo capacitado en atención residencial con conocimiento profundo de servicios domésticos.
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardIcon}>📱</Text>
            <Text style={styles.cardTitle}>Múltiples Canales</Text>
            <Text style={styles.cardDescription}>
              Contacta por teléfono, chat, email o WhatsApp según tu preferencia y comodidad.
            </Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.cardIcon}>⚡</Text>
            <Text style={styles.cardTitle}>Respuesta Rápida</Text>
            <Text style={styles.cardDescription}>
              Tiempos de respuesta optimizados para resolver tus consultas de manera eficiente.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 80,
    backgroundColor: '#f8f9fa',
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 50,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    width: 280,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardIcon: {
    fontSize: 48,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HomesSection;