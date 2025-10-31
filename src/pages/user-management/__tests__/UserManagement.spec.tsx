import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserManagement from "../UserManagement";

jest.mock("context/UserContext", () => ({
  useUsers: jest.requireActual("../../../utils/__mocks__/mockUsers").useUsers,
}));

test("renderiza corretamente a página e a lista de usuários", async () => {
  render(<UserManagement />);

  expect(screen.getByText("Gerenciamento de usuários")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Gerencie todos os usuários neste local, crie, edite e exclua-os conforme necessário."
    )
  ).toBeInTheDocument();

  expect(screen.getByText("Fulano da Silva")).toBeInTheDocument();
  expect(screen.getByText("Ciclano Souza")).toBeInTheDocument();
});

test("adiciona um novo usuário via formulário", async () => {
  render(<UserManagement />);

  fireEvent.click(screen.getByText(/Adicionar Usuário/i));
  fireEvent.change(screen.getByPlaceholderText("Nome"), {
    target: { value: "Teste Usuario" },
  });
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "testeuser" },
  });
  fireEvent.change(screen.getByPlaceholderText("E-mail"), {
    target: { value: "teste@teste.com" },
  });
  fireEvent.click(screen.getByText("Salvar"));

  await waitFor(() => {
    expect(screen.getByText("Teste Usuario")).toBeInTheDocument();
  });
});

test("integração completa: adicionar usuário e atualizar listagem", async () => {
  render(<UserManagement />);

  fireEvent.click(screen.getByText(/Adicionar Usuário/i));
  fireEvent.change(screen.getByPlaceholderText("Nome"), {
    target: { value: "Carlos Souza" },
  });
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "carloss" },
  });
  fireEvent.change(screen.getByPlaceholderText("E-mail"), {
    target: { value: "carlos@test.com" },
  });
  fireEvent.click(screen.getByText("Salvar"));

  await waitFor(() => {
    expect(screen.getByText("Carlos Souza")).toBeInTheDocument();
  });

  const editButton = screen.queryAllByTestId("edit-button");
  fireEvent.click(editButton[0]);
  fireEvent.change(screen.getByPlaceholderText("Nome"), {
    target: { value: "Carlos S." },
  });
  fireEvent.click(screen.getByText("Atualizar"));

  await waitFor(() => {
    expect(screen.getByText("Carlos S.")).toBeInTheDocument();
  });
});
