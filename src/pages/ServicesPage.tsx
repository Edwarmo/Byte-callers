import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/corporate/Header';
import ServicesSection from '../components/corporate/ServicesSection';
import CustomScrollbar from '../components/ui/CustomScrollbar';

interface ServicesPageProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <CustomScrollbar />
      <Header onNavigate={onNavigate} />
      <ServicesSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ServicesPage;