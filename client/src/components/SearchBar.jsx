import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../actions";

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
        <div>
            <input value={name} type='text'  placeholder="Buscar pokemon..." onChange={(e)=> handleInputChange(e)}/>
            <button type="submit"  onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}