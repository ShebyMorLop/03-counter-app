import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../bases/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('Debe de retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        console.log(user);

        expect(user).toEqual(userTest);
    })

    //getUsuarioActivo debe de retornar un objeto

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Sebas'

        const user = getUsuarioActivo(nombre)

        console.log(user);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})
