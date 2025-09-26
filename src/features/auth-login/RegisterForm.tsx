import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'agent',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!formData.firstName || !formData.lastName || !formData.username || 
        !formData.email || !formData.password || !formData.confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert('Éxito', 'Cuenta creada correctamente', [
        { text: 'OK', onPress: onSwitchToLogin }
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo crear la cuenta');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftPanel}>
          <Text style={styles.slogan}>Conectamos personas,</Text>
          <Text style={styles.sloganHighlight}>potenciamos soluciones</Text>
          <Text style={styles.description}>
            Únete a ByteCallers y forma parte de la revolución en centros de contacto
          </Text>
        </View>

        <View style={styles.rightPanel}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ByteCallers</Text>
            <Text style={styles.subtitle}>Crear cuenta nueva</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  placeholderTextColor="#64748b"
                  value={formData.firstName}
                  onChangeText={(firstName) => setFormData({ ...formData, firstName })}
                />
              </View>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <TextInput
                  style={styles.input}
                  placeholder="Apellidos"
                  placeholderTextColor="#64748b"
                  value={formData.lastName}
                  onChangeText={(lastName) => setFormData({ ...formData, lastName })}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#64748b"
                value={formData.username}
                onChangeText={(username) => setFormData({ ...formData, username })}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#64748b"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(email) => setFormData({ ...formData, email })}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#64748b"
                secureTextEntry
                value={formData.password}
                onChangeText={(password) => setFormData({ ...formData, password })}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#64748b"
                secureTextEntry
                value={formData.confirmPassword}
                onChangeText={(confirmPassword) => setFormData({ ...formData, confirmPassword })}
              />
            </View>

            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Tipo de usuario</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={formData.userType}
                  onValueChange={(userType) => setFormData({ ...formData, userType })}
                  style={styles.pickerStyle}
                >
                  <Picker.Item label="Agente" value="agent" />
                  <Picker.Item label="Supervisor" value="supervisor" />
                  <Picker.Item label="Administrador" value="admin" />
                </Picker>
              </View>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={isLoading}>
              <Text style={styles.registerButtonText}>
                {isLoading ? 'Creando cuenta...' : 'Registrarse'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginLink} onPress={onSwitchToLogin}>
              <Text style={styles.loginLinkText}>¿Ya tienes cuenta? Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  slogan: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  sloganHighlight: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 24,
  },
  description: {
    fontSize: 18,
    color: '#94a3b8',
    lineHeight: 28,
  },
  rightPanel: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 32,
    maxHeight: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
  },
  halfWidth: {
    flex: 1,
  },
  input: {
    paddingVertical: 16,
    fontSize: 16,
    color: '#1e293b',
  },
  pickerContainer: {
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
    fontWeight: '500',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    backgroundColor: '#f8fafc',
  },
  pickerStyle: {
    color: '#1e293b',
  },
  registerButton: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 16,
  },
  loginLinkText: {
    color: '#64748b',
    fontSize: 14,
  },
});