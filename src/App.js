import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
