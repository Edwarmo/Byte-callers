import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ticket } from '../types/Ticket';
import { TICKET_COLORS, CATEGORY_ICONS, STATUS_ICONS, STATUS_LABELS } from '../utils/constants';

interface TicketCardProps {
  ticket: Ticket;
  onPress: (ticket: Ticket) => void;
  onStatusChange: (ticketId: string, newStatus: string) => void;
}

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onPress, onStatusChange }) => {
  const { priority, status, id, category, title, customerName, description, createdAt } = ticket;
  const isUrgent = priority === 'urgent';
  const statusColor = TICKET_COLORS[status];
  
  const handlePress = useCallback(() => onPress(ticket), [onPress, ticket]);
  const handleProgressChange = useCallback(() => onStatusChange(id, 'in_progress'), [onStatusChange, id]);
  const handleResolveChange = useCallback(() => onStatusChange(id, 'resolved'), [onStatusChange, id]);

  return (
    <TouchableOpacity 
      style={[
        styles.card,
        isUrgent && styles.urgentCard,
        { borderLeftColor: statusColor }
      ]}
      onPress={handlePress}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.ticketId}>{id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
            <Text style={styles.statusText}>
              {STATUS_ICONS[status]} {STATUS_LABELS[status]}
            </Text>
          </View>
        </View>
        <Text style={styles.category}>
          {CATEGORY_ICONS[category]} {title}
        </Text>
      </View>

      <View style={styles.content}>
        {customerName && (
          <Text style={styles.customer}>👤 {customerName}</Text>
        )}
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.date}>
          📅 {formatDate(createdAt)}
        </Text>
        {isUrgent && (
          <View style={styles.urgentBadge}>
            <Text style={styles.urgentText}>🚨 URGENTE</Text>
          </View>
        )}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionBtn, styles.progressBtn]}
          onPress={handleProgressChange}
        >
          <Text style={styles.actionText}>▶️</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionBtn, styles.resolveBtn]}
          onPress={handleResolveChange}
        >
          <Text style={styles.actionText}>✅</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(TicketCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  urgentCard: {
    borderColor: '#F44336',
    borderWidth: 2,
  },
  header: {
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ticketId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
  },
  content: {
    marginBottom: 12,
  },
  customer: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#2c3e50',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  date: {
    fontSize: 12,
    color: '#95a5a6',
  },
  urgentBadge: {
    backgroundColor: '#F44336',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  urgentText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBtn: {
    backgroundColor: '#FFB300',
  },
  resolveBtn: {
    backgroundColor: '#4CAF50',
  },
  actionText: {
    fontSize: 16,
  },
});