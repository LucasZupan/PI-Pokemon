import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Card.css'
import bug from '../img/types/bug.png';
import dark from '../img/types/dark.png';
import dragon from '../img/types/dragon.png';
import electric from '../img/types/electric.png';
import fairy from '../img/types/fairy.png';
import fighting from '../img/types/fighting.png';
import fire from '../img/types/fire.png';
import flying from '../img/types/flying.png';
import ghost from '../img/types/ghost.png';
import grass from '../img/types/grass.png';
import ground from '../img/types/ground.png';
import ice from '../img/types/ice.png';
import normal from '../img/types/normal.png';
import poison from '../img/types/poison.png';
import psychic from '../img/types/psychic.png';
import rock from '../img/types/rock.png';
import steel from '../img/types/steel.png';
import water from '../img/types/water.png';

function typeImage(value){
    switch (value) {
        case 'bug': return bug;
        case 'dark': return dark;
        case 'dragon': return dragon;
        case 'electric': return electric;
        case 'fairy': return fairy;
        case 'fighting': return fighting;
        case 'fire': return fire;
        case 'flying': return flying;
        case 'ghost': return ghost;
        case 'grass': return grass;
        case 'ground': return ground;
        case 'ice': return ice;
        case 'normal': return normal;
        case 'poison': return poison;
        case 'psychic': return psychic;
        case 'rock': return rock;
        case 'steel': return steel;
        case 'water': return water;
        default: return value;
    }
}

export default function Card({id, name, image, str, types, hp, spd, def}) {
    
    console.log(typeof(types.map(e => e )[0]));
    
   
    return (        
         <Link to={'/home/'+id} className="reset">  
             <div className="cardContainer" key={id}> 
                <div className="card">
                    <p className="hp">
                        <span>HP </span>
                        {hp}
                    </p>
                     <img className="pokeImage" src={image} alt="img not found"/>           
                     <h2 className="pokeName">{name[0].toUpperCase()+name.slice(1)}</h2>
                    <div className="pokeTypes">                    
                        { types.length === 1 ?
                        <span> 
                            <img src={typeImage(types[0])} alt={`${types[0]}`} /> 
                        </span>:
                        <span>
                            <img  src={typeImage(types[0])} alt={`${types[0]}`} />
                            <img  src={typeImage(types[1])} alt={`${types[1]}`} />
                        </span>
                        }              
                    </div>
                    <div className="pokeStats">
                        <div>
                            <h3>{str}</h3>
                            <p>Attack</p>
                        </div>
                        <div>
                            <h3>{def}</h3>
                            <p>Defense</p>
                        </div>
                        <div>
                            <h3>{spd}</h3>
                            <p>Speed</p>
                        </div>
                    </div>
                    
                 </div>
            </div>      
         </Link>
        
    );
}


// types.forEach(element => {
//     return <img source={dragon} alt={""+element} />

