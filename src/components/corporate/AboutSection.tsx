import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutSection: React.FC = () => {
  return (
    <View style={styles.section} nativeID="about" id="about">
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Conócenos</Text>
        
        <View style={styles.content}>
          <View style={styles.missionVision}>
            <View style={styles.card}>
              <Text style={styles.cardIcon}>🎯</Text>
              <Text style={styles.cardTitle}>Nuestra Misión</Text>
              <Text style={styles.cardDescription}>
                Revolucionar la atención al cliente mediante tecnología innovadora y un servicio humano excepcional, 
                creando experiencias memorables que fortalezcan la relación entre empresas y sus clientes.
              </Text>
            </View>
            
            <View style={styles.card}>
              <Text style={styles.cardIcon}>🔮</Text>
              <Text style={styles.cardTitle}>Nuestra Visión</Text>
              <Text style={styles.cardDescription}>
                Ser la plataforma líder mundial en soluciones de atención al cliente, donde la inteligencia artificial 
                y el talento humano se combinan para crear el futuro de las comunicaciones empresariales.
              </Text>
            </View>
          </View>
          
          <View style={styles.values}>
            <Text style={styles.valuesTitle}>Nuestros Valores</Text>
            <View style={styles.valuesList}>
              <View style={styles.value}>
                <Text style={styles.valueIcon}>💡</Text>
                <View>
                  <Text style={styles.valueName}>Innovación</Text>
                  <Text style={styles.valueDescription}>Buscamos constantemente nuevas formas de mejorar</Text>
                </View>
              </View>
              
              <View style={styles.value}>
                <Text style={styles.valueIcon}>🤝</Text>
                <View>
                  <Text style={styles.valueName}>Confianza</Text>
                  <Text style={styles.valueDescription}>Construimos relaciones sólidas y duraderas</Text>
                </View>
              </View>
              
              <View style={styles.value}>
                <Text style={styles.valueIcon}>⭐</Text>
                <View>
                  <Text style={styles.valueName}>Excelencia</Text>
                  <Text style={styles.valueDescription}>Nos comprometemos con la calidad en cada interacción</Text>
                </View>
              </View>
              
              <View style={styles.value}>
                <Text style={styles.valueIcon}>🌱</Text>
                <View>
                  <Text style={styles.valueName}>Crecimiento</Text>
                  <Text style={styles.valueDescription}>Evolucionamos junto con nuestros clientes</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View style={styles.experience}>
            <Text style={styles.experienceTitle}>Nuestra Experiencia</Text>
            <View style={styles.timeline}>
              <View style={styles.timelineItem}>
                <Text style={styles.year}>2018</Text>
                <Text style={styles.milestone}>Fundación de ByteCallers con 5 empleados</Text>
              </View>
              <View style={styles.timelineItem}>
                <Text style={styles.year}>2020</Text>
                <Text style={styles.milestone}>Implementación de IA y expansión a 50+ clientes</Text>
              </View>
              <View style={styles.timelineItem}>
                <Text style={styles.year}>2022</Text>
                <Text style={styles.milestone}>Certificación ISO 27001 y 200+ empleados</Text>
              </View>
              <View style={styles.timelineItem}>
                <Text style={styles.year}>2024</Text>
                <Text style={styles.milestone}>Líder regional con 500+ empresas atendidas</Text>
              </View>
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
    marginBottom: 50,
  },
  content: {
    gap: 60,
  },
  missionVision: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 12,
    flex: 1,
    maxWidth: 500,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
  },
  values: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  valuesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },
  valuesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    justifyContent: 'center',
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    gap: 15,
  },
  valueIcon: {
    fontSize: 32,
  },
  valueName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  valueDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  experience: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  experienceTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },
  timeline: {
    gap: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    paddingVertical: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
    paddingLeft: 30,
  },
  year: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    minWidth: 60,
  },
  milestone: {
    fontSize: 16,
    color: '#2c3e50',
    flex: 1,
  },
});

export default AboutSection;