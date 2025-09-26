import React from 'react';
import { View, StyleSheet } from 'react-native';
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
    <Navigation onNavigate={onNavigate || (() => {})} />
    <View style={styles.content}>
      <View nativeID="benefits"><Benefits /></View>
      <View nativeID="features"><Features /></View>
      <View nativeID="videos"><Videos /></View>
      <View nativeID="testimonials"><Testimonials /></View>
      <View nativeID="contact"><ContactForm /></View>
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

export default React.memo(LandingPage);