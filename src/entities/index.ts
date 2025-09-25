// User entity
export type { User, LoginCredentials, AuthState } from './user/model';

// Ticket entity  
export type { 
  Ticket, 
  TicketCategory, 
  TicketStatus, 
  TicketPriority, 
  TicketStats,
  TicketHistoryEntry 
} from './ticket/model';

// Call entity
export type { 
  Call, 
  CallStatus, 
  CallType, 
  CallDirection,
  CallStats 
} from './call/model';