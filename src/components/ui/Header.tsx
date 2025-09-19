import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User } from '../../types/Auth';

interface HeaderProps {
  user: User | null;
  title?: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, title = 'Byte Callers', onLogout }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{title}</Text>
      {user && (
        <Text style={styles.userInfo}>
          Agente: {user.phoneNumber} ({user.role})
        </Text>
      )}
    </View>
    <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
      <Text style={styles.logoutText}>Salir</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  userInfo: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
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
});

export default React.memo(Header);