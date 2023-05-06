import { useSelector } from 'react-redux';
import classes from './nav.module.css'

const Nav = () =>{

    const total = useSelector(state => state.basket.items.length)

    return(
        <nav>
            <img src = 'https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png'  alt="" />
            {total}
        </nav>
    )
}

export default Nav;