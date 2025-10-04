import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

const Home: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.hero}>
        <Text style={[styles.title, isDark && styles.titleDark]}>
          ✨ Revoluciona tu Atención al Cliente con Inteligencia Artificial
        </Text>
        <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
          Optimiza tus costos, acelera tus tiempos de respuesta y crea experiencias que fidelizan a tus clientes.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Solicitar Demo Gratis 👉</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>80%</Text>
          <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Consultas Automatizadas</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>40%</Text>
          <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Reducción de Costos</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>24/7</Text>
          <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Disponibilidad Total</Text>
        </View>
      </View>

      <View style={styles.features}>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>🚀</Text>
          <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>Escalabilidad Rentable</Text>
          <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
            Atienda volumen ilimitado sin contratar más personal. Crezca sin saturación.
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>🤝</Text>
          <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>Experiencia Superior</Text>
          <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
            Respuestas inmediatas, coherentes y personalizadas que elevan CSAT y NPS.
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureIcon}>📊</Text>
          <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>Inteligencia Accionable</Text>
          <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
            Dashboards en tiempo real para decisiones estratégicas basadas en datos.
          </Text>
        </View>
      </View>
      
      <View style={styles.challenge}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          El Desafío: Los Límites del Enfoque Tradicional
        </Text>
        <Text style={[styles.description, isDark && styles.descriptionDark]}>
          El modelo operativo tradicional enfrenta barreras que limitan su capacidad y elevan sus costos:
        </Text>
        <View style={styles.challengeList}>
          <Text style={[styles.challengeItem, isDark && styles.challengeItemDark]}>⚠️ Altos volúmenes saturan canales</Text>
          <Text style={[styles.challengeItem, isDark && styles.challengeItemDark]}>💸 Costos operacionales crecientes</Text>
          <Text style={[styles.challengeItem, isDark && styles.challengeItemDark]}>⏱️ Tiempos de espera inaceptables</Text>
          <Text style={[styles.challengeItem, isDark && styles.challengeItemDark]}>🔄 Inconsistencia entre agentes</Text>
        </View>
      </View>
      
      <View style={styles.testimonial}>
        <Text style={[styles.quote, isDark && styles.quoteDark]}>
          "Logramos una reducción del 65% en nuestro tiempo promedio de respuesta. Nuestros agentes ahora se enfocan en casos de alta complejidad mientras la IA gestiona eficientemente todo el volumen transaccional."
        </Text>
        <Text style={[styles.author, isDark && styles.authorDark]}>
          — Gerente de Operaciones, Empresa Líder en Servicios Financieros
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 16,
  },
  titleDark: {
    color: '#e2e8f0',
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 32,
    maxWidth: 600,
  },
  subtitleDark: {
    color: '#94a3b8',
  },
  ctaButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 4,
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
  },
  statLabelDark: {
    color: '#94a3b8',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 40,
  },
  feature: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureTitleDark: {
    color: '#e2e8f0',
  },
  featureText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  featureTextDark: {
    color: '#94a3b8',
  },
  challenge: {
    marginTop: 60,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitleDark: {
    color: '#e2e8f0',
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  descriptionDark: {
    color: '#94a3b8',
  },
  challengeList: {
    gap: 12,
  },
  challengeItem: {
    fontSize: 16,
    color: '#0f172a',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  challengeItemDark: {
    color: '#e2e8f0',
    backgroundColor: '#1e293b',
  },
  testimonial: {
    marginTop: 60,
    padding: 24,
    backgroundColor: '#a4adb2ff',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#0f172a',
    lineHeight: 28,
    marginBottom: 16,
  },
  quoteDark: {
    color: '#0b0e12ff',
  },
  author: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: 'bold',
  },
  authorDark: {
    color: '#94a3b8',
  },
});

export default React.memo(Home);
