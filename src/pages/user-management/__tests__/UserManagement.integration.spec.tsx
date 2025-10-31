import { render, screen, fireEvent } from "@testing-library/react";
import UserManagement from "../UserManagement";

jest.mock("context/UserContext", () => ({
  useUsers: jest.requireActual("../../../utils/__mocks__/mockUsers").useUsers,
}));

describe("UserManagement - integração", () => {
  test("adiciona um novo usuário e atualiza a lista", async () => {
    render(<UserManagement />);

    fireEvent.click(screen.getByText("Adicionar usuário"));
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

    expect(await screen.findByText("Teste Usuario")).toBeInTheDocument();
    expect(await screen.findByText("testeuser")).toBeInTheDocument();
    expect(await screen.findByText("teste@teste.com")).toBeInTheDocument();
  });
});
