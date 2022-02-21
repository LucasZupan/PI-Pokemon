import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterPokemonsByType, filterCreated, orderByName, orderByStrength, orderByDefault } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import '../styles/Home.css'

export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types);    
    // Estados Locales
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    // eslint-disable-next-line
    const [order, setOrder] = useState('');
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() =>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
       
    };

    function handleFilterType(e) {
        dispatch(filterPokemonsByType(e.target.value));
        setCurrentPage(1);
    };

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value));
        const currentOrder = order.split(" ").pop()
        console.log(currentOrder);
        if(currentOrder  === 'strMax' || currentOrder === 'strMin'){
            dispatch(orderByStrength(currentOrder));            
        }else if(currentOrder === 'asc' || currentOrder === 'desc'){
            dispatch(orderByName(currentOrder));
        }else {
            dispatch(orderByDefault());        
        }
        setCurrentPage(1);
        
    };

    function handleSort(e) {
        e.preventDefault();
        
        if(e.target.value  === 'strMax' || e.target.value === 'strMin'){
            dispatch(orderByStrength(e.target.value));            
        }else if(e.target.value === 'asc' || e.target.value === 'desc'){
            dispatch(orderByName(e.target.value));
        }else {
            dispatch(orderByDefault());        
        }
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);        
    }


    return (
        <div className="provisorio">
        <div>
            <Link to='/createPokemon'><button>Crear Pokemon</button></Link>
            <h1> RUTA PRINCIPAL </h1>
            <button onClick={e => {handleClick(e)}}>
            Cargar otros pokemon aleatorios
            </button>
        </div>
        <div>
            <li>
                 <select onChange ={e=> handleFilterType(e)}>
                     <option value='all'>All Types</option>
                         {
                             allTypes?.map(e =>{
                                 return( <option value={e.name} key={e.id}>{e.name}</option>)
                                })
                            }
                        </select>
                    </li>
            <select onChange ={e=> handleSort(e)}>
                <option value='def'>Sort by: Default</option>
                <option value='asc'>Sort by: A-Z</option>
                <option value='desc'>Sort by: Z-A</option>
                <option value='strMax'>Sort by: Max STR</option>
                <option value='strMin'>Sort by: Min STR</option>
            </select>           
            <select onChange ={e=> handleFilterCreated(e)}>
                <option value='all'> All Pokemons</option>
                <option value='api'> Original Pokemons</option>
                <option value='db'>Created Pokemons</option>
            </select>
            <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado}/>
            <SearchBar/>
            {
                currentPokemons?.map(e=> {
                    return (                       
                     <Card name={e.name} key={e.id} image={e.image} str={e.str} 
                     types={e.types} spd={e.spd} def={e.def} hp={e.hp} id={e.id} />   
                    )})   
                }
        </div>
        </div>

    )
}
