import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, useColorScheme } from 'react-native';

type Section = 'home' | 'solutions' | 'enterprise' | 'ai-tech' | 'testimonials' | 'contact';

interface NavigationProps {
  onNavigate: (view: 'public' | 'login') => void;
  onSectionChange?: (section: Section) => void;
  currentSection?: Section;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, onSectionChange, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const isMobile = screenWidth < 768;
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const sections: { id: Section; label: string; emoji: string }[] = [
    { id: 'home', label: 'Inicio', emoji: '🏠' },
    { id: 'solutions', label: 'Soluciones IA', emoji: '🤖' },
    { id: 'enterprise', label: 'Empresas', emoji: '🏢' },
    { id: 'ai-tech', label: 'Tecnología', emoji: '🚀' },
    { id: 'testimonials', label: 'Testimonios', emoji: '⭐' },
    { id: 'contact', label: 'Contacto', emoji: '📞' },
  ];

  const handleSectionPress = (sectionId: Section) => {
    onSectionChange?.(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <View style={[styles.nav, isDark && styles.navDark]}>
      <Text style={[styles.logo, isDark && styles.logoDark]}>ByteCallers</Text>
      
      {isMobile ? (
        <>
          <TouchableOpacity 
            style={styles.hamburger}
            onPress={() => setIsMenuOpen(!isMenuOpen)}
          >
            <View style={[styles.hamburgerLine, isMenuOpen && styles.hamburgerLineRotate1]} />
            <View style={[styles.hamburgerLine, isMenuOpen && styles.hamburgerLineHide]} />
            <View style={[styles.hamburgerLine, isMenuOpen && styles.hamburgerLineRotate2]} />
          </TouchableOpacity>
          
          {isMenuOpen && (
            <>
              <View style={styles.overlay} onTouchEnd={() => setIsMenuOpen(false)} />
              <View style={[styles.mobileMenu, isDark && styles.mobileMenuDark]}>
                <View style={[styles.menuHeader, isDark && styles.menuHeaderDark]}>
                  <Text style={[styles.menuTitle, isDark && styles.menuTitleDark]}>🌍 Menú</Text>
                </View>
                {sections.map(section => (
                  <TouchableOpacity
                    key={section.id}
                    onPress={() => handleSectionPress(section.id)}
                    style={[styles.mobileMenuItem, currentSection === section.id && styles.mobileMenuItemActive]}
                  >
                    <Text style={styles.menuEmoji}>{section.emoji}</Text>
                    <Text style={[styles.mobileMenuText, isDark && styles.mobileMenuTextDark, currentSection === section.id && styles.mobileMenuTextActive]}>
                      {section.label}
                    </Text>
                    {currentSection === section.id && <Text style={styles.activeIndicator}>✓</Text>}
                  </TouchableOpacity>
                ))}
                <View style={styles.menuDivider} />
                <TouchableOpacity 
                  style={styles.mobileLoginBtn} 
                  onPress={() => { onNavigate('login'); setIsMenuOpen(false); }}
                >
                  <Text style={styles.loginEmoji}>🔐</Text>
                  <Text style={styles.loginText}>Acceso Agentes</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      ) : (
        <>
          <View style={styles.menu}>
            {sections.map(section => (
              <TouchableOpacity
                key={section.id}
                onPress={() => onSectionChange?.(section.id)}
                style={[styles.menuItem, isDark && styles.menuItemDark, currentSection === section.id && styles.menuItemActive]}
              >
                <Text style={styles.desktopEmoji}>{section.emoji}</Text>
                <Text style={[styles.menuText, isDark && styles.menuTextDark, currentSection === section.id && styles.menuTextActive]}>
                  {section.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity 
            style={styles.loginBtn} 
            onPress={() => onNavigate('login')}
          >
            <Text style={styles.loginText}>Acceso Agentes</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    elevation: 2,
    position: 'relative',
    zIndex: 100,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  menu: {
    flexDirection: 'row',
    gap: 8,
  },
  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  menuItemActive: {
    backgroundColor: '#e3f2fd',
  },
  menuText: {
    color: '#666',
    fontSize: 14,
  },
  menuTextActive: {
    color: '#3498db',
    fontWeight: 'bold',
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
  hamburger: {
    width: 30,
    height: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 4,
  },
  hamburgerLine: {
    width: 25,
    height: 3,
    backgroundColor: '#3498db',
    borderRadius: 2,
    transition: 'all 0.3s ease',
  },
  hamburgerLineRotate1: {
    transform: [{ rotate: '45deg' }, { translateY: 10 }],
  },
  hamburgerLineHide: {
    opacity: 0,
  },
  hamburgerLineRotate2: {
    transform: [{ rotate: '-45deg' }, { translateY: -10 }],
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    zIndex: 10000,
  },

  mobileMenuText: {
    color: '#666',
    fontSize: 16,
  },
  mobileMenuTextActive: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9999,
  },
  menuHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'rgba(248, 250, 252, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(226, 232, 240, 0.5)',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  menuEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  desktopEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  activeIndicator: {
    fontSize: 16,
    color: '#10b981',
    fontWeight: 'bold',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 8,
  },
  loginEmoji: {
    fontSize: 16,
    marginRight: 8,
    color: '#fff',
  },
  mobileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mobileMenuItemActive: {
    backgroundColor: 'rgba(227, 242, 253, 0.7)',
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  mobileLoginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 8,
    elevation: 2,
  },
  navDark: {
    backgroundColor: '#1e293b',
  },
  logoDark: {
    color: '#60a5fa',
  },
  mobileMenuDark: {
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
  },
  menuHeaderDark: {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderBottomColor: 'rgba(71, 85, 105, 0.5)',
  },
  menuTitleDark: {
    color: '#e2e8f0',
  },
  mobileMenuTextDark: {
    color: '#cbd5e1',
  },
  menuItemDark: {
    backgroundColor: 'transparent',
  },
  menuTextDark: {
    color: '#cbd5e1',
  },
});

export default React.memo(Navigation);
