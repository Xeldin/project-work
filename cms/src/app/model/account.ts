export interface Utente {
    id:number;
    username: string;
    password: string;
    ruolo: Ruolo;
  }
  
  export type Ruolo = 'admin' | 'user' | 'moderatore';
  