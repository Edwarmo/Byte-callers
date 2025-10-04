import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { Card } from '../../shared/ui';
import enterpriseData from '../../infoPageJson/enterprise.json';

const Enterprise: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const cases = enterpriseData;

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Text style={[styles.title, isDark && styles.titleDark]}>Casos de Éxito Empresariales</Text>
      <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>Empresas que transformaron su operación con ByteCallers</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {cases.map((case_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveCase(index)}
          >
            <Card style={[styles.caseCard, activeCase === index && styles.activeCard]}>
              <View style={styles.cardHeader}>
                <Text style={[styles.company, isDark && styles.companyDark]}>{case_.company}</Text>
                <Text style={styles.industry}>{case_.industry}</Text>
              </View>
              <Text style={[styles.challenge, isDark && styles.challengeDark]}>Desafío: {case_.challenge}</Text>
              <Text style={styles.result}>{case_.result}</Text>
              <Text style={[styles.description, isDark && styles.descriptionDark]}>{case_.description}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Card style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>85%</Text>
          <Text style={[styles.metricLabel, isDark && styles.metricLabelDark]}>Llamadas Automatizadas</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>60%</Text>
          <Text style={[styles.metricLabel, isDark && styles.metricLabelDark]}>Reducción de Costos</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>24/7</Text>
          <Text style={[styles.metricLabel, isDark && styles.metricLabelDark]}>Atención Continua</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  carousel: {
    marginBottom: 40,
  },
  caseCard: {
    marginRight: 16,
    width: 300,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  activeCard: {
    borderColor: '#3498db',
    elevation: 4,
  },
  cardHeader: {
    marginBottom: 16,
  },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  industry: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 4,
  },
  challenge: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  metric: {
    alignItems: 'center',
  },
  metricNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3498db',
  },
  metricLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  titleDark: {
    color: '#e2e8f0',
  },
  subtitleDark: {
    color: '#94a3b8',
  },
  companyDark: {
    color: '#e2e8f0',
  },
  challengeDark: {
    color: '#94a3b8',
  },
  descriptionDark: {
    color: '#94a3b8',
  },
  metricLabelDark: {
    color: '#94a3b8',
  },
});

export default React.memo(Enterprise);