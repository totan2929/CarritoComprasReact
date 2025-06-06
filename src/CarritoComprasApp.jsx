import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PaginaCompras from './paginas/PaginaCompras';
import PaginaCarrito from './paginas/PaginaCarrito';
import PaginaHome from './paginas/PaginaHome';
import ProductosProvider from './context/ProductosProvider';
import CarritoProvider from './context/CarritoProvider';

const CarritoComprasApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<PaginaHome />} />
          <Route path='/products' element={<PaginaCompras />} />
          <Route path='/cart' element={<PaginaCarrito />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};

export default CarritoComprasApp;