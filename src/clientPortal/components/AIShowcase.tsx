import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AIShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('voicebot');

  const demos = [
    {
      id: 'voicebot',
      title: 'Voicebot Call Center',
      icon: '📞',
      description: 'Voicebots que atienden llamadas de consultas básicas como saldos, horarios y seguimiento de pedidos.',
      features: ['Consultas de saldo automáticas', 'Información de horarios 24/7', 'Seguimiento de pedidos en tiempo real']
    },
    {
      id: 'chatbot',
      title: 'Chatbot Omnicanal',
      icon: '💬',
      description: 'Chatbots en web, WhatsApp y redes sociales que resuelven consultas frecuentes instantáneamente.',
      features: ['Integración WhatsApp Business', 'Respuestas en redes sociales', 'Escalamiento inteligente']
    },
    {
      id: 'assistant',
      title: 'Asistente de Agente',
      icon: '🎙️',
      description: 'IA que escucha llamadas y sugiere respuestas rápidas con transcripción automática.',
      features: ['Sugerencias en tiempo real', 'Transcripción automática', 'Historial del cliente instantáneo']
    },
    {
      id: 'sentiment',
      title: 'Análisis de Sentimiento',
      icon: '📊',
      description: 'Detección de emociones en tiempo real para alertar supervisores y evaluar calidad.',
      features: ['Detección de frustración', 'Alertas a supervisores', 'Métricas de satisfacción']
    }
  ];

  const activeDemo_ = demos.find(d => d.id === activeDemo);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tecnología IA en Acción</Text>
      <Text style={styles.subtitle}>Descubre cómo nuestra IA revoluciona la atención al cliente</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          {demos.map((demo) => (
            <TouchableOpacity
              key={demo.id}
              style={[styles.tab, activeDemo === demo.id && styles.activeTab]}
              onPress={() => setActiveDemo(demo.id)}
            >
              <Text style={styles.tabIcon}>{demo.icon}</Text>
              <Text style={[styles.tabText, activeDemo === demo.id && styles.activeTabText]}>
                {demo.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.demoContent}>
        <Text style={styles.demoTitle}>{activeDemo_?.title}</Text>
        <Text style={styles.demoDescription}>{activeDemo_?.description}</Text>
        
        <View style={styles.featuresContainer}>
          {activeDemo_?.features.map((feature, index) => (
            <View key={index} style={styles.feature}>
              <Text style={styles.featureIcon}>✓</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity style={styles.demoButton}>
          <Text style={styles.demoButtonText}>Ver Demo en Vivo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 32,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
  },
  tab: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 120,
    borderWidth: 1,
    borderColor: '#334155',
  },
  activeTab: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  tabText: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '500',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#ffffff',
  },
  demoContent: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 12,
    marginTop: 20,
  },
  demoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  demoDescription: {
    fontSize: 16,
    color: '#94a3b8',
    lineHeight: 24,
    marginBottom: 20,
  },
  featuresContainer: {
    marginBottom: 24,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureIcon: {
    fontSize: 16,
    color: '#10b981',
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#e2e8f0',
  },
  demoButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  demoButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default React.memo(AIShowcase);