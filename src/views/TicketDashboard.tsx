import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import { TicketModel } from '../models/TicketModel';
import TicketCard from '../components/TicketCard';
import HorizontalTicketList from '../components/HorizontalTicketList';
import StatsPanel from '../components/StatsPanel';
import { Ticket, TicketCategory, TicketStatus } from '../types/Ticket';
import { User } from '../types/Auth';
import { CATEGORY_LABELS } from '../utils/constants';

interface TicketDashboardProps {
  user: User;
}

export const TicketDashboard: React.FC<TicketDashboardProps> = ({ user }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<TicketCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState(TicketModel.getStats());
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    filterTickets();
  }, [tickets, selectedCategory, selectedStatus, searchQuery]);

  const loadTickets = async () => {
    const loadedTickets = await TicketModel.loadTickets();
    setTickets(loadedTickets);
    setStats(TicketModel.getStats());
  };

  const filterTickets = () => {
    let filtered = tickets;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(ticket => ticket.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(ticket => ticket.status === selectedStatus);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(ticket =>
        ticket.id.toLowerCase().includes(query) ||
        ticket.customerName?.toLowerCase().includes(query) ||
        ticket.title.toLowerCase().includes(query)
      );
    }

    setFilteredTickets(filtered);
  };

  const handleStatusChange = async (ticketId: string, newStatus: string) => {
    const success = await TicketModel.updateTicketStatus(
      ticketId,
      newStatus as TicketStatus,
      user.phoneNumber
    );

    if (success) {
      await loadTickets();
      Alert.alert('Éxito', 'Estado actualizado correctamente');
    } else {
      Alert.alert('Error', 'No se pudo actualizar el estado');
    }
  };

  const handleTicketPress = (ticket: Ticket) => {
    Alert.alert(
      `Ticket ${ticket.id}`,
      `${ticket.title}\n\n${ticket.description}`,
      [{ text: 'OK' }]
    );
  };

  const CategoryFilter = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
      <TouchableOpacity
        style={[styles.filterBtn, selectedCategory === 'all' && styles.activeFilter]}
        onPress={() => setSelectedCategory('all')}
      >
        <Text style={styles.filterText}>📋 Todas</Text>
      </TouchableOpacity>
      {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
        <TouchableOpacity
          key={key}
          style={[styles.filterBtn, selectedCategory === key && styles.activeFilter]}
          onPress={() => setSelectedCategory(key as TicketCategory)}
        >
          <Text style={styles.filterText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const StatusFilter = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
      <TouchableOpacity
        style={[styles.statusBtn, selectedStatus === 'all' && styles.activeStatus]}
        onPress={() => setSelectedStatus('all')}
      >
        <Text style={styles.statusText}>Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.statusBtn, selectedStatus === 'new' && styles.activeStatus]}
        onPress={() => setSelectedStatus('new')}
      >
        <Text style={styles.statusText}>🆕 Nuevos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.statusBtn, selectedStatus === 'in_progress' && styles.activeStatus]}
        onPress={() => setSelectedStatus('in_progress')}
      >
        <Text style={styles.statusText}>⏳ En Progreso</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <ScrollView 
      style={[styles.container, Platform.OS === 'web' && styles.webContainer]} 
      showsVerticalScrollIndicator={true}
      contentContainerStyle={Platform.OS === 'web' ? styles.webContent : undefined}
    >
      <StatsPanel stats={stats} agentName={user.phoneNumber} />

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Buscar por ID, cliente o palabra clave..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <CategoryFilter />
      <StatusFilter />

      <View style={styles.viewToggle}>
        <TouchableOpacity
          style={[styles.toggleBtn, viewMode === 'vertical' && styles.activeToggle]}
          onPress={() => setViewMode('vertical')}
        >
          <Text style={styles.toggleText}>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleBtn, viewMode === 'horizontal' && styles.activeToggle]}
          onPress={() => setViewMode('horizontal')}
        >
          <Text style={styles.toggleText}>↔️</Text>
        </TouchableOpacity>
      </View>

      {viewMode === 'horizontal' ? (
        <HorizontalTicketList
          tickets={filteredTickets}
          onTicketPress={handleTicketPress}
          onStatusChange={handleStatusChange}
        />
      ) : (
        <View>
          {filteredTickets.map((item) => (
            <TicketCard
              key={item.id}
              ticket={item}
              onPress={handleTicketPress}
              onStatusChange={handleStatusChange}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filterScroll: {
    marginBottom: 12,
  },
  filterBtn: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  activeFilter: {
    backgroundColor: '#3498db',
  },
  filterText: {
    color: '#2c3e50',
    fontWeight: '600',
  },
  statusBtn: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  activeStatus: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  statusText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
  },
  ticketList: {
    flex: 1,
  },
  viewToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 8,
  },
  toggleBtn: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeToggle: {
    backgroundColor: '#3498db',
  },
  toggleText: {
    fontSize: 16,
  },
  webContainer: {
    maxHeight: '100%',
    overflow: 'scroll',
   
  },
  webContent: {
    minHeight: '100%',
    paddingBottom: 50,
  },
});