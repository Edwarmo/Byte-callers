import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

interface HeaderProps {
  onNavigate?: (view: 'public' | 'login') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  React.useEffect(() => {
    const onChange = (result: any) => {
      setScreenData(result.window);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  const isTablet = screenData.width >= 768;
  const isDesktop = screenData.width >= 1024;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavItems = () => (
    <>
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
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ByteCallers</Text>
        
        {/* Desktop/Tablet Navigation */}
        {isTablet && (
          <View style={styles.nav}>
            <NavItems />
          </View>
        )}

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
          
          {/* Mobile Menu Button */}
          {!isTablet && (
            <TouchableOpacity style={styles.icon} onPress={toggleMenu}>
              <Text style={styles.iconText}>{isMenuOpen ? '✕' : '☰'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Mobile Menu */}
      {!isTablet && isMenuOpen && (
        <View style={styles.mobileMenu}>
          <NavItems />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1000,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: Platform.OS === 'web' ? 0 : 1,
  },
  nav: {
    flexDirection: 'row',
    gap: 24,
    flex: 1,
    justifyContent: 'center',
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  navText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    }),
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  icon: {
    padding: 8,
    borderRadius: 8,
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    }),
  },
  iconText: {
    fontSize: 18,
  },
  mobileMenu: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    gap: 16,
  },
});

export default React.memo(Header);