
import {getSaludo} from '../../bases/template-string'

describe('Pruebas en template-string.js', ()=>{
    
    test('getSaludo debe de retornar hola Terry', () => {
        const nombre = 'Terry';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre);
    })
    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar Hola Carlos si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos')
    })
    
})