import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useMainContext } from "./Context/MainContext";
import BinsList from "./components/BinsList/BinsList";
import NotificationBar from "./components/NotificationBar/NotificationBar";

function App() {
  const { apiKey } = useMainContext();
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        {
          apiKey !== '' && (
            <BinsList />
          )
        }
        <Outlet />
      </main>
      <Footer />
      {/* <NotificationBar /> */}
    </div>
  );
}

export default App;
