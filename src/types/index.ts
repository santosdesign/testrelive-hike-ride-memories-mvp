export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Recording {
  id: string;
  title: string;
  duration: number;
  date: Date;
}
