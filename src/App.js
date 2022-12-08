import logo from './logo.svg';
import './App.css';

import DataApp from './common/DataApp';
import Header from './common/Header';
import Footer from './common/Footer';

import './css/myStyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Menubar from './common/Menubar';
import Home from './common/Home';
import About from './common/About';
import Academics from './common/Academics';


function App() {
  return (
    <BrowserRouter>
      <DataApp>
        <Header />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/academics' element={<Academics />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        </Routes>
      </DataApp>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
