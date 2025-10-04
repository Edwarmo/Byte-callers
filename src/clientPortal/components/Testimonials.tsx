import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../shared/ui';
import testimonialsData from '../../infoPageJson/testimonials.json';

const Testimonials: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Más de 3000 clientes de todo el mundo confían en nosotros
    </Text>
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial, index) => (
          <View key={index} style={styles.testimonialItem}>
            <Card>
              <Text style={styles.testimonialTitle}>{testimonial.title}</Text>
              <Text style={styles.testimonialDescription}>{testimonial.description}</Text>
            </Card>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 24,
  },
  testimonialsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  testimonialItem: {
    width: 300,
  },
  testimonialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  testimonialDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});

export default React.memo(Testimonials);
