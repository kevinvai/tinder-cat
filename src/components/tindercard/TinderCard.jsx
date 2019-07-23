import React from 'react'
import {getRandomCatImg, addToFavorites} from '../../helperfunctions/api'
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
                    isLoading && <div class="sk-circle">
                    <div class="sk-circle1 sk-child"></div>
                    <div class="sk-circle2 sk-child"></div>
                    <div class="sk-circle3 sk-child"></div>
                    <div class="sk-circle4 sk-child"></div>
                    <div class="sk-circle5 sk-child"></div>
                    <div class="sk-circle6 sk-child"></div>
                    <div class="sk-circle7 sk-child"></div>
                    <div class="sk-circle8 sk-child"></div>
                    <div class="sk-circle9 sk-child"></div>
                    <div class="sk-circle10 sk-child"></div>
                    <div class="sk-circle11 sk-child"></div>
                    <div class="sk-circle12 sk-child"></div>
                  </div>
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