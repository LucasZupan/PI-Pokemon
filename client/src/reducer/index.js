import { GET_POKEMONS, GET_TYPES, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID, POST_POKEMON, ORDER_BY_DEFAULT, ORDER_BY_NAME, ORDER_BY_SRENGTH, FILTER_ALL } from "../actions/constants";

const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    types: [],
    pokemonDetail: []
}

function rootReducer (state = initialState, action) {  
   switch(action.type){
       case GET_POKEMONS:
           return{
               ...state,
               pokemons: action.payload,
               pokemonsCopy: action.payload,               
           };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            };   
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: [action.payload]
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonDetail: [action.payload]
            };
        case POST_POKEMON: 
            return {
                ...state
            }
        // case FILTER_BY_TYPE:
        //     const allPokemons = state.pokemonsCopy
        //     const typeFilter = action.payload === 'all' ? allPokemons : allPokemons.filter(e => e.types.includes(action.payload))
        //     return {
        //         ...state,
        //         pokemons: typeFilter
        //     };
        // case FILTER_CREATED:            
        //     const allPokemons2 = state.pokemonsCopy;
        //     const createdFilter = action.payload === 'db' ? allPokemons2.filter(e => e.createdInDb) : allPokemons2.filter(e => !e.createdInDb);
        //     return {
        //         ...state,
        //         pokemons: action.payload === "all" ? allPokemons2 : createdFilter
        //     }
        case FILTER_ALL:
            console.log(action.payload);
            const allPokemons3 = state.pokemonsCopy
            const filterType = action.payload.type  === 'all' ? allPokemons3 : allPokemons3.filter(e => e.types.includes(action.payload.type));
            const filterOrigin = action.payload.origin === 'db' ? filterType.filter(e => e.createdInDb) : filterType.filter(e => !e.createdInDb);
            return {
                ...state,
                pokemons: action.payload.origin === "all" ? filterType : filterOrigin
            }
        case ORDER_BY_DEFAULT:
            let dbArray = state.pokemons.filter(e => e.id.length > 5);            
            let apiArray = state.pokemons.filter(e => typeof(e.id) === "number");           
            let defaultArr = apiArray.sort(function(a,b){
                    if (a.id > b.id){
                        return 1;
                    }
                    if (b.id > a.id){
                        return -1;
                    }
                    return 0;
                })
            defaultArr = [...dbArray, ...apiArray]                        
            return {
                ...state,
                pokemons: defaultArr
            }  
            

        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ?
                state.pokemons.sort(function(a,b){
                    if (a.name > b.name){
                        return 1;
                    }
                    if (b.name > a.name){
                        return -1;
                    }
                    return 0;
                }):
                state.pokemons.sort(function(a,b){
                    if (a.name > b.name){
                        return -1;
                    }
                    if (b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: sortedArr
            }     
        case ORDER_BY_SRENGTH:
            let sortedArrStr = action.payload === 'strMax' ?
                state.pokemons.sort(function(a,b){
                    return b.str - a.str
                }):
                state.pokemons.sort(function(a,b){
                    return a.str - b.str
                });
                return {
                    ...state,
                    pokemons: sortedArrStr
                }  
        default: return state
   } 

}

export default rootReducer;