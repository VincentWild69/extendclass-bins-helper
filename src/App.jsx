import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useMainContext } from "./Context/MainContext";
import BinsList from "./components/BinsList/BinsList";
import Loader from './ui/Loader/Loader';


function App() {
  const { apiKey, onAuth, isLoading } = useMainContext();

  useEffect(() => {
    if (!apiKey) {
      const storagedKey = localStorage.getItem('extclassapikey') || null;
      if (storagedKey) {
        onAuth(storagedKey);
      }
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      {
        isLoading ? (
          <Loader boxHeight="60vh" />
        ) : (
          <main className="main">
          {
            apiKey !== '' && (
              <BinsList />
            )
          }
          <Outlet />
        </main>
        )
      }
      <Footer />
    </div>
  );
}

export default App;
