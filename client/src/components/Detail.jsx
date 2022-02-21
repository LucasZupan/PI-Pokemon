import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from '../actions'

export default function Detail(props){
    
    const dispatch = useDispatch();
    const params = useParams();
    const myPokemon = useSelector((state) => state.pokemonDetail);
    console.log(myPokemon)

    useEffect(() => {
        dispatch(getPokemonById(params.id));      
    // eslint-disable-next-line      
    },[dispatch]);


return (
    <div>
        {
            myPokemon.length > 0 ?
            <div>
                <h1> {myPokemon[0].name[0].toUpperCase() + myPokemon[0].name.slice(1)} </h1>
                <img src= {myPokemon[0].image} alt="img not found" />
                <h2> Hp:  {myPokemon[0].hp} </h2>
                <h2> Strength:  {myPokemon[0].str} </h2>
                <h2> Defense:  {myPokemon[0].def} </h2>
                <h2> Speed:  {myPokemon[0].spd} </h2>
                <h2> Height:  {myPokemon[0].height} </h2>
                <h2> Weight:  {myPokemon[0].weight} </h2>
                <h2> Types:  {myPokemon[0].types.map((e, index)=> <p key={index}>{e}</p>)}</h2>
            </div> : <p>Loading...</p>
        }
        <Link to='/home'><button>Back</button></Link>
    </div>
)};

