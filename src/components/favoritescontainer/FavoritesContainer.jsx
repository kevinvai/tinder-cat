import React from 'react'
import FavoriteCard from '../favoritecard/FavoriteCard';
import {getFavs, deleteFav} from '../../helperfunctions/api'
import './FavoritesContainer.style.css';
//container for favorite images
class FavoritesContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            favs: [] //get from api
        } 
    }

    delete = async (id) => {
        await deleteFav(id);
        getFavs().then(favs => {
            this.setState({favs: favs.images})
        });
    }

    componentDidMount(){
        getFavs().then(favs => {
            this.setState({favs: favs.images})
        });
    }

    render(){
        return(
            <div>
                <h1>Favorites</h1>
                <div className='tinderfavorites-container'> 
                    {
                        this.state.favs.map(fav => <FavoriteCard key={fav.id} id={fav.id} imgSrc={fav.url} deleteFav={this.delete}/>)
                    }
                </div>
            </div>
        )
    }
}
export default FavoritesContainer;