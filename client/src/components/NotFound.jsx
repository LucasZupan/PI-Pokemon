import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import '../styles/NotFound.css';
import pokemonLogo from '../img/pokemonLogo.png';



export default function LandingPage(){
    return (
        <div className="divLanding">
            
            <img src={pokemonLogo} className='imgLanding' alt="Img not found"/>
           <h1 className="h1Title">SORRY, PAGE NOT FOUND</h1>
            <Link to ="/home">
                     <button className="buttonHome">GO BACK HOME</button>
            </Link>
           <h1 className="h1404">404</h1>
           
        </div>
    )
};