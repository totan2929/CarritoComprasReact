import {useState, useEffect} from "react"
import { ProductosContext } from "./ProductosContext"

const ProductosProvider = ({children}) => {

    const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [buscarProducto, setBuscarProducto] = useState("");
  const [cart, setCart] = useState([]);

  // Función para agregar producto al carrito
  const handleAgregar = (producto) => {
    if (!cart.find(item => item.id === producto.id)) {
      setCart([...cart, producto]);
    }
  };

  // Función para quitar producto del carrito
  const handleQuitar = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);
  return (
  <ProductosContext.Provider value={{products, setProducts, category, setCategory, buscarProducto, setBuscarProducto, cart, setCart, handleAgregar, handleQuitar}}>
    {children}
  </ProductosContext.Provider>
)
}

export default ProductosProvider