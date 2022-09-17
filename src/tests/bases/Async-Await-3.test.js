import { getImage } from "../../bases/Async-Await-3"

describe('Pruebas con Async-Await y Fetch', () => {
    test('Debe de retornar el url de la imagen', async() => {
        const url = await getImage();

        expect(typeof url).toBe('string')
    })
    
})
