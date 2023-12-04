import "./App.css";
import { HomeScreen } from "./screens/home/home_screen";
import { ContainerRoutes } from "./routes/routes";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { NavbarProvider } from "./context/navbarContext";

function App() {
  return (
    <>
      <NavbarProvider>
        <ContainerRoutes>
          <BrowserRouter>
            <HomeScreen />;
          </BrowserRouter>
        </ContainerRoutes>
      </NavbarProvider>
    </>
  );
}

export default App;
