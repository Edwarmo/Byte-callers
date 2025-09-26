import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/corporate/Header';
import AboutSection from '../components/corporate/AboutSection';
import CustomScrollbar from '../components/ui/CustomScrollbar';

interface AboutPageProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <CustomScrollbar />
      <Header onNavigate={onNavigate} />
      <AboutSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default AboutPage;