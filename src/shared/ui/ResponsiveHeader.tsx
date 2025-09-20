import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

interface ResponsiveHeaderProps {
  title: string;
  menuItems?: Array<{ label: string; onPress: () => void }>;
  rightActions?: React.ReactNode;
  onMenuToggle?: (isOpen: boolean) => void;
}

export const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
  title,
  menuItems = [],
  rightActions,
  onMenuToggle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = (result: any) => {
      setScreenData(result.window);
      if (result.window.width >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, [isMenuOpen]);

  const isTablet = screenData.width >= 768;
  const isDesktop = screenData.width >= 1024;

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  const MenuItems = () => (
    <>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.navItem, !isTablet && styles.mobileNavItem]}
          onPress={() => {
            item.onPress();
            if (!isTablet) setIsMenuOpen(false);
          }}
        >
          <Text style={[styles.navText, !isTablet && styles.mobileNavText]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, isDesktop && styles.desktopHeader]}>
        <Text style={[styles.title, isDesktop && styles.desktopTitle]}>{title}</Text>
        
        {/* Desktop/Tablet Navigation */}
        {isTablet && (
          <View style={styles.nav}>
            <MenuItems />
          </View>
        )}

        <View style={styles.rightSection}>
          {rightActions}
          
          {/* Mobile Menu Button */}
          {!isTablet && menuItems.length > 0 && (
            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
              <Text style={styles.menuButtonText}>
                {isMenuOpen ? '✕' : '☰'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Mobile Menu */}
      {!isTablet && isMenuOpen && (
        <View style={styles.mobileMenu}>
          <MenuItems />
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 60,
  },
  desktopHeader: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    minHeight: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
  },
  desktopTitle: {
    fontSize: 24,
    flex: 0,
  },
  nav: {
    flexDirection: 'row',
    gap: 32,
    flex: 1,
    justifyContent: 'center',
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  mobileNavItem: {
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
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
  mobileNavText: {
    fontSize: 18,
    paddingVertical: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f8fafc',
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    }),
  },
  menuButtonText: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: 'bold',
  },
  mobileMenu: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
});