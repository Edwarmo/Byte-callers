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
      <TouchableOpacity style={[styles.navItem, !isTablet && styles.sidebarNavItem]}>
        <Text style={[styles.navText, !isTablet && styles.sidebarNavText]}>Hogares</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, !isTablet && styles.sidebarNavItem]}>
        <Text style={[styles.navText, !isTablet && styles.sidebarNavText]}>Empresas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, !isTablet && styles.sidebarNavItem]}>
        <Text style={[styles.navText, !isTablet && styles.sidebarNavText]}>Conócenos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, !isTablet && styles.sidebarNavItem]}>
        <Text style={[styles.navText, !isTablet && styles.sidebarNavText]}>Servicios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, !isTablet && styles.sidebarNavItem]}>
        <Text style={[styles.navText, !isTablet && styles.sidebarNavText]}>Ayuda</Text>
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

      {/* Mobile Sidebar Menu */}
      {!isTablet && (
        <>
          {/* Overlay */}
          {isMenuOpen && (
            <TouchableOpacity 
              style={styles.overlay} 
              activeOpacity={1}
              onPress={toggleMenu}
            />
          )}
          
          {/* Sidebar */}
          <View style={[
            styles.sidebar,
            { transform: [{ translateX: isMenuOpen ? 0 : -screenData.width * 0.45 }] }
          ]}>
            <View style={styles.sidebarHeader}>
              <Text style={styles.sidebarTitle}>ByteCallers</Text>
              <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.sidebarContent}>
              <NavItems />
            </View>
          </View>
        </>
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
    marginLeft: 16,
    textAlign: 'center',
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '45%',
    height: '100vh',
    backgroundColor: '#ffffff',
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    ...(Platform.OS === 'web' && {
      transition: 'transform 0.3s ease-in-out',
    }),
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#0f172a',
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  closeButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  sidebarContent: {
    flex: 1,
    paddingTop: 20,
  },
  sidebarNavItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  sidebarNavText: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: '500',
  },
});

export default React.memo(Header);