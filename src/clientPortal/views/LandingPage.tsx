import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Navigation from '../components/Navigation';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import Videos from '../components/Videos';

interface LandingPageProps {
  onNavigate?: (view: 'public' | 'login') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => (
  <View style={styles.container}>
    {onNavigate && <Navigation onNavigate={onNavigate} />}
    <ScrollView showsVerticalScrollIndicator={false}>
      <Benefits />
      <Features />
      <Videos />
      <Testimonials />
      <ContactForm />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default React.memo(LandingPage);