import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/corporate/Header';
import BusinessSection from '../components/corporate/BusinessSection';
import CustomScrollbar from '../components/ui/CustomScrollbar';

interface BusinessPageProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <CustomScrollbar />
      <Header onNavigate={onNavigate} />
      <BusinessSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default BusinessPage;