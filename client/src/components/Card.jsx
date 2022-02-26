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

const typeColor = {
    bug: "#26de81",
    dark: "#46454a",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0079",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#a285bd",    
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    steel: "#5d91ac",
    water: "#0190FF",
    shadow:"#3837371c",
    unknown: "#f09a9a1c"   
}



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
   
    const divStyle = {
        background: `radial-gradient(
            circle at 50% -12%, ${typeColor[types[0]]} 42%, #ffffff 36%)`
    };


    return (        
         <Link to={'/home/'+id} className="reset">  
             <div className="cardContainer" key={id}> 
                <div className="card" style={divStyle}>
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


