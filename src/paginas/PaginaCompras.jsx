import "../styles/Filtros.css";
import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { Card } from "../components/Card";
import { CarritoContext } from "../context/CarritoContext";

const PaginaCompras = () => {
  
  const { products,category, setCategory, buscarProducto, setBuscarProducto, cart} = useContext(ProductosContext);
  const {agregarCompra, eliminarCompra} = useContext(CarritoContext);

  const handleAgregar = (compra)=> {
    agregarCompra(compra);
  }
  const handleQuitar = (id)=> {
    eliminarCompra(id);
  }
  
  

  // Filtrado de productos por categoría y búsqueda
  const filtrarProductos = products
    .filter(p => !category || p.category === category)
    .filter(p => p.title.toLowerCase().includes(buscarProducto.toLowerCase()));

  // Obtener categorías únicas usando map y filter
  const categorias = products
    .map(p => p.category)
    .filter((categoria, index, categorias) => categorias.indexOf(categoria) === index);

  return (
  <div className="container">
    <div className="row justify-content-center mb-4">
  <div className="col-auto filtro-row mb-2">
    <label htmlFor="categoria-select" className="form-label me-2">
      <strong>Productos por categoría:</strong>
    </label>

<select
  id="categoria-select"
  onChange={(e) => {
    setCategory(e.target.value);
    setBuscarProducto(""); 
  }}
  className="select-personalizado"
>
  <option value="">Todas las categorías</option>
  {categorias.map(cat => (
    <option key={cat} value={cat}>{cat}</option>
  ))}
</select>

  </div>
  <div className="col-auto filtro-row">
    <label htmlFor="buscador-input" className="form-label me-2">
      <strong>Filtrar por nombre:</strong>
    </label>
    <input
      id="buscador-input"
      type="text"
      className="buscador"
      placeholder="Buscar producto..."
      value={buscarProducto}
      onChange={e => setBuscarProducto(e.target.value)}
    />
  </div>
</div>
    <div className="row">
      {filtrarProductos.map(product => (
        <div className="col-md-6 mb-4" key={product.id}>
          <Card
            imagen={product.thumbnail}
            titulo={product.title}
            descripcion={product.description}
            precio={product.price}
            handleAgregar={()=>handleAgregar(product)}
            handleQuitar={()=>handleQuitar(product.id)}
            added={!!cart.find(item => item.id === product.id)}
          />
        </div>
      ))}
    </div>
  </div>
);
};

export default PaginaCompras;