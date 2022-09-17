import { getUser, getUsuarioActivo } from "../../bases/funciones"

describe('Pruebas en funciones.js',()=>{
    test('getUser Debe de retornar un objeto', () => {
     const userTest = {
        iud: 'ABC123',
        username: 'El_Papi1502'
    }
     const user = getUser();
     expect(user).toEqual(userTest);
    })
    // getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Terry';

        const usuario = getUsuarioActivo('Terry')
        
        expect(usuario).toEqual({
            uid: 'ABC567',
            username: nombre
        })
        
    })
})