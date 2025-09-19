import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
  onNavigate?: (view: 'public' | 'login') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => (
  <View style={styles.header}>
    <Text style={styles.logo}>ByteCallers</Text>
    
    <View style={styles.nav}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Hogares</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Empresas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Conócenos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Servicios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Ayuda</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.rightIcons}>
      <TouchableOpacity style={styles.icon}>
        <Text style={styles.iconText}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.icon}
        onPress={() => onNavigate?.('login')}
      >
        <Text style={styles.iconText}>👤</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Text style={styles.iconText}>☰</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  nav: {
    flexDirection: 'row',
    gap: 24,
  },
  navItem: {
    paddingVertical: 8,
  },
  navText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    padding: 8,
  },
  iconText: {
    fontSize: 18,
  },
});

export default React.memo(Header);