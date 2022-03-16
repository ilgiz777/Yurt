import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
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
            <Footer />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
