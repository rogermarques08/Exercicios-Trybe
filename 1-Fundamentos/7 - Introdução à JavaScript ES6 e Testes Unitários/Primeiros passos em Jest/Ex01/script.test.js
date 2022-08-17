// 🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")


const {sum, myRemove, myFizzBuzz, searchEmployee} = require('./script')

// describe('1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
//     it('Teste se o retorno de sum(4, 5) é 9', () => {
//         expect(sum(4,5)).toBe(9)
//     });
//     it('Teste se o retorno de sum(0, 0) é 0', () => {
//         expect(sum(0,0)).toBe(0)
//     });
//     it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
//         expect(() => sum(4,'5')).toThrow()
//     });
//     it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
//         expect(() => sum(4,'5') ).toThrow('parameters must be numbers')
//     })
// });


//🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado


// describe('2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
//     })
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
//     })
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//         expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//     })
// })

// 🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// describe('Função FizzBuzz', () => {
//     it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(15)).toBe('fizzbuzz')
//     })
//     it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(9)).toBe('fizz')
//     })
//     it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(10)).toBe('buzz')
//     })
//     it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(17)).toBe(17)
//     })
//     it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz('NaN')).toBe(false)
//     })
// })


describe('Requisito Bonus', () => {

    it('Verifica se a função searchEmployee existe', () => {
        expect(typeof(searchEmployee)).toBe('function')
    })

    it('Verifica se retorna erro quando passamos um ID inexistente', () => {
        expect(() => searchEmployee('12345-6', 'firsName')).toThrow('ID não identificada')
    })

    it('Verifica se retorna erro quando passamos uma chave inexistente', () => {
        expect(() => searchEmployee('4456-4', 'colorEyes')).toThrow('Informação indisponível');
    })

    it('Verifica se retorna Ana quando o id é 8579-6 e a chave é firstName', () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
    })

    it('Verifica se retorna Jobs quando o id é 5569-4 e a chave é lastName', () => {
        expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs')
    })

    it('Verifica se retorna ["Context API", "RTL", "Bootstrap"] quando o id é 4456-4 e a chave é specialities', () => {
        expect(searchEmployee('4456-4', 'specialities')).toEqual(["Context API", "RTL", "Bootstrap"])
    })

    it('Verifica se retorna Paul quando o id é 4678-2 e a chave é firstName', () => {
        expect(searchEmployee('4678-2', 'firstName')).toBe('Paul')
    })
    

    



})