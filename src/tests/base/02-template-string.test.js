import '@testing-library/jest-dom'
import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar: Hola nombre!', () => {

        const nombre = 'Sebastian'

        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre + '!')
    })

// getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre

test('getSaludo debe de retornar Hola Carlos! si no hay argumento en el nombre', () => {
    
const saludo= getSaludo();
expect(saludo).toBe('Hola Carlos!')
console.log(saludo);
})


})
