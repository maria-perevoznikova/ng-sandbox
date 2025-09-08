export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: 'open' | 'closed';
}
