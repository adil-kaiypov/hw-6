import { useDispatch } from 'react-redux';
import classes from './item.module.css';
import { addItem } from '../../store/basketReducer';


const Item = ({_id, name, price, picture, tags, description}) =>{

    const dispatch = useDispatch();

    const addProduct = () =>{
        console.log("Button pressed")
        dispatch(addItem(_id))
    };

    return(
        <div className={classes.item}>
            <h2>{name}</h2>
            <div className={classes.item__body}>
                <img src={picture} alt="" />
                <div className={classes.item__description}>
                    <p>{description}</p>
                    <p >{price}</p>
                </div>
            </div>
            <div className={classes.item__tags}>
                {tags.map(t => <li className={classes.item__tag}>{t}</li>)}
            </div>
            <button onClick={addProduct}>Добавить в корзину</button>
        </div>
    );
};

export default Item;