import React, { useState, useContext } from 'react';

const VehicleDetailCard = (item) => {
    let imgUrl = "https://starwars-visualguide.com/assets/img/vehicles/" + item.vehicle[0].uid + ".jpg";
    return (
        <div className="col">
            <div className="card mb-3" style={{ width: '90%', margin: '5%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgUrl} width="400" height="400" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title text-truncate">{item.vehicle[0].properties.name}</h1>
                            <h6 className="card-title text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in urna nec leo imperdiet rutrum id vel tortor. Aenean vel finibus odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed iaculis pretium leo in imperdiet. Pellentesque maximus fermentum purus eget lacinia.</h6>
                            <div className="card-text mt-4 row">
                                <div className="col ml-4">
                                    <p className="text-truncate">Model:&#32;{item.vehicle[0].properties.model}</p>
                                    <p className="text-truncate">Class:&#32;{item.vehicle[0].properties.vehicle_class}</p>
                                    <p className="text-truncate">Manufacturer:&#32;{item.vehicle[0].properties.manufacturer}</p>
                                    <p className="text-truncate">Credits:&#32;{item.vehicle[0].properties.cost_in_credits}</p>
                                    <p className="text-truncate">Lenght:&#32;{item.vehicle[0].properties.length}</p>
                                </div>
                                <div className="col ml-4">
                                    <p className="text-truncate">Crew:&#32;{item.vehicle[0].properties.crew}</p>
                                    <p className="text-truncate">Passengers:&#32;{item.vehicle[0].properties.passengers}</p>
                                    <p className="text-truncate">Speed:&#32;{item.vehicle[0].properties.max_atmosphering_speed}</p>
                                    <p className="text-truncate">Capacity:&#32;{item.vehicle[0].properties.cargo_capacity}</p>
                                    <p className="text-truncate">Consumables:&#32;{item.vehicle[0].properties.consumables}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VehicleDetailCard;