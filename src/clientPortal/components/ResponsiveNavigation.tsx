import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ResponsiveHeader } from '../../shared/ui/ResponsiveHeader';

interface ResponsiveNavigationProps {
  onNavigate?: (view: 'public' | 'login') => void;
}

const ResponsiveNavigation: React.FC<ResponsiveNavigationProps> = ({ onNavigate }) => {
  const menuItems = [
    { label: 'Hogares', onPress: () => console.log('Hogares') },
    { label: 'Empresas', onPress: () => console.log('Empresas') },
    { label: 'Conócenos', onPress: () => console.log('Conócenos') },
    { label: 'Servicios', onPress: () => console.log('Servicios') },
    { label: 'Ayuda', onPress: () => console.log('Ayuda') },
  ];

  const rightActions = (
    <>
      <TouchableOpacity style={styles.icon}>
        <Text style={styles.iconText}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.icon}
        onPress={() => onNavigate?.('login')}
      >
        <Text style={styles.iconText}>👤</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <ResponsiveHeader
      title="ByteCallers"
      menuItems={menuItems}
      rightActions={rightActions}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 8,
    borderRadius: 8,
  },
  iconText: {
    fontSize: 18,
  },
});

export default React.memo(ResponsiveNavigation);