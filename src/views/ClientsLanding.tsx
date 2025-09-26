import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import { ScrollableBar, ScrollableBarItem } from '../components/ui/ScrollableBar';
import { ClientCard, Client } from '../components/ClientCard';
import { User } from '../types/Auth';

interface ClientsLandingProps {
  user: User;
}

// Mock data - en producción vendría de una API
const mockClients: Client[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+1234567890',
    company: 'Tech Solutions',
    status: 'active',
    lastContact: '2024-01-15',
    totalTickets: 5,
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria.garcia@email.com',
    phone: '+1234567891',
    company: 'Digital Corp',
    status: 'pending',
    lastContact: '2024-01-10',
    totalTickets: 3,
  },
  {
    id: '3',
    name: 'Carlos López',
    email: 'carlos.lopez@email.com',
    phone: '+1234567892',
    status: 'inactive',
    lastContact: '2023-12-20',
    totalTickets: 8,
  },
  {
    id: '4',
    name: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    phone: '+1234567893',
    company: 'StartUp Inc',
    status: 'active',
    lastContact: '2024-01-18',
    totalTickets: 12,
  },
];

const statusItems: ScrollableBarItem[] = [
  { id: 'all', label: 'Todos', icon: '👥' },
  { id: 'active', label: 'Activos', icon: '✅' },
  { id: 'pending', label: 'Pendientes', icon: '⏳' },
  { id: 'inactive', label: 'Inactivos', icon: '❌' },
];

const sortItems: ScrollableBarItem[] = [
  { id: 'name', label: 'Nombre', icon: '🔤' },
  { id: 'tickets', label: 'Tickets', icon: '🎫' },
  { id: 'lastContact', label: 'Último contacto', icon: '📅' },
  { id: 'company', label: 'Empresa', icon: '🏢' },
];

export const ClientsLanding: React.FC<ClientsLandingProps> = ({ user }) => {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [filteredClients, setFilteredClients] = useState<Client[]>(mockClients);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    filterAndSortClients();
  }, [clients, selectedStatus, selectedSort, searchQuery]);

  const filterAndSortClients = () => {
    let filtered = [...clients];

    // Filtrar por estado
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(client => client.status === selectedStatus);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(client =>
        client.name.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.phone.includes(query) ||
        (client.company && client.company.toLowerCase().includes(query))
      );
    }

    // Ordenar
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'tickets':
          return b.totalTickets - a.totalTickets;
        case 'lastContact':
          return new Date(b.lastContact || '').getTime() - new Date(a.lastContact || '').getTime();
        case 'company':
          return (a.company || '').localeCompare(b.company || '');
        default:
          return 0;
      }
    });

    setFilteredClients(filtered);
  };

  const handleClientPress = (client: Client) => {
    Alert.alert(
      `Cliente: ${client.name}`,
      `Email: ${client.email}\nTeléfono: ${client.phone}\nEstado: ${client.status}\nTickets: ${client.totalTickets}`,
      [{ text: 'OK' }]
    );
  };

  const getStatsText = () => {
    const total = filteredClients.length;
    const active = filteredClients.filter(c => c.status === 'active').length;
    const pending = filteredClients.filter(c => c.status === 'pending').length;
    
    return `${total} clientes • ${active} activos • ${pending} pendientes`;
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>👥 Clientes</Text>
        <Text style={styles.subtitle}>Gestiona tu base de clientes</Text>
        <Text style={styles.stats}>{getStatsText()}</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Buscar por nombre, email, teléfono o empresa..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>Estado:</Text>
        <ScrollableBar
          items={statusItems}
          selectedId={selectedStatus}
          onItemPress={setSelectedStatus}
        />
      </View>

      <View style={styles.filtersContainer}>
        <Text style={styles.filterLabel}>Ordenar por:</Text>
        <ScrollableBar
          items={sortItems}
          selectedId={selectedSort}
          onItemPress={setSelectedSort}
          itemStyle={styles.sortItem}
          activeItemStyle={styles.activeSortItem}
        />
      </View>

      <View style={styles.clientsList}>
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              onPress={handleClientPress}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>😔 No se encontraron clientes</Text>
            <Text style={styles.emptySubtext}>
              Intenta ajustar los filtros de búsqueda
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 8,
  },
  stats: {
    fontSize: 14,
    color: '#495057',
    fontWeight: '500',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    margin: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filtersContainer: {
    marginBottom: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginLeft: 16,
    marginBottom: 8,
  },
  sortItem: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  activeSortItem: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  clientsList: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6c757d',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#adb5bd',
    textAlign: 'center',
  },
});