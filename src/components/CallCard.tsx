import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Call } from '../types/Call';

interface CallCardProps {
  call: Call;
  onAccept: (id: string) => void;
  onComplete: (id: string) => void;
}

export const CallCard: React.FC<CallCardProps> = ({ call, onAccept, onComplete }) => {
  const getTypeColor = () => {
    switch (call.type) {
      case 'support': return '#4CAF50';
      case 'technical': return '#FF9800';
      default: return '#9E9E9E';
    }
  };

  return (
    <View style={styles.card}>
      <View style={[styles.typeIndicator, { backgroundColor: getTypeColor() }]} />
      <View style={styles.content}>
        <Text style={styles.phone}>{call.phoneNumber}</Text>
        <Text style={styles.type}>{call.type.toUpperCase()}</Text>
        <Text style={styles.time}>{call.timestamp.toLocaleTimeString()}</Text>
        {call.description && <Text style={styles.description}>{call.description}</Text>}
      </View>
      <View style={styles.actions}>
        {call.status === 'waiting' && (
          <TouchableOpacity style={styles.acceptBtn} onPress={() => onAccept(call.id)}>
            <Text style={styles.btnText}>Aceptar</Text>
          </TouchableOpacity>
        )}
        {call.status === 'active' && (
          <TouchableOpacity style={styles.completeBtn} onPress={() => onComplete(call.id)}>
            <Text style={styles.btnText}>Finalizar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  typeIndicator: {
    width: 4,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  phone: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    color: '#333',
  },
  actions: {
    justifyContent: 'center',
    paddingRight: 12,
  },
  acceptBtn: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  completeBtn: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});