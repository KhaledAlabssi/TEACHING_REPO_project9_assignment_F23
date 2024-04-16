import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div data-theme="nord" className="min-h-screen min-w-screen flex flex-col">
      {/* navbar */}
      <div className="navbar bg-base-300 ">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* body/content */}
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<h1>Home page</h1> } />
          <Route path='/cli' element={<h1>Cli page</h1> } />

        </Routes>


      </div>

      {/* footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved Testination.net</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
