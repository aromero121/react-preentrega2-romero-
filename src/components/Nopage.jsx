
import { Link } from "react-router-dom"

function NoPage() {
  return (
    <>
        <h1 className="h1-404">404</h1>
        <p className="p-404">¡Ups! La página que buscas no se encuentra.</p>
        <p className="p-404">Es posible que haya sido eliminada, movida o que la dirección sea incorrecta.</p>

        <Link to={"/"}>Volver</Link>
    </>
  )
}

export default NoPage