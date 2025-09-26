import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/corporate/Header';
import HeroSection from '../components/corporate/HeroSection';
import HomesSection from '../components/corporate/HomesSection';
import BusinessSection from '../components/corporate/BusinessSection';
import AboutSection from '../components/corporate/AboutSection';
import ServicesSection from '../components/corporate/ServicesSection';
import ContactSection from '../components/corporate/ContactSection';
import CustomScrollbar from '../components/ui/CustomScrollbar';

interface CorporatePageProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const CorporatePage: React.FC<CorporatePageProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <CustomScrollbar />
      <Header onNavigate={onNavigate} />
      <View style={styles.content}>
        <HeroSection />
        <HomesSection />
        <BusinessSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});

export default CorporatePage;