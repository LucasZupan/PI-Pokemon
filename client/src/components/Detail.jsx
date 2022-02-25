import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from '../actions'
import '../styles/PokemonDetail.css'
import pokemonLogo from '../img/pokemonLogo.png';
export default function Detail(props){
    
    const dispatch = useDispatch();
    const params = useParams();
    const myPokemon = useSelector((state) => state.pokemonDetail);
    

    useEffect(() => {
        dispatch(getPokemonById(params.id));      
    // eslint-disable-next-line      
    },[dispatch]);

    console.log(myPokemon[0]?.types.length)

return (
    <div>
          {/* <nav className="navBar">
                <Link to= '/home'><img src={pokemonLogo} className='imgHome' alt="Img not found"/></Link> 
                <Link to= '/home'><button className="buttonNav">Back home</button></Link>
            </nav>
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                    <form class="register-form" id="register-form" onSubmit={(e)=> handleSubmit(e)}>
                        <h2 className="h2Title">POKEMON CREATOR</h2>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Name: </label>
                                <input type="text" value={input.name} name="name" 
                                placeholder='Insert name'onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.name && <div className="form-errors">{errors.name}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Health Points: </label>
                                <input type="number" value={input.hp} name="hp" 
                                placeholder='0' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.hp && <div className="form-errors">{errors.hp}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Strength: </label>
                                <input type="number" value={input.str} name="str" 
                                placeholder='0' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.str && <div className="form-errors">{errors.str}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Defense: </label>
                                <input type="number" value={input.def} name="def" 
                                placeholder='0' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.def && <div className="form-errors">{errors.def}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Speed: </label>
                                <input type="number" value={input.spd} name="spd" 
                                placeholder='0' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.spd && <div className="form-errors">{errors.spd}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Height: </label>
                                <input type="number" value={input.height} name="height" 
                                placeholder='0' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.height && <div className="form-errors">{errors.height}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Weigth: </label>
                                <input type="number" value={input.wuight} name="weight" 
                                placeholder='0' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.weight && <div className="form-errors">{errors.weight}</div>}   
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                            <label>Image: </label>
                                <input type="text" value={input.image} name="image" 
                                placeholder='Insert image URL' onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                {errors.image && <div className="form-errors">{errors.image}</div>}   
                            </div>
                        </div>
                        <div className="form-row"><div className="form-group"><label>Type: </label></div></div>
                        <div className="form-row-cb">    
                            <div className="form-group-cb">                            
                                {
                                    allTypes.map((e)=> {
                                        return (                                        
                                        <div className="div-cb" >                                            
                                        <input className="inpCheckbox" type="checkbox" name={e.name} value={e.name}  
                                        onChange={(e) => handleCheckBoxOnChange(e)}></input>
                                        <label>{e.name}</label>
                                        </div>
                                        
                                    )})
                                }
                            </div>
                        <div className="form-errors-cb">{errors.types && <p>{errors.types}</p>}   </div>
                        </div>
                        <div className="form-row-submit">
                           <button type="submit" className="buttonSubmit" disabled={!isEnabled}>Create your Pokemon</button>
                        </div>
                    </form>
                    </div>
                    <div className="signup-img">
                    <img src={professorOak} alt="Img not found"/>
                    </div>
                </div>
            </div>
            <div className="footer"></div>    */}


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

