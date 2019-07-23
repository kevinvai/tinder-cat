import React from 'react'
import './FavoriteCard.style.css'
const FavoriteCard = ({id, imgSrc, deleteFav}) => {
    
    const handleDelete = () =>{
        deleteFav(id);
    }
    return(
        <div className='favoritecard-container'>
                <img src={imgSrc} alt='cat'/>
                <div className='favoritecard-container-button' onClick={handleDelete}>𝗫</div>
        </div>
    )
}
export default FavoriteCard;