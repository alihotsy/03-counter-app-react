import { getHeroById, getHeroesByOwners } from "../../bases/export-import";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de héroes', () => {
    test('Debe de retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroById(id);
        
        const heroeData = heroes.find(n => n.id === id)
        expect(heroe).toEqual(heroeData);
    })
    test('Debe de retornar un undefined si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroById(id);
        
        expect(heroe).toBe(undefined);
    })
    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesData = heroes.filter(n => n.owner === owner)
        const heroesDC = getHeroesByOwners(owner);
        
        expect(heroesDC).toEqual(heroesData);
    })
    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesDC = getHeroesByOwners(owner);
        
        expect(heroesDC.length).toBe(2);
    })
})
