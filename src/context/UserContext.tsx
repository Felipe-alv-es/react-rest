import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User, UsersContextData } from "./types";

const UsersContext = createContext<UsersContextData | undefined>(undefined);
interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const refresh = async () => {
    await fetchUsers();
  };

  const sortUsers = (mode: "alph" | "asc" | "desc") => {
    setUsers((prev) => {
      if (!prev) return prev;
      const arr = [...prev];
      if (mode === "alph") {
        arr.sort((a, b) =>
          a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
        );
        return arr;
      }
      if (mode === "asc") {
        return arr.sort((a, b) => a.id - b.id);
      }
      if (mode === "desc") {
        return arr.sort((a, b) => b.id - a.id);
      }

      return arr;
    });
  };

  const value: UsersContextData = {
    users,
    loading,
    error,
    refresh,
    sortUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsers = (): UsersContextData => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};
