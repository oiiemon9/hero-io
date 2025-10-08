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
      <div className="flex flex-col min-h-screen">
        <NavBar></NavBar>
        <div className="flex-1">
          <GlobalProvider>
            <Outlet></Outlet>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              theme="light"
            />
          </GlobalProvider>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
