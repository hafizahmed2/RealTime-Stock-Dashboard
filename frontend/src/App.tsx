import { Route, Routes } from "react-router";
import Login from "./components/Login/Login";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Register from "./components/Register/Register";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store/store";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { StockProvider } from "./context/StocksContext";
import { WatchlistProvider } from "./context/WatchlistContext";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StockProvider>
          <WatchlistProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppLayout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
              <ToastContainer />
            </BrowserRouter>
          </WatchlistProvider>
        </StockProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
