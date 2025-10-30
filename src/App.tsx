import { UsersProvider } from "context/UserContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <UsersProvider>
      <Home />
    </UsersProvider>
  );
}

export default App;
