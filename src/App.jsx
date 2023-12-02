import "./App.css";
import { HomeScreen } from "./screens/home/home_screen";
import { ContainerRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <ContainerRoutes>
        <HomeScreen />;
      </ContainerRoutes>
    </>
  );
}

export default App;
