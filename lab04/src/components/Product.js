import { useRef, useState } from 'react';
import { IoIosHeartEmpty, IoIosCart, IoIosHeart } from "react-icons/io";
import Modal from './Modal';

function Product(props) {
    const product = props.product;
    const [favouriteIcon, setFavouriteIcon] = useState(isFavourite(product) ? <IoIosHeart /> : <IoIosHeartEmpty />);
    const [open, onOpen] = useState(false);

    const refTitle = useRef();

    function setFavourites(favourites) {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
    function getFavourites() {
        return JSON.parse(localStorage.getItem('favourites')) || [];
    }
    function addToLocalStorage(good) {
        let favorites = [...getFavourites(), good];
        setFavourites(favorites);
    }
    function removeFromLocalStorage(good) {
        let favorites = getFavourites().filter(item => item.id != good.id);
        setFavourites(favorites);
    }
    function isFavourite(good) {
        return getFavourites().some((favourite) => favourite.id === good.id);
    }

    function changeColor() {
        console.log(refTitle);
        refTitle.current.style.color = 'red';
        refTitle.current.style.fontWeight = 'bold';
    };

    function clickOnHeart() {
        console.log(isFavourite(product));
        if (isFavourite(product)) {
            setFavouriteIcon(<IoIosHeartEmpty />);
            removeFromLocalStorage(product)
        }
        else {
            setFavouriteIcon(<IoIosHeart />)
            addToLocalStorage(product);
        }
    }

    return (
        <div className="card ">
            <div className='blockTop' onClick={changeColor}>
                <div className="image">
                    <img src={product.image} alt="" />
                </div>
                <span className="title" ref={refTitle}>{product.title}</span>
                <span className="price">{product.price} &#8372;</span>
            </div >
            <div className="blockBottom" >
                <button className="trigger favorite" onClick={clickOnHeart}>
                    {favouriteIcon}
                </button>
                <button className='trigger' onClick={() => onOpen(true)}>
                    <IoIosCart />

                </button>

            </div>
            <Modal open={open} onOpen={onOpen} name={product.title} />
        </div >
    )
}

export default Product;