import {FaShoppingCart} from "react-icons/fa";

function CartWidget(){
    return (
        <div className="carrito">           
            <FaShoppingCart size={20}/>
            <span className="badge">9</span>
        </div>
    )
}

export default CartWidget

