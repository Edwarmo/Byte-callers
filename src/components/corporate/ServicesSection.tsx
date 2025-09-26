import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '📞',
      title: 'Atención Telefónica',
      description: 'Soporte inmediato y resolución de dudas con agentes especializados 24/7.',
      cta: 'Llamar Ahora'
    },
    {
      icon: '🏢',
      title: 'Centros de Servicio',
      description: 'Acude a nuestras oficinas físicas para asesoría directa y personalizada.',
      cta: 'Ubicaciones'
    },
    {
      icon: '📅',
      title: 'Citas Presenciales',
      description: 'Agenda fácilmente reuniones con nuestros expertos en el horario que prefieras.',
      cta: 'Agendar Cita'
    },
    {
      icon: '💳',
      title: 'Puntos de Pago',
      description: 'Encuentra puntos de pago cercanos y soluciones para facturación simplificada.',
      cta: 'Encontrar Puntos'
    },
    {
      icon: '💬',
      title: 'Chat en Vivo',
      description: 'Soporte instantáneo a través de chat web con respuestas rápidas y efectivas.',
      cta: 'Iniciar Chat'
    },
    {
      icon: '📱',
      title: 'WhatsApp Business',
      description: 'Atención personalizada a través de la plataforma de mensajería más popular.',
      cta: 'Escribir WhatsApp'
    }
  ];

  return (
    <View style={styles.section} nativeID="services" id="services">
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Nuestros Servicios</Text>
        <Text style={styles.sectionSubtitle}>
          Soluciones completas para todas tus necesidades de atención al cliente
        </Text>
        
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>{service.icon}</Text>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              <TouchableOpacity style={styles.serviceButton}>
                <Text style={styles.serviceButtonText}>{service.cta}</Text>
              </TouchableOpacity>
            </View>
          ))}
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
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    justifyContent: 'center',
    marginBottom: 80,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  serviceIcon: {
    fontSize: 48,
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 25,
  },
  serviceButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  serviceButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ctaSection: {
    backgroundColor: '#2c3e50',
    padding: 50,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  ctaDescription: {
    fontSize: 16,
    color: '#ecf0f1',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 600,
  },
  ctaButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServicesSection;