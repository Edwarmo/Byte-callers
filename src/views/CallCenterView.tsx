import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthController } from '../controllers/AuthController';
import { TicketDashboard } from './TicketDashboard';
import { ClientsLanding } from './ClientsLanding';
import { User } from '../types/Auth';
import { Layout } from '../components/ui';

interface CallCenterViewProps {
  user: User | null;
  onLogout: () => void;
}

export const CallCenterView: React.FC<CallCenterViewProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clients' | 'calls'>('dashboard');

  const handleLogout = useCallback(async () => {
    await AuthController.handleLogout();
    onLogout();
  }, [onLogout]);

  return (
    <Layout user={user} onLogout={handleLogout}>
      <View style={styles.container}>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'dashboard' && styles.activeTab]}
          onPress={() => setActiveTab('dashboard')}
        >
          <Text style={[styles.tabText, activeTab === 'dashboard' && styles.activeTabText]}>
            📊 Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'clients' && styles.activeTab]}
          onPress={() => setActiveTab('clients')}
        >
          <Text style={[styles.tabText, activeTab === 'clients' && styles.activeTabText]}>
            👥 Clientes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'calls' && styles.activeTab]}
          onPress={() => setActiveTab('calls')}
        >
          <Text style={[styles.tabText, activeTab === 'calls' && styles.activeTabText]}>
            📞 Llamadas
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === 'dashboard' ? (
          <TicketDashboard user={user!} />
        ) : activeTab === 'clients' ? (
          <ClientsLanding user={user!} />
        ) : (
          <View style={styles.comingSoon}>
            <Text style={styles.comingSoonText}>📞 Módulo de Llamadas</Text>
            <Text style={styles.comingSoonDesc}>Próximamente disponible</Text>
          </View>
        )}
      </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: '#3498db',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7f8c8d',
  },
  activeTabText: {
    color: '#fff',
  },
  comingSoon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  comingSoonDesc: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});