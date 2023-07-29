import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

const ItemCard = (item) => {
	const { store, actions } = useContext(Context);
    let imgUrl = "https://starwars-visualguide.com/assets/img/characters/" + item.character.uid + ".jpg";
    let isFavorite = 'fa fa-heart';
    if(store.favorites.some((element) => element.name === item.character.properties.name)){
        console.log(store.favorites);
        console.log(item.character.properties.name);
        isFavorite = 'fa fa-heart text-danger';
    }
    function handleFavorite(){
        if(!store.favorites.some(element => element.name === item.character.properties.name)){
            actions.addToFavorite({name: item.character.properties.name, url:'/character/'+item.character.uid});
        }
        else{
            actions.removeFavorite({name: item.character.properties.name, url:'/character/'+item.character.uid});
        }
    }
    return (
        <div className="col">
            <div className="card">
                <img src={imgUrl} width="400" height="400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-truncate">{item.character.properties.name}</h5>
                    <div className="card-text">
                        <p className="text-truncate">Gender:&#32;{item.character.properties.gender}</p>
                        <p className="text-truncate">Eye Color:&#32;{item.character.properties.eye_color}</p>
                        <p className="text-truncate">Hair Color:&#32;{item.character.properties.hair_color}</p>
                    </div>
                    <Link to={'/character/'+item.character.uid} className="btn btn-primary see-more">See more</Link>
                    <button className="btn btn-warning bi bi-chat-right-heart float-end" onClick={handleFavorite}>
                        <i className={isFavorite}/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;