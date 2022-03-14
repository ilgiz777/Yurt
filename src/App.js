import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
