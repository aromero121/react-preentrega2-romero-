

import productosTienda from "./productosTienda";
//import getProductos from "./productosTienda";
import Producto from "./Producto";
import "./styles.css"


function Productos() {
  return (
    <div id="container">
        {productosTienda.map(producto=>(
            <Producto key={producto.idProducto} {...producto}/>
        ))}
    </div>
  )
}

export default Productos