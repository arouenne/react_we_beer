import React, { useState } from 'react';
import BeerComponent from './BeerComponent';

const BeerListComponent: React.FunctionComponent = () => {
    const [beers, setBeers] = useState(["Embuscade", "Kasteel Rouge", "Cherry Chouffe"]);
    const [newBeer, setNewBeer] = useState<string>("");

    const addBeer = () => {
        if (newBeer.trim() !== "") {
            setBeers([...beers, newBeer]);
            setNewBeer("");
        }
    };

    const removeBeer = (index: number) => {
        setBeers(beers.filter((_, i) => i !== index));
    };

    return (
        <div className="beer-list container">
            <ul className="list-group mb-3">
                {beers.map((beerName, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {beerName}
                        <button
                            onClick={() => removeBeer(index)}
                            className="btn btn-danger btn-sm"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mb-3">
                <input
                    id="newBeer"
                    type="text"
                    className="form-control"
                    placeholder="Nom de la bière"
                    value={newBeer}
                    onChange={(e) => setNewBeer(e.target.value)}
                />
            </div>
            <button onClick={addBeer} className="btn btn-success">
                Ajouter la bière
            </button>
        </div>

    );
};

export default BeerListComponent;
