import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { navigationRoutes } from './routes';

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

  const toggleMenu = () => {
    console.log('Toggle menu:', !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ByteCallers</Text>
        
        {/* Desktop/Tablet Navigation */}
        {isTablet && (
          <View style={styles.nav}>
            {navigationRoutes.map((route) => (
              <TouchableOpacity key={route.id} style={styles.desktopNavItem} onPress={route.onPress}>
                <Text style={styles.desktopNavText}>{route.label}</Text>
              </TouchableOpacity>
            ))}
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

      {/* Modern Sidebar */}
      {!isTablet && isMenuOpen && (
        <>
          <TouchableOpacity 
            style={styles.overlay} 
            activeOpacity={1}
            onPress={toggleMenu}
          />
          <View style={styles.modernSidebar}>
            <View style={styles.sidebarHeader}>
              <View style={styles.logoContainer}>
                <View style={styles.logoIcon}>
                  <Text style={styles.logoEmoji}>🚀</Text>
                </View>
                <Text style={styles.logoText}>ByteCallers</Text>
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.navigation}>
              {navigationRoutes.map((route, index) => {
                const isActive = index === 0; // Primer elemento activo por defecto
                return (
                  <TouchableOpacity
                    key={route.id}
                    style={[styles.navItem, isActive && styles.activeNavItem]}
                    onPress={route.onPress}
                  >
                    <View style={[styles.iconContainer, { backgroundColor: route.color + '20' }]}>
                      <Text style={[styles.icon, { color: route.color }]}>{route.icon}</Text>
                    </View>
                    <Text style={[styles.navText, isActive && styles.activeNavText]}>{route.label}</Text>
                    {isActive && <View style={[styles.activeBorder, { backgroundColor: route.color }]} />}
                  </TouchableOpacity>
                );
              })}
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  desktopNavItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  desktopNavText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 998,
  },
  modernSidebar: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 280,
    height: '100vh',
    borderRadius: 24,
    backgroundColor: '#0f172a',
    zIndex: 999,
    elevation: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoEmoji: {
    fontSize: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 12,
    color: '#f1f5f9',
    fontWeight: '600',
  },
  navigation: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 8,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderWidth: 1,
    borderColor: 'transparent',
    position: 'relative',
    marginBottom: 4,
  },
  activeNavItem: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 22,
  },
  navText: {
    fontSize: 16,
    color: '#f1f5f9',
    fontWeight: '600',
    flex: 1,
  },
  activeNavText: {
    color: '#ffffff',
  },
  activeBorder: {
    position: 'absolute',
    right: 0,
    top: '50%',
    width: 3,
    height: '60%',
    borderRadius: 2,
    transform: [{ translateY: -12 }],
  },

});

export default React.memo(Header);