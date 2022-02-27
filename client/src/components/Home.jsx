import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonByName, getTypes, filterPokemonsByType, filterCreated, orderByName, orderByStrength, orderByDefault } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import pokemonLogo from '../img/pokemonLogo.png';
import '../styles/Home.css'
import '../styles/NavBar.css'
import pokebola from '../img/pokebola.png';
import '../styles/SearchBar.css'


export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types); 
    // Estados Locales
    const [name, setName] = useState('');   
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    // eslint-disable-next-line
    const [order, setOrder] = useState('');
    const [originType, setOriginType] = useState({
        origin: "all",
        type: "all"
    });
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

    async function handleClick(e) {
        e.preventDefault();
    await dispatch(getPokemons());
    dispatch(filterCreated(originType));
       
    };

    function handleFilterType(e) {
        setOriginType({
            ...originType,
            type: e.target.value
        })
        dispatch(filterPokemonsByType(
            {origin: originType.origin,
            type: e.target.value     
        }));
        const currentOrder = order.split(" ").pop()
        
        if(currentOrder  === 'strMax' || currentOrder === 'strMin'){
            dispatch(orderByStrength(currentOrder));            
        }else if(currentOrder === 'asc' || currentOrder === 'desc'){
            dispatch(orderByName(currentOrder));
        }else {
            dispatch(orderByDefault());        
        }
        setCurrentPage(1);
    };

    function handleFilterCreated(e){
        setOriginType({
            ...originType,
            origin: e.target.value
        })
        dispatch(filterCreated(
            {origin: e.target.value,
            type: originType.type    
        }));
        const currentOrder = order.split(" ").pop()
        
        if(currentOrder  === 'strMax' || currentOrder === 'strMin'){
            dispatch(orderByStrength(currentOrder));            
        }else if(currentOrder === 'asc' || currentOrder === 'desc'){
            dispatch(orderByName(currentOrder));
        }else {
            dispatch(orderByDefault());        
        }
        setCurrentPage(1);
        
    };
    function handleOnClick(){
        window.location.reload(false);
    }


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

    function handleInputChangeSearch(e){
        e.preventDefault();
        setName(e.target.value);
    };

    async function handleSubmitSearch(e){
        e.preventDefault();
        await dispatch(getPokemonByName(name.toLowerCase()));
        setName('');
        setCurrentPage(1);
    };

    return (
        <div >
            <nav className="navBar">
                <div><Link to='/home'><img src={pokemonLogo} className='imgHome' alt="Img not found" onClick={() => handleOnClick()}/></Link></div>
                    <div className="navItems">
                        <li>                            
                            <select className="selectBox" onChange ={e=> handleSort(e)}>
                                <option value='def'>Sort by: Default</option>
                                <option value='asc'>Sort by: A-Z</option>
                                <option value='desc'>Sort by: Z-A</option>
                                <option value='strMax'>Sort by: Max STR</option>
                                <option value='strMin'>Sort by: Min STR</option>
                            </select>    
                        </li>
                        <li>                            
                            <select className="selectBox" onChange ={e=> handleFilterCreated(e)}>
                                <option value='all'> All Pokemons</option>
                                <option value='api'> Original Pokemons</option>
                                <option value='db'>Created Pokemons</option>
                            </select>
                        </li>
                        <li>                            
                            <select className="selectBox" onChange ={e=> handleFilterType(e)}>
                                <option value='all'>All Types</option>
                                    {
                                        allTypes?.map(e =>{
                                            return( <option value={e.name} key={e.id}>{e.name}</option>)
                                        })
                                    }
                            </select>
                        </li>
                        <li>
                            <Link to='/createPokemon'><button>Create your Pokemon</button></Link>           
                        </li>
                        <li>
                            <button onClick={e => {handleClick(e)}}>Get random pokemons</button>
                        </li>
                    </div>
                    <div>
                        <div className="searchDiv">            
                            <input className="searchInput" value={name} type='text'  placeholder="Search pokemon..." 
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmitSearch(e)} onChange={(e)=> handleInputChangeSearch(e)}/>
                            <input className="pokebola" type="image" src={pokebola} alt="img not found" onClick={(e) => handleSubmitSearch(e)}/>
                        </div>               
                    </div>             
            </nav>
        <div>        
 
        <div className="fondo">
            <div className="cards">                     
            {
                currentPokemons.length === 0 ? <h2 className="h2error">"There are no pokemon available. Try chaging your filters"</h2> : currentPokemons.map(e=> {
                    return (  
                        <Card name={e.name} key={e.id} image={e.image} str={e.str} 
                        types={e.types} spd={e.spd} def={e.def} hp={e.hp} id={e.id}/>   
                        )})   
                    }
            </div>
        </div >
        <div className="paginado">
            <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado}/>
        </div>

        </div>
        </div>

    )
}
