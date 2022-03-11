import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import pokemonLogo from '../img/pokemonLogo.png';
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../actions";
import { useEffect } from "react";

export default function LandingPage(){

    const dispatch = useDispatch();
    
 

    useEffect(() =>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch])

    return (
        <div className="divLanding">
            <img src={pokemonLogo} className='imgLanding' alt="Img not found"/>
            <Link to ="/home">
                <div className="btn ball">
                     <button>
                         <div className="pokemon-ball"></div><a href="/home">Enter<span data-letters="GO!"></span><span data-letters="GO!"></span></a>
                     </button>
                 </div>  
                
            </Link>
        </div>
    )
};