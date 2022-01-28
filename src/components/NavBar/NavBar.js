import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {


    
    return (
    
    <header className="header">
        <img src={'./jojoslogo.png'} alt="Logo marca" />

        <nav>
            <ul>
                <li><Link to="productos/funko">Funkos</Link></li>
                <li><Link to="productos/remera">Remeras</Link></li>
                <li><Link to="productos/buzo">Buzos</Link></li>
            </ul>
        </nav>
        
        <CartWidget/>
        
    </header>
    )
}