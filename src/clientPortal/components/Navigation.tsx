import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavigationProps {
  onNavigate: (view: 'public' | 'login') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => (
  <View style={styles.nav}>
    <Text style={styles.logo}>ByteCallers</Text>
    <TouchableOpacity 
      style={styles.loginBtn} 
      onPress={() => onNavigate('login')}
    >
      <Text style={styles.loginText}>Acceso Agentes</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  loginBtn: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default React.memo(Navigation);