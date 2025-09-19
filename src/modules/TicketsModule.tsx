import React from 'react';
import { TicketDashboard } from '../views/TicketDashboard';
import { ModuleProps } from '../orchestrator/ModuleOrchestrator';

export const TicketsModule: React.FC<ModuleProps> = ({ user }) => {
  return <TicketDashboard user={user} />;
};