import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User } from '../business/entities/user/model';

interface CallCenterPageProps {
  user: User | null;
  onLogout: () => void;
}

export const CallCenterPage: React.FC<CallCenterPageProps> = ({ user, onLogout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Panel de Agente</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.welcome}>Bienvenido, {user?.phoneNumber}</Text>
        <Text style={styles.role}>Rol: {user?.role}</Text>
        
        <View style={styles.dashboard}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Llamadas Hoy</Text>
            <Text style={styles.cardValue}>24</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Tiempo Promedio</Text>
            <Text style={styles.cardValue}>3:45</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Satisfacción</Text>
            <Text style={styles.cardValue}>4.8/5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 32,
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
});