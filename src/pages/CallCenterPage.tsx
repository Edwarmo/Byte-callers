import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { User } from '../business/entities/user/model';
import { Card } from '../shared/ui';

interface CallCenterPageProps {
  user: User | null;
  onLogout: () => void;
}

export const CallCenterPage: React.FC<CallCenterPageProps> = ({ user, onLogout }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.title, isDark && styles.titleDark]}>Panel de Agente</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.welcome, isDark && styles.welcomeDark]}>Bienvenido, {user?.phoneNumber}</Text>
        <Text style={[styles.role, isDark && styles.roleDark]}>Rol: {user?.role}</Text>
        
        <View style={styles.dashboard}>
          <Card style={styles.card}>
            <Text style={[styles.cardTitle, isDark && styles.cardTitleDark]}>Llamadas Hoy</Text>
            <Text style={styles.cardValue}>24</Text>
          </Card>
          <Card style={styles.card}>
            <Text style={[styles.cardTitle, isDark && styles.cardTitleDark]}>Tiempo Promedio</Text>
            <Text style={styles.cardValue}>3:45</Text>
          </Card>
          <Card style={styles.card}>
            <Text style={[styles.cardTitle, isDark && styles.cardTitleDark]}>Satisfacción</Text>
            <Text style={styles.cardValue}>4.8/5</Text>
          </Card>
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
    alignItems: 'center',
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
  containerDark: {
    backgroundColor: '#0f172a',
  },
  headerDark: {
    backgroundColor: '#1e293b',
  },
  titleDark: {
    color: '#e2e8f0',
  },
  welcomeDark: {
    color: '#e2e8f0',
  },
  roleDark: {
    color: '#94a3b8',
  },
  cardTitleDark: {
    color: '#94a3b8',
  },
});