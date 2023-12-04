import "./App.css";
import { HomeScreen } from "./screens/home/home_screen";
import { ContainerRoutes } from "./routes/routes";
import { NavbarProvider } from "./context/navbarContext";

function App() {
  return (
    <>
      <NavbarProvider>
        <ContainerRoutes>
          <HomeScreen />;
        </ContainerRoutes>
      </NavbarProvider>
    </>
  );
}

export default App;
