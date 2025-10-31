export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  status: string;
}

export interface UsersContextData {
  users: User[] | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  sortUsers: (mode: "asc" | "desc" | "alph") => void;
  addUser: (newUser: User) => void;
}
