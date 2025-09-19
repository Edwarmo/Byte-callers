import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Videos: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Vea la nueva experiencia del cliente en acción</Text>
    
    <View style={styles.videoGrid}>
      <TouchableOpacity style={styles.videoCard}>
        <View style={styles.videoThumbnail}>
          <Text style={styles.playIcon}>▶️</Text>
        </View>
        <Text style={styles.videoTitle}>Demo del Dashboard</Text>
        <Text style={styles.videoDescription}>
          Descubra cómo nuestro dashboard mejora la productividad
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.videoCard}>
        <View style={styles.videoThumbnail}>
          <Text style={styles.playIcon}>▶️</Text>
        </View>
        <Text style={styles.videoTitle}>IA en Acción</Text>
        <Text style={styles.videoDescription}>
          Vea cómo la inteligencia artificial optimiza las operaciones
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.videoCard}>
        <View style={styles.videoThumbnail}>
          <Text style={styles.playIcon}>▶️</Text>
        </View>
        <Text style={styles.videoTitle}>Casos de Éxito</Text>
        <Text style={styles.videoDescription}>
          Testimonios reales de nuestros clientes satisfechos
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 32,
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 16,
  },
  videoCard: {
    width: 300,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  videoThumbnail: {
    height: 180,
    backgroundColor: '#3498db',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  playIcon: {
    fontSize: 48,
    color: '#fff',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});

export default React.memo(Videos);