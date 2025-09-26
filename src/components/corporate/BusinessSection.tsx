import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BusinessSection: React.FC = () => {
  return (
    <View style={styles.section} nativeID="business" id="business">
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Soluciones Empresariales</Text>
        <Text style={styles.sectionSubtitle}>
          Automatización e IA para atención a gran escala
        </Text>
        
        <View style={styles.content}>
          <View style={styles.textContent}>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>🤖</Text>
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>Inteligencia Artificial Avanzada</Text>
                <Text style={styles.featureDescription}>
                  Chatbots inteligentes y procesamiento de lenguaje natural para resolver consultas automáticamente.
                </Text>
              </View>
            </View>
            
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>📊</Text>
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>Analytics en Tiempo Real</Text>
                <Text style={styles.featureDescription}>
                  Dashboards completos con métricas de rendimiento, satisfacción del cliente y KPIs empresariales.
                </Text>
              </View>
            </View>
            
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>⚙️</Text>
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>Automatización de Procesos</Text>
                <Text style={styles.featureDescription}>
                  Workflows automatizados para escalamiento, routing inteligente y gestión de tickets.
                </Text>
              </View>
            </View>
            
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>🔗</Text>
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>Integración Empresarial</Text>
                <Text style={styles.featureDescription}>
                  APIs robustas para conectar con CRM, ERP y sistemas empresariales existentes.
                </Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Solicitar Demo Empresarial</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>99.9%</Text>
              <Text style={styles.statLabel}>Uptime</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>10M+</Text>
              <Text style={styles.statLabel}>Llamadas/Mes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Empresas</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>Soporte</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 80,
    backgroundColor: '#ffffff',
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
  content: {
    flexDirection: 'row',
    gap: 60,
    alignItems: 'flex-start',
  },
  textContent: {
    flex: 1,
  },
  feature: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'flex-start',
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 20,
    marginTop: 5,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#f8f9fa',
    padding: 40,
    borderRadius: 12,
    minWidth: 300,
  },
  stat: {
    alignItems: 'center',
    marginBottom: 30,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
});

export default BusinessSection;