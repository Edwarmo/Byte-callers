import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Solutions from '../components/Solutions';
import Enterprise from '../components/Enterprise';
import AIShowcase from '../components/AIShowcase';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

interface LandingPageProps {
  onNavigate?: (view: 'public' | 'login') => void;
}

type Section = 'home' | 'solutions' | 'enterprise' | 'ai-tech' | 'testimonials' | 'contact';

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const renderSection = () => {
    switch (currentSection) {
      case 'home': return <Home />;
      case 'solutions': return <Solutions />;
      case 'enterprise': return <Enterprise />;
      case 'ai-tech': return <AIShowcase />;
      case 'testimonials': return <Testimonials />;
      case 'contact': return <ContactForm />;
    }
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Navigation 
        onNavigate={onNavigate || (() => {})} 
        onSectionChange={setCurrentSection}
        currentSection={currentSection}
      />
      <ScrollView style={[styles.content, isDark && styles.contentDark]}>
        {renderSection()}
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  content: {
    flex: 1,
  },
  contentDark: {
    backgroundColor: '#0f172a',
  },
});

export default React.memo(LandingPage);
