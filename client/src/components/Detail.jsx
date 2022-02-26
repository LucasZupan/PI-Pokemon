import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from '../actions'
import '../styles/PokemonDetail.css'
import pokemonLogo from '../img/pokemonLogo.png';


export default function Detail(){
    
    const dispatch = useDispatch();
    const params = useParams();
    const myPokemon = useSelector((state) => state.pokemonDetail);
    

    useEffect(() => {
        dispatch(getPokemonById(params.id));      
    // eslint-disable-next-line      
    },[dispatch]);
    

return (
    <div>
        <nav className="navBar">
            <Link to= '/home'><img src={pokemonLogo} className='imgHome' alt="Img not found"/></Link> 
            <Link to= '/home'><button className="buttonNav">Back home</button></Link>
        </nav>
        {
            myPokemon.length > 0 ?
            <div className="container">
                <h1 className="h1Title">{myPokemon[0].name}</h1>                    
                {/* <span className="h2Title">ID: {myPokemon[0].id}</span>*/}
                <div className="detail-content">                    
                    <div className="detail-form">
                        {/* <div className="detail-row">
                                <div className="detail-group">
                                <label>Id: {myPokemon[0].id} </label>                                
                                </div> 
                        </div> */}
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Health Points: {myPokemon[0].hp} points</label>                                
                                </div>                               
                        </div>
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Strength: {myPokemon[0].str} points</label>                                
                                </div>                               
                        </div>
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Defense: {myPokemon[0].def} points </label>                                
                                </div>                               
                        </div>
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Speed: {myPokemon[0].spd} points </label>                                
                                </div>                               
                        </div>
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Height: {myPokemon[0].height}" </label>                                
                                </div>                               
                        </div>
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Weight: {myPokemon[0].weight} pounds </label>                                
                                </div>                               
                        </div>
                        <div className="detail-row">
                                <div className="detail-group">
                                <label>Types: {myPokemon[0]?.types.length === 1 ? myPokemon[0].types[0] : `${myPokemon[0].types[0]} & ${myPokemon[0].types[1]}`} </label>                                
                                </div>                               
                        </div>
                    </div>
                    <div className="detail-img">
                        <img className= "size-img" src={myPokemon[0].image} alt="Img not found"/>
                    </div>
                </div>
            </div>: <p>Loading...</p>         
        }
         <div className="footer"></div>   
    </div>
)};

