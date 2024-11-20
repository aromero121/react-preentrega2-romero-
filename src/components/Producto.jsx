
import { Link } from "react-router-dom"
import "./styles.css"

function Producto({idProducto,nombreProducto,precioProducto,descProducto,imagenProducto}) {
  return (  
      <Link to={`/productos/${idProducto}`} className="card">
          <h2>{nombreProducto}</h2> 
          <h3>{precioProducto}</h3> 
          <img src={imagenProducto} alt={nombreProducto} /> 
          <p>{descProducto}</p>        
      </Link>    
  )
}

export default Producto