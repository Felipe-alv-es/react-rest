// __mocks__/useUsers.ts
import React from "react";
import { User } from "context/user-context/types";

export const useUsers = () => {
  const [users, setUsers] = React.useState<User[]>([
    {
      id: 1,
      name: "Fulano da Silva",
      username: "fulano",
      email: "fulano@test.com",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Ciclano Souza",
      username: "ciclano",
      email: "ciclano@test.com",
      status: "Pendente",
    },
  ]);

  const addUser = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const removeUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const editUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  return {
    users,
    loading: false,
    error: null,
    sortUsers: jest.fn(),
    refresh: jest.fn(),
    addUser,
    removeUser,
    editUser,
  };
};
