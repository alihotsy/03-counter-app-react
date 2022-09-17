
const nombre = 'Terry'
const apellido = 'Crews'

const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = 'Carlos'){
    return `Hola `+nombre;
}