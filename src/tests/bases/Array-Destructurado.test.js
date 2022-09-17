import { returnArray } from "../../bases/Array-Destructurado"

describe('Pruebas en Array-Destructurado.js', () => {
    test('Debe de retornar un Stringy un número', () => {
        const [country, number] = returnArray();
        // expect(array).toEqual(["Holanda",159])
        expect(country).toBe('Holanda');
        expect(typeof country).toBe('string');

        expect(number).toBe(159);
        expect(typeof number).toBe('number');

    })
    
})
