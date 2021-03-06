import React from 'react'
import {getRandomCatImg, addToFavorites} from '../../helperfunctions/api'
import LoadingCircle from '../loadingcircle/LoadingCircle'
import './TinderCard.style.css'

class TinderCard extends React.Component{
    constructor(){
        super();
        this.state = {
            img: {},
            isLoading: false, //control for displaying loading animation
        }
    }

    handleReject = () => {
        //show animation
        this.setState({isLoading: true})
        //call api
        getRandomCatImg().then(({image}) => {
            this.setState({img: image, isLoading: false})
        });
    }

    handleLike = () => {
        //Show animation
        this.setState({isLoading: true})
        //call api send id
        addToFavorites(this.state.img.id);
        getRandomCatImg().then(({image}) => {
            this.setState({img: image, isLoading: false})
        });
    }

    componentDidMount(){
        //fetch image and update state
        getRandomCatImg().then(({image}) => {
            this.setState({img: image})
        });
    }

    render(){
        const {img,isLoading} = this.state;
        return(
            <div className={isLoading ? 'tindercard-container-loading' : 'tindercard-container'}>           
                {
                    isLoading && <LoadingCircle />
                }
                <img src={img.url} alt='cat'/>
                <div className='button-container'>
                    <button className='tindercard-container-button' onClick={this.handleReject}>𝗫</button>
                    <button className='tindercard-container-button' onClick={this.handleLike}>❤</button>
                </div>
            </div>
        )
    }
}

export default TinderCard;