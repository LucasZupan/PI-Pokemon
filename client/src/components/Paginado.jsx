import React from "react";
import '../styles/Paginado.css'

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers = [];

    for (let i = 1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i);        
    };

    return (
        <nav>
            <ul className='containerFooter'>
                { pageNumbers?.map(number =>{
                    return (
                    <li key={number}>                        
                    <button className="pagButton" onClick={() =>paginado(number)}>{number}</button>
                    </li>
                    )})}
            </ul>
        </nav>
    )
}