import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import solutionsData from '../../infoPageJson/solutions.json';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-agents');

  const solutions = solutionsData;

  const activeSolution = solutions.find(s => s.id === activeTab);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soluciones para Call Centers</Text>
      <Text style={styles.subtitle}>Transforma tu operación con IA conversacional</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          {solutions.map((solution) => (
            <TouchableOpacity
              key={solution.id}
              style={[styles.tab, activeTab === solution.id && styles.activeTab]}
              onPress={() => setActiveTab(solution.id)}
            >
              <Text style={styles.tabIcon}>{solution.icon}</Text>
              <Text style={[styles.tabText, activeTab === solution.id && styles.activeTabText]}>
                {solution.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{activeSolution?.title}</Text>
        <Text style={styles.contentText}>{activeSolution?.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
  tabsContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
  },
  tab: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 140,
    borderWidth: 1,
    borderColor: '#e2e8f0',
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
    color: '#64748b',
    fontWeight: '500',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#ffffff',
  },
  content: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  contentText: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
});

export default React.memo(Solutions);