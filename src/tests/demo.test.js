describe('Pruebas en e archivo demo.test.js', () => {
    test('Deben de ser iguales los string', () => {
        //1.Inicializacion
        const mensaje = 'Hola mundo'

        //2. EStimulo
        const mensaje2 = `Hola mundo`;

        //3.Observar el comportamiento
        expect(mensaje).toBe(mensaje2);

    })

})


