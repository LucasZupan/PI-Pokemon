import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {postPokemon, getTypes} from '../actions'
import pokemonLogo from '../img/pokemonLogo.png';
import professorOak from '../img/professorOak.png';
import '../styles/PokemonCreate.css'

function validate(input) {
    let errors = {};    
    let nameRequire = /^[a-zA-Z]+$/;
    let numbers = /^[0-9\b]+$/;
    let validateUrl = /\.(gif|jpeg|jpg|png)$/i;

    if(!input.name){
        errors.name = 'Name is required';
    }else if(input.name.length < 3 || input.name.length > 16){ 
        errors.name = "Name must be between 3-16 letters"    
    }else if(!nameRequire.test(input.name)){
         errors.name ="Name must contain only letters"
    };
     if(!input.hp || input.hp === 0){
        errors.hp = "Health is required";
    }else if(!numbers.test(input.hp)){
        errors.hp = "Health must be a positive integer"
    };
     if(!input.str || input.str === 0){
        errors.str = "Strength is required";
    }else if(!numbers.test(input.str)){
        errors.str = "Strength must be a positive integer"
    };
     if(!input.def || input.def === 0){
        errors.def = "Defense is required";
    }else if(!numbers.test(input.def)){
        errors.def = "Defense must be a positive integer"
    }
     if(!input.spd || input.spd === 0){
        errors.spd = "Speed is required";
    }else if(!numbers.test(input.spd)){
        errors.spd = "Speed must be a positive integer"
    };
    if(!input.height || input.height === 0){
       errors.height = "Height is required";
   }else if(!numbers.test(input.height)){
       errors.height = "Height must be a positive integer"
   };
   if(!input.weight || input.weight === 0){
      errors.weight = "Weight is required";
  }else if(!numbers.test(input.weight)){
      errors.weight = "Weight must be a positive integer"
  };
   if(!input.image){
      errors.image = "Image is required";
  }else if(!validateUrl.test(input.image)){
      errors.image = "Image must be a validate URL"
  };
   if(input.types.length === 0){
      errors.types = "Type is required";
  }else if(input.types.length > 2){
      errors.types = "A pokemon can only contain 1 or 2 types"
  };
   
    return errors;
}

export default function PokemonCreate(){


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allTypes = useSelector((state) => state.types);        
    const [errors, setErrors] = useState({});    
    const [input, setInput] = useState({
        name: '',
        hp: 0,
        str: 0,
        def: 0,
        spd: 0,
        height: 0,
        weight: 0,
        image: '',
        types: []
    });
    const isEnabled = Object.keys(errors).length === 0 && input.name !== '';
    
    function handleChange(e) {        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));        
    };
    
    function handleCheckBoxOnChange(e) {      
        let clickedType = allTypes.filter(el => e.target.value === el.name ).map(el => el.id)            
        if(e.target.checked){
            setInput({
                ...input,
                types: [...input.types, ...clickedType]
            })
            setErrors(validate({
                ...input,
                types: [...input.types, ...clickedType]
            }));   
        }else{
            setInput({
                ...input,
                types: input.types.filter(e=> e !== clickedType[0] )
            })
            setErrors(validate({
                ...input,
                types: input.types.filter(e=> e !== clickedType[0] )
            })); 
        }        
    };
    
    function handleSubmit(e) {
        e.preventDefault();    
        dispatch(postPokemon(input));
        alert("Pokemon created");
        setInput({
            name: '',
            hp: 0,
            str: 0,
            def: 0,
            spd: 0,
            height: 0,
            weight: 0,
            image: '',
            types: []  
        });
        navigate('/home');
    }
    
    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);


    // const divStyle = {
    //     background: `${typeColor[e.name]}`
    // };
    
    return (
        <div>
            <nav className="navBar">
                <Link to= '/home'><img src={pokemonLogo} className='imgHome' alt="Img not found"/></Link> 
                <Link to= '/home'><button className="buttonNav">Back home</button></Link>
            </nav>
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                    <form class="register-form" id="register-form" onSubmit={(e)=> handleSubmit(e)}>
                        <h2 className="h2Title">CREATE YOUR POKEMON</h2>
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
                        <div className="form-submit">
                            <button type="submit" disabled={!isEnabled}>Create your Pokemon</button>
                        </div>
                    </form>
                    </div>
                    <div className="signup-img">
                    <img src={professorOak} alt="Img not found"/>
                    </div>
                </div>
            </div>

















            {/* <form onSubmit={(e)=> handleSubmit(e)}>
                
                <div>
                    <label>Healh Points: </label>
                    <input type="number" value={input.hp} name="hp" onChange={(e) => handleChange(e)}/>
                    {errors.hp && <p>{errors.hp}</p>}
                </div>
                <div>
                    <label>Strength: </label>
                    <input type="number" value={input.str} name="str" onChange={(e) => handleChange(e)}/>
                    {errors.str && <p>{errors.str}</p>}
                </div>
                <div>
                    <label>Defense: </label>
                    <input type="number" value={input.def} name="def" onChange={(e) => handleChange(e)}/>
                    {errors.def && <p>{errors.def}</p>}
                </div>
                <div>
                    <label>Speed: </label>
                    <input type="number" value={input.spd} name="spd" onChange={(e) => handleChange(e)}/>
                    {errors.spd && <p>{errors.spd}</p>}
                </div>
                <div>
                    <label>Height: </label>
                    <input type="number" value={input.height} name="height"onChange={(e) => handleChange(e)} />
                    {errors.height && <p>{errors.height}</p>}
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="number" value={input.weight} name="weight" onChange={(e) => handleChange(e)}/>
                    {errors.weight && <p>{errors.weight}</p>}
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" value={input.image} name="image" placeholder='Insert image Url' onChange={(e) => handleChange(e)}/>
                    {errors.image && <p>{errors.image}</p>}
                </div>
                <div>
                    <label>Types: </label><br></br>
                    {
                        allTypes.map((e)=> {
                            return (
                            <>
                            <input type="checkbox" name={e.name} value={e.name}  
                            onChange={(e) => handleCheckBoxOnChange(e)}></input>
                            <label>{e.name}</label><br></br>
                            </>
                        )})
                    }
                    {errors.types && <p>{errors.types}</p>}                    
                </div>
                <button type="submit" disabled={!isEnabled}>Create your Pokemon</button>
            </form>*/}
            <div className="footer"></div>            
        </div>        
    )
}

