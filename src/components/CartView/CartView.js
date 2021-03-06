import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import './CartView.scss'

export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)


    if (carrito.length === 0) {
        return (
            <div className="noItems container">
                <h2>No agregaste items al carrito aún</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className="cartView container">
            <h2>Cart View</h2>
            <hr/>
            <section>
                {
                    carrito.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </section>
            <hr/>
            <div>
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                <button className="btn btn-success">Terminar mi compra</button>
                
            </div> 
        </div>
    )
}