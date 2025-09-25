import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TicketStats } from '../types/Ticket';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '../utils/constants';

interface StatsPanelProps {
  stats: TicketStats;
  agentName?: string;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats, agentName }) => {
  const { total, urgent, byStatus, byCategory } = stats;
  const { in_progress, new: newTickets, resolved } = byStatus;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          ¡Hola {agentName || 'Agente'}! 👋
        </Text>
        <Text style={styles.motivation}>
          Tienes {in_progress} tickets en progreso
        </Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{total}</Text>
          <Text style={styles.statLabel}>Total Tickets</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={[styles.statNumber, styles.urgentNumber]}>{urgent}</Text>
          <Text style={styles.statLabel}>🚨 Urgentes</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{newTickets}</Text>
          <Text style={styles.statLabel}>🆕 Nuevos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{resolved}</Text>
          <Text style={styles.statLabel}>✅ Resueltos</Text>
        </View>
      </View>

      <View style={styles.categoryStats}>
        {Object.entries(byCategory).map(([category, count]) => (
          <View key={category} style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>
              {CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS]}
            </Text>
            <Text style={styles.categoryCount}>{count}</Text>
            <Text style={styles.categoryLabel}>
              {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(StatsPanel);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  motivation: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 4,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 4,
  },
  urgentNumber: {
    color: '#e74c3c',
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  categoryStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryCard: {
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  categoryLabel: {
    fontSize: 10,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});