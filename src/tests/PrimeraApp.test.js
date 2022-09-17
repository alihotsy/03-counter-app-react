import React from 'react';
// import { render } from '@testing-library/react'
import FirstApp from '../PrimeraApp'
import {shallow} from 'enzyme';

describe('Pruebas en <FirstApp />', () => {
    // test('Debe de mostrar el mensaje "Hola, soy Terry!"', () => {
    //     const saludo = 'Hola, soy Terry!'
    //     const {getByText} = render(<FirstApp saludo = {saludo} />)
    //     expect(getByText(saludo +"@")).toBeInTheDocument();
    // })
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
         const saludo = 'Hola, soy Terry!';
         const wrapper = shallow(<FirstApp saludo = {saludo} />);
         expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar el subtítulo enviado por props', () => {
        const saludo = 'Hola, soy Terry!';
        const subtitle = 'Soy un subtítulo';
        const wrapper = shallow(<FirstApp saludo = {saludo} subtitle = {subtitle} />);

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitle)
    })
    
    
})
