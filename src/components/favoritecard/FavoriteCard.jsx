import React from 'react'
import './FavoriteCard.style.css'
const FavoriteCard = ({id, imgSrc, handleDelete}) => {
    
    const handleClick = () =>{
        handleDelete(id);
    }
    return(
        <div className='favoritecard-container'>
                <img src={imgSrc} alt='cat'/>
                <div className='favoritecard-container-button' onClick={handleClick}>𝗫</div>
        </div>
    )
}
export default FavoriteCard;