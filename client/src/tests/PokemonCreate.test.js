import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/index'
import { render } from '@testing-library/react';
import App from '../App';
import PokemonCreate  from '../components/PokemonCreate';

describe('PokemonCreate', () => {

           //-----------------------label--------------------//
    it('El formulario debe tener un label que diga: "Name:"', () => {
      const { container } = render(<Provider store={store}><BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[0]
      expect(element.innerHTML).toBe('Name:');
  });
    it('El formulario debe tener un label que diga: "Health Points:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[1]
      expect(element.innerHTML).toBe('Health Points:');
    });
    it('El formulario debe tener un label que diga: "Strength:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[2]
      expect(element.innerHTML).toBe('Strength:');
    });
    it('El formulario debe tener un label que diga: "Defense:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[3]
      expect(element.innerHTML).toBe('Defense:');
    });
    it('El formulario debe tener un label que diga: "Speed:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[4]
      expect(element.innerHTML).toBe('Speed:');
    });
    it('El formulario debe tener un label que diga: "Height:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[5]
      expect(element.innerHTML).toBe('Height:');
    });
    it('El formulario debe tener un label que diga: "Weight:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[6]
      expect(element.innerHTML).toBe('Weight:');
    });
    it('El formulario debe tener un label que diga: "Image:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[7]
      expect(element.innerHTML).toBe('Image:');
    });
    it('El formulario debe tener un label que diga: "Types:"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('label')[8]
      expect(element.innerHTML).toBe('Types:');
    });
              //---------------------inputs------------------------//
    it('El formulario debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[0]
      expect(element.type).toBe('text');
      expect(element.name).toBe('name');
    });

    it('El formulario debe tener un input con name "hp" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[1]
      expect(element.type).toBe('number');
      expect(element.name).toBe('hp');
    });
    it('El formulario debe tener un input con name "str" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[2]
      expect(element.type).toBe('number');
      expect(element.name).toBe('str');
    });
    it('El formulario debe tener un input con name "def" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[3]
      expect(element.type).toBe('number');
      expect(element.name).toBe('def');
    });
    it('El formulario debe tener un input con name "spd" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[4]
      expect(element.type).toBe('number');
      expect(element.name).toBe('spd');
    });
    it('El formulario debe tener un input con name "height" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[5]
      expect(element.type).toBe('number');
      expect(element.name).toBe('height');
    });
    it('El formulario debe tener un input con name "weight" y type "number"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[6]
      expect(element.type).toBe('number');
      expect(element.name).toBe('weight');
    });
    it('El formulario debe tener un input con name "image" y type "text"', () => {
      const { container } = render(<Provider store={store}> <BrowserRouter><App/><PokemonCreate/></BrowserRouter></Provider>)
      const element = container.querySelectorAll('input')[7]
      expect(element.type).toBe('text');
      expect(element.name).toBe('image');
    });
})