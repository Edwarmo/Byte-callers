import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, icon }) => (
  <View style={styles.card}>
    {imageUrl ? (
      <Image source={{ uri: imageUrl }} style={styles.image} />
    ) : icon ? (
      <Text style={styles.icon}>{icon}</Text>
    ) : null}
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  icon: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});

export default React.memo(Card);