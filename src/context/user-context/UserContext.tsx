import React, { createContext, useContext, ReactNode } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { User, UsersContextData } from "./types";

const UsersContext = createContext<UsersContextData | undefined>(undefined);

interface UsersProviderProps {
  children: ReactNode;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(process.env.REACT_APP_API_URL!);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const addUserApi = async (user: Omit<User, "id">, currentUsers: User[]) => {
  const maxId = currentUsers.length
    ? Math.max(...currentUsers.map((u) => u.id))
    : 0;

  const newUser: User = { ...user, id: maxId + 1 };
  const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...newUser, id: String(newUser.id) }),
  });

  if (!response.ok) throw new Error("Erro ao adicionar usuário");
  return response.json();
};

const updateUserApi = async (user: User) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error("Erro ao atualizar usuário");
  return response.json();
};

const removeUserApi = async (id: number) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Erro ao remover usuário");
  return id;
};

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60,
  });

  const addUserMutation = useMutation<
    User,
    Error,
    { user: Omit<User, "id">; currentUsers: User[] }
  >({
    mutationFn: ({ user, currentUsers }) => addUserApi(user, currentUsers),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const editUserMutation = useMutation<User, Error, User>({
    mutationFn: updateUserApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const removeUserMutation = useMutation<number, Error, number>({
    mutationFn: removeUserApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const sortUsers = (mode: "alph" | "asc" | "desc") => {
    if (!users) return;
    const arr = [...users];
    if (mode === "alph")
      arr.sort((a, b) =>
        a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
      );
    if (mode === "asc") arr.sort((a, b) => a.id - b.id);
    if (mode === "desc") arr.sort((a, b) => b.id - a.id);
    queryClient.setQueryData(["users"], arr);
  };

  const addUser = (user: Omit<User, "id">) =>
    addUserMutation.mutate({ user, currentUsers: users ?? [] });
  const editUser = (user: User) => editUserMutation.mutate(user);
  const removeUser = (id: number) => removeUserMutation.mutate(id);

  const value: UsersContextData = {
    users: users ?? [],
    loading: isLoading,
    error: error?.message ?? null,
    refresh: () => refetch().then(() => {}),
    sortUsers,
    addUser,
    removeUser,
    editUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsers = (): UsersContextData => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("useUsers must be used within a UsersProvider");
  return context;
};
