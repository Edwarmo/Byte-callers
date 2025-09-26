import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/corporate/Header';
import HomesSection from '../components/corporate/HomesSection';
import CustomScrollbar from '../components/ui/CustomScrollbar';

interface HomesPageProps {
  onNavigate?: (view: 'public' | 'login' | 'app' | 'corporate' | 'homes' | 'business' | 'about' | 'services' | 'contact') => void;
}

const HomesPage: React.FC<HomesPageProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <CustomScrollbar />
      <Header onNavigate={onNavigate} />
      <HomesSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomesPage;