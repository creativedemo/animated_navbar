import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Common/Header';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        {/* <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu   />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
