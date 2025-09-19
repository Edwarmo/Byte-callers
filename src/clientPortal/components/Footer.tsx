import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer: React.FC = () => (
  <View style={styles.footer}>
    <View style={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ByteCallers</Text>
        <Text style={styles.description}>
          Conectamos personas, potenciamos soluciones
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Enlaces rápidos</Text>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Política de privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Términos y condiciones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Contacto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Soporte</Text>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Centro de ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Documentación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Estado del servicio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contacto</Text>
        <Text style={styles.contactInfo}>📞 +1 (555) 123-4567</Text>
        <Text style={styles.contactInfo}>✉️ info@bytecallers.com</Text>
        <Text style={styles.contactInfo}>📍 Ciudad, País</Text>
      </View>
    </View>

    <View style={styles.bottom}>
      <Text style={styles.copyright}>
        © 2024 ByteCallers. Todos los derechos reservados.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0f172a',
    paddingTop: 40,
    paddingBottom: 20,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  section: {
    flex: 1,
    minWidth: 200,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#e2e8f0',
    lineHeight: 20,
  },
  link: {
    marginBottom: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#e2e8f0',
  },
  contactInfo: {
    fontSize: 14,
    color: '#e2e8f0',
    marginBottom: 8,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  copyright: {
    fontSize: 14,
    color: '#94a3b8',
  },
});

export default React.memo(Footer);