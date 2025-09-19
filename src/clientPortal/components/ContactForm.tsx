import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '../../components/ui';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    country: 'Colombia',
    agents: '',
    marketing: false,
  });

  const handleSubmit = () => {
    if (!formData.email || !formData.agents) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    Alert.alert('Éxito', 'Formulario enviado correctamente');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obtenga un presupuesto rápido</Text>
      
      <Input
        label="Email"
        value={formData.email}
        onChangeText={(email) => setFormData({ ...formData, email })}
        keyboardType="email-address"
        required
      />
      
      <Input
        label="País"
        value={formData.country}
        onChangeText={(country) => setFormData({ ...formData, country })}
        required
      />
      
      <Input
        label="Nº de agentes"
        value={formData.agents}
        onChangeText={(agents) => setFormData({ ...formData, agents })}
        keyboardType="numeric"
        required
      />
      
      <Text style={styles.disclaimer}>
        * Todos los campos son obligatorios
      </Text>
      
      <Text style={styles.privacy}>
        Al enviar este formulario acepto la Política de Privacidad y los Términos y Condiciones.
      </Text>
      
      <Button
        title="Enviar Solicitud"
        onPress={handleSubmit}
        variant="primary"
        size="large"
      />
      
      <Text style={styles.security}>
        Su información está segura y no será compartida.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 12,
    color: '#e74c3c',
    marginBottom: 12,
  },
  privacy: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 16,
    lineHeight: 16,
  },
  security: {
    fontSize: 12,
    color: '#27ae60',
    textAlign: 'center',
    marginTop: 12,
  },
});

export default React.memo(ContactForm);