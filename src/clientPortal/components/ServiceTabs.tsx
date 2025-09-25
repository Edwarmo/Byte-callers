import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ServiceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('digital');

  const tabs = [
    { id: 'digital', label: 'Canales digitales', icon: '💻' },
    { id: 'phone', label: 'Atención telefónica', icon: '📞' },
    { id: 'service', label: 'Centros de servicio', icon: '🏢' },
    { id: 'appointments', label: 'Citas presenciales', icon: '📅' },
    { id: 'payment', label: 'Puntos de pago', icon: '💳' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                activeTab === tab.id && styles.activeTab
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={styles.tabIcon}>{tab.icon}</Text>
              <Text style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.content}>
        <Text style={styles.contentTitle}>
          {tabs.find(tab => tab.id === activeTab)?.label}
        </Text>
        <Text style={styles.contentText}>
          Información detallada sobre este canal de atención al cliente.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  tab: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 140,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  activeTab: {
    backgroundColor: '#0f172a',
    borderColor: '#0f172a',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  tabText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#ffffff',
  },
  content: {
    padding: 20,
    marginTop: 20,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  contentText: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
});

export default React.memo(ServiceTabs);