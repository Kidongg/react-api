import { UsersProvider } from "./UserContext";
import Users from "./Users";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
