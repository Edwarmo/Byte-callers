import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface ScrollableBarItem {
  id: string;
  label: string;
  icon?: string;
}

interface ScrollableBarProps {
  items: ScrollableBarItem[];
  selectedId: string;
  onItemPress: (id: string) => void;
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  activeItemStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
}

export const ScrollableBar: React.FC<ScrollableBarProps> = ({
  items,
  selectedId,
  onItemPress,
  style,
  itemStyle,
  activeItemStyle,
  textStyle,
  activeTextStyle,
}) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={[styles.container, style]}
      contentContainerStyle={styles.content}
    >
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.item,
            itemStyle,
            selectedId === item.id && styles.activeItem,
            selectedId === item.id && activeItemStyle,
          ]}
          onPress={() => onItemPress(item.id)}
        >
          <Text
            style={[
              styles.text,
              textStyle,
              selectedId === item.id && styles.activeText,
              selectedId === item.id && activeTextStyle,
            ]}
          >
            {item.icon ? `${item.icon} ${item.label}` : item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  activeItem: {
    backgroundColor: '#3498db',
  },
  text: {
    color: '#2c3e50',
    fontWeight: '600',
    fontSize: 14,
  },
  activeText: {
    color: '#fff',
  },
});