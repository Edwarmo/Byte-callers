import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from './Card';
import contentData from '../data/content.json';

const Features: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>Características Principales</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.featuresGrid}>
        {contentData.features.map((feature) => (
          <View key={feature.id} style={styles.featureItem}>
            <Card
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 24,
  },
  featuresGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  featureItem: {
    width: 280,
  },
});

export default React.memo(Features);