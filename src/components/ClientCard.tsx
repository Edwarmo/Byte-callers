import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'active' | 'inactive' | 'pending';
  lastContact?: string;
  totalTickets: number;
}

interface ClientCardProps {
  client: Client;
  onPress: (client: Client) => void;
}

export const ClientCard: React.FC<ClientCardProps> = ({ client, onPress }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#28a745';
      case 'inactive': return '#dc3545';
      case 'pending': return '#ffc107';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '✅';
      case 'inactive': return '❌';
      case 'pending': return '⏳';
      default: return '❓';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(client)}>
      <View style={styles.header}>
        <Text style={styles.name}>{client.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(client.status) }]}>
          <Text style={styles.statusText}>
            {getStatusIcon(client.status)} {client.status.toUpperCase()}
          </Text>
        </View>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.infoText}>📧 {client.email}</Text>
        <Text style={styles.infoText}>📞 {client.phone}</Text>
        {client.company && (
          <Text style={styles.infoText}>🏢 {client.company}</Text>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.ticketCount}>
          🎫 {client.totalTickets} tickets
        </Text>
        {client.lastContact && (
          <Text style={styles.lastContact}>
            Último contacto: {client.lastContact}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3498db',
  },
  lastContact: {
    fontSize: 10,
    color: '#6c757d',
  },
});