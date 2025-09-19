import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  margin?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 16,
  margin = 0,
}) => (
  <View
    style={[
      styles.card,
      { padding, margin },
      style,
    ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default React.memo(Card);