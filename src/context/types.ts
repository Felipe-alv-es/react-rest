export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  status: string;
}

export interface UsersContextData {
  users: User[] | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  sortUsers: (mode: "asc" | "desc" | "alph") => void;
}
