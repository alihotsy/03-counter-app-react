import { getHeroByIdAsync } from "../../bases/Promesa";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroByIdAsync debe de retornar un Héroe async', (done) => {
        const id = 1;
        getHeroByIdAsync(id)
         .then(heroe => {
             expect(heroe).toBe(heroes.find(n => n.id === id));
             done()
         });
    });
    test('Debe obtener un error si el héroe por id no existe', (done) => {
        const id = 10

        getHeroByIdAsync(id)
         .catch(error =>{
             expect(error).toBe(`This hero doesn't exist!`);
             done();
         });
    });
})
