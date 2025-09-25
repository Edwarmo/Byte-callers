import { User } from '../types/Auth';

export interface ModuleConfig {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType<any>;
  enabled: boolean;
  permissions?: string[];
  order: number;
}

export interface ModuleProps {
  user: User;
  onNavigate?: (moduleId: string) => void;
}

export class ModuleOrchestrator {
  private static modules: Map<string, ModuleConfig> = new Map();

  static registerModule(config: ModuleConfig): void {
    this.modules.set(config.id, config);
  }

  static getAvailableModules(user: User): ModuleConfig[] {
    return Array.from(this.modules.values())
      .filter(module => this.hasPermission(user, module))
      .sort((a, b) => a.order - b.order);
  }

  static getModule(id: string): ModuleConfig | undefined {
    return this.modules.get(id);
  }

  static enableModule(id: string): void {
    const module = this.modules.get(id);
    if (module) {
      module.enabled = true;
    }
  }

  static disableModule(id: string): void {
    const module = this.modules.get(id);
    if (module) {
      module.enabled = false;
    }
  }

  private static hasPermission(user: User, module: ModuleConfig): boolean {
    if (!module.enabled) return false;
    if (!module.permissions) return true;
    
    const rolePermissions = {
      agent: ['tickets', 'calls'],
      supervisor: ['tickets', 'calls', 'reports', 'team'],
      admin: ['tickets', 'calls', 'reports', 'team', 'settings', 'users']
    };

    const userPermissions = rolePermissions[user.role] || [];
    return module.permissions.some(permission => userPermissions.includes(permission));
  }
}