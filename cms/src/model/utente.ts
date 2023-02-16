export interface Utente {
  username: string;
  password: string;
  roulo: Roulo;
}

export type Roulo = 'admin' | 'user';
