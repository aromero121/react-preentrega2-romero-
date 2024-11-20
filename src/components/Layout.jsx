
import "./styles.css"
import Logo from "./Logo"
import { Link,Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Logo/>
            <nav>
                <ul className="categorias">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/productos"}>Productos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
      )     
}

export default Layout
 