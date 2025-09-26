import React from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import Header from '../clientPortal/components/Header';
import Hero from '../clientPortal/components/Hero';
import ServiceTabs from '../clientPortal/components/ServiceTabs';
import Benefits from '../clientPortal/components/Benefits';
import Features from '../clientPortal/components/Features';
import ContactForm from '../clientPortal/components/ContactForm';
import Testimonials from '../clientPortal/components/Testimonials';
import Videos from '../clientPortal/components/Videos';
import Footer from '../clientPortal/components/Footer';

interface LandingPageProps {
  onNavigate?: (view: 'public' | 'login') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => (
  <View style={styles.container}>
    <Header onNavigate={onNavigate || (() => {})} />
    <View style={styles.content}>
      <Hero />
      <ServiceTabs />
      <Benefits />
      <Features />
      <Videos />
      <Testimonials />
      <ContactForm />
      <Footer />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
  },
});