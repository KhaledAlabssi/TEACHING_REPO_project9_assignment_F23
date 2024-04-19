import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cli from './pages/Cli';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div data-theme="nord" className="min-h-screen min-w-screen  flex flex-col">
      {/* navbar */}
      <div className="navbar bg-primary text-primary-content ">
        <a className="btn btn-ghost text-xl">TESTINATION</a>
      </div>

      {/* body/content */}
      <div className="h-full overscroll-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cli/:id?" element={<Cli />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>

      {/* footer */}
      <footer className="footer footer-center p-4 bg-primary text-primary-content">
        <aside>
          <p>Copyright © 2024 - All right reserved Testination.net</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
