import React from 'react';
import {Link} from 'react-router-dom';
import './DogDetails.css';

function DogList({dogs}) {
    return(
        <div>
            <div>
                <div>
                    <h2>
                        Hiii! We have the dogs! Click on them for more information.
                    </h2>
                </div>
            </div>
            <div className='row'>
                {dogs.map(dog => (
                    <div className='col-3 text-center'>
                        <img src={`/${dog.src}.jpg`} alt={dog.name}/>
                        <h3 className='mt-3'>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DogList;