import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

const ItemCard = (item) => {
	const { store, actions } = useContext(Context);
    let imgUrl = "https://starwars-visualguide.com/assets/img/characters/" + item.character.uid + ".jpg";
    function handleFavorite(){
        console.log(store.favorites);
        store.favorites.push(item.character.properties.name);
        console.log(store.favorites);
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
                    <Link to={'/character/'+item.character.uid} className="btn btn-primary">See more</Link>
                    <button href="#" className="btn btn-warning bi bi-chat-right-heart float-end" onClick={handleFavorite}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;