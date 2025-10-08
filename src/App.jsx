import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar></NavBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
