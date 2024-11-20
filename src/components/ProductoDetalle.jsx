
import productosTienda from "./productosTienda";
import { useParams } from "react-router-dom";

function ProductoDetalle() {
    const {idProducto} = useParams();
    console.log(idProducto);
    const producto = productosTienda.find(prod=>prod.idProducto===parseInt(idProducto))

    if (!producto){
        return <h2>El producto que busca NO existe !</h2>
    }
  
    return (
    <div>
        <h2>@nuestraTienda - Detalle del producto</h2>
        <div className="card">
        <h2>{producto.nombreProducto}</h2> 
        <h3>{producto.precioProducto}</h3> 
        <img src={producto.imagenProducto} alt={producto.nombreProducto} /> 
        <p>{producto.descProducto}</p>
        </div>
    </div>
  )
}

export default ProductoDetalle
