import { Link } from "react-router-dom"

const CartWidget = ({cart}) => {
    return (
        <>
        <div className="cartWidget">
            <Link to="/Cart"><img  src="/media/cart-check.svg" className="cartW"  alt="Cart Widget" /></Link>
            <span>{cart}</span>
        </div>
        </>
    )
}

export default CartWidget;