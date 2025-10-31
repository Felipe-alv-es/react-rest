import { useMemo } from "react";
import { User } from "context/user-context/types";

interface UseFilteredUsersProps {
  users: User[] | null;
  search: string;
  status: string;
}

export const useFilteredUsers = ({
  users,
  search,
  status,
}: UseFilteredUsersProps) => {
  return useMemo(() => {
    if (!users) return [];

    const searchTerm = search.toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm);

      const matchesStatus = status ? user.status === status : true;

      return matchesSearch && matchesStatus;
    });
  }, [users, search, status]);
};
