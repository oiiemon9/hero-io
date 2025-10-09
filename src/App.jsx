import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import GlobalProvider from './GlobalProvider/GlobalProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="flex flex-col min-h-screen">
          <NavBar></NavBar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
        <ToastContainer position="top-right" />
      </GlobalProvider>
    </>
  );
}

export default App;
