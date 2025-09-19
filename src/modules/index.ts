import { ModuleOrchestrator } from '../orchestrator/ModuleOrchestrator';
import { TicketsModule } from './TicketsModule';
import { CallsModule } from './CallsModule';

// Registrar módulos disponibles
ModuleOrchestrator.registerModule({
  id: 'tickets',
  name: 'Tickets',
  icon: '📊',
  component: TicketsModule,
  enabled: true,
  permissions: ['tickets'],
  order: 1,
});

ModuleOrchestrator.registerModule({
  id: 'calls',
  name: 'Llamadas',
  icon: '📞',
  component: CallsModule,
  enabled: true,
  permissions: ['calls'],
  order: 2,
});

export { ModuleOrchestrator };