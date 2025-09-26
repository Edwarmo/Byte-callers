import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/corporate/Header';
import ContactSection from '../components/corporate/ContactSection';
import CustomScrollbar from '../components/ui/CustomScrollbar';

interface ContactPageProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <CustomScrollbar />
      <Header onNavigate={onNavigate} />
      <ContactSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ContactPage;