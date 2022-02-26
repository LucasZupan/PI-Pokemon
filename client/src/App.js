import './App.css';
import {Route, Routes} from 'react-router-dom';
import  NotFound  from './components/NotFound.jsx'
import  LandingPage  from './components/LandingPage.jsx'
import  Home  from './components/Home.jsx'
import PokemonCreate from './components/PokemonCreate.jsx'
import Detail from './components/Detail';

function App() {
  return (             
    <Routes >
           <Route exact path= '/*' element={<NotFound/>}/>
           <Route exact path= '/' element={<LandingPage/>}/>
           <Route path = '/home/:id' element={<Detail/>}/>
           <Route path = '/home' element={<Home/>}/>           
           <Route path='/createpokemon' element= {<PokemonCreate/>}/>
       </Routes>          
         
    
  );
}

export default App;
