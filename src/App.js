import './App.css';
import Foydalanuvchi from './pages/Foydalanuvchi';
import Kassa from './pages/Kassa';
import Chiqim from './pages/Chiqim';
import Kirim from './pages/Kirim';
import React from "react";
 import Diagramma from './pages/Diagramma';
import KassaQoldiq from './pages/KassaQoldiq';
import KlientKassa from './pages/Klientkassa'
import {Link, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App mt-5 ">
     <Link className='btn btn-dark mx-2' to={'/foydalanuvchi'}>Foydalanuvchilar</Link>
     <Link className='btn btn-dark mx-2' to={'/Kassa'}>Kassa</Link>
     <Link className='btn  btn-dark mx-2' to={'/Chiqim'}>Chiqim</Link>
     <Link className='btn  btn-dark mx-2' to={'/Kirim'}>Kirim</Link>
     <Link className='btn  btn-dark mx-2' to={'/Klient'}>Foydalanuvchi mablag'lari</Link>
     <Link className='btn  btn-dark mx-2' to={'/Diagramma'}>Diagramma</Link>
     <Link className='btn  btn-dark mx-2' to={'/Jami'}>Kassalar bo'yicha tushum</Link>
     
     <hr></hr>
     <Routes>
      <Route path='/foydalanuvchi' element={<Foydalanuvchi/>}/>
      <Route path ='/Kassa' element={<Kassa/>}/>
      <Route path='/Chiqim' element={<Chiqim/>}/>
      <Route path='/Kirim' element={<Kirim/>}/>
      <Route path='/Diagramma' element={<Diagramma/>}/>
      <Route path='/Klient' element= {<KlientKassa/>}/>
      <Route path='/Jami' element={<KassaQoldiq/>}/>
     </Routes>


    </div>
  );
}

export default App;
