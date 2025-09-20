export interface NavRoute {
  id: string;
  label: string;
  icon: string;
  color: string;
  onPress: () => void;
}

export const navigationRoutes: NavRoute[] = [
  {
    id: 'hogares',
    label: 'Hogares',
    icon: '🏠',
    color: '#6366f1',
    onPress: () => console.log('Navegando a Hogares'),
  },
  {
    id: 'empresas',
    label: 'Empresas',
    icon: '🏢',
    color: '#10b981',
    onPress: () => console.log('Navegando a Empresas'),
  },
  {
    id: 'conocenos',
    label: 'Conócenos',
    icon: '👥',
    color: '#06b6d4',
    onPress: () => console.log('Navegando a Conócenos'),
  },
  {
    id: 'servicios',
    label: 'Servicios',
    icon: '⚙️',
    color: '#8b5cf6',
    onPress: () => console.log('Navegando a Servicios'),
  },
  {
    id: 'ayuda',
    label: 'Ayuda',
    icon: '❓',
    color: '#f59e0b',
    onPress: () => console.log('Navegando a Ayuda'),
  },
];