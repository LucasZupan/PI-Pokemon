import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../actions";
import pokebola from '../img/pokebola.png';
import '../styles/SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getPokemonByName(name.toLowerCase()));
        setName('');
    };

    return (
        <div className="searchDiv">            
            <input className="searchInput" value={name} type='text'  placeholder="Search pokemon..." onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)} onChange={(e)=> handleInputChange(e)}/>
            <input className="pokebola" type="image" src={pokebola} alt="img not found" onClick={(e) => handleSubmit(e)}/>
        </div>
    )
}