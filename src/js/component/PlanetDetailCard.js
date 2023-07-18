import React, { useState, useContext } from 'react';

const PlanetDetailCard = (item) => {
    let imgUrl = "https://starwars-visualguide.com/assets/img/planets/" + item.planet[0].uid + ".jpg";
    return (
        <div className="col">
            <div className="card mb-3" style={{ width: '90%', margin: '5%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgUrl} width="400" height="400" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-truncate">{item.planet[0].properties.name}</h1>
                            <h6 className="card-title text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in urna nec leo imperdiet rutrum id vel tortor. Aenean vel finibus odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed iaculis pretium leo in imperdiet. Pellentesque maximus fermentum purus eget lacinia.</h6>
                            <div className="card-text mt-4 row">
                                <div className="col ml-4">
                                    <p className="text-truncate">Diameter:&#32;{item.planet[0].properties.diameter}</p>
                                    <p className="text-truncate">Rotation Period:&#32;{item.planet[0].properties.rotation_period}</p>
                                    <p className="text-truncate">Orbital Period:&#32;{item.planet[0].properties.orbital_period}</p>
                                    <p className="text-truncate">Gravity:&#32;{item.planet[0].properties.gravity}</p>
                                </div>
                                <div className="col ml-4">
                                    <p className="text-truncate">Population:&#32;{item.planet[0].properties.population}</p>
                                    <p className="text-truncate">Climate:&#32;{item.planet[0].properties.climate}</p>
                                    <p className="text-truncate">Terrain:&#32;{item.planet[0].properties.terrain}</p>
                                    <p className="text-truncate">Surface Water:&#32;{item.planet[0].properties.surface_water}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PlanetDetailCard;