import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

interface HeaderProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const scrollToSection = (sectionId: string) => {
    if (Platform.OS === 'web') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => onNavigate?.('corporate')}>
        <Text style={styles.logo}>ByteCallers</Text>
      </TouchableOpacity>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => scrollToSection('homes')}>
          <Text style={styles.navItem}>Hogares</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection('business')}>
          <Text style={styles.navItem}>Empresas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection('about')}>
          <Text style={styles.navItem}>Conócenos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection('services')}>
          <Text style={styles.navItem}>Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection('contact')}>
          <Text style={styles.navItem}>Ayuda</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => onNavigate?.('public')}>
          <Text style={styles.navItem}>Landing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate?.('login')}>
          <Text style={styles.navItem}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate?.('app')}>
          <Text style={styles.navItem}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2c3e50',
    position: 'sticky' as any,
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  nav: {
    flexDirection: 'row',
    gap: 30,
  },
  navItem: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#ffffff',
    opacity: 0.3,
    marginHorizontal: 10,
  },
});

export default Header;