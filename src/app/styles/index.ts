import { StyleSheet } from 'react-native';
import { APP_CONFIG } from '../../shared/config';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_CONFIG.ui.theme.background,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: APP_CONFIG.ui.theme.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: APP_CONFIG.ui.theme.text,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 12,
  },
});