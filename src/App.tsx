import { UsersProvider } from "context/UserContext";
import UserManagement from "./pages/user-management/UserManagement";

function App() {
  return (
    <UsersProvider>
      <UserManagement />
    </UsersProvider>
  );
}

export default App;
