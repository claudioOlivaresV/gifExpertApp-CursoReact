import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { mount, shallow } from 'enzyme'
import { GiftGridItem } from './GiftGridItem'

describe('Pruebas GiftGridItem', () => {

   
    
    const title = 'Un titulo';
    const id = 1;
    const url = {url: 'https://localhost'}
    
    const wrapper = shallow(<GiftGridItem id={id} title={title} url= {url} />)
    test('debe de mostrar el componente correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un titulo enviado', () => {
        
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url.url)
        expect(img.prop('alt')).toBe(title)
    });
  

});