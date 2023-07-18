import React, { useState, useContext } from 'react';

const CharacterDetailCard = (item) => {
    let imgUrl = "https://starwars-visualguide.com/assets/img/characters/" + item.character[0].uid + ".jpg";

    return (
        <div className="col">
            <div className="card mb-3" style={{ width: '90%', margin: '5%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgUrl} width="400" height="400" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-truncate">{item.character[0].properties.name}</h1>
                            <h6 className="card-title text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in urna nec leo imperdiet rutrum id vel tortor. Aenean vel finibus odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed iaculis pretium leo in imperdiet. Pellentesque maximus fermentum purus eget lacinia.</h6>
                            <div className="card-text mt-4 row">
                                <div className="col ml-4">
                                    <p className="text-truncate">Gender:&#32;{item.character[0].properties.gender}</p>
                                    <p className="text-truncate">Eye Color:&#32;{item.character[0].properties.eye_color}</p>
                                    <p className="text-truncate">Hair Color:&#32;{item.character[0].properties.hair_color}</p>
                                </div>
                                <div className="col ml-4">
                                    <p className="text-truncate">Skin Color:&#32;{item.character[0].properties.skin_color}</p>
                                    <p className="text-truncate">Height:&#32;{item.character[0].properties.height}</p>
                                    <p className="text-truncate">Birth Year:&#32;{item.character[0].properties.birth_year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CharacterDetailCard;