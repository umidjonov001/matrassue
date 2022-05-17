import './App.css';
import Buyurtma from './components/Buyurtmalar/Buyurtma';
import Customers from './components/Customers/Customers';
import Toifalar from './components/Toifalar/Toifalar';
import Mahsulot from './components/Mahsulotlar/Mahsulot';
import Texnologiyalar from './components/Texnologiyalar/Texnologiyalar';
import Manzil from './components/Manzil/Manzil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Buyurtma />} />
        <Route path='/customers' element={<Customers/>} />
        <Route path='/toifalar' element={<Toifalar />} />
        <Route path='/mahsulotlar' element={<Mahsulot />} />
        <Route path='/texnologiyalar' element={<Texnologiyalar />} />
        <Route path='/manzil' element={<Manzil />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;