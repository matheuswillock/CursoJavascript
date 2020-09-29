// Criando a function calcular()

// Tipo {btn: ação(Somar, Dividir, subtrair e multiplicar) || valor(0,1,2,3,4,5,6,7,8,9...)}
// Valor {identificação dos btns('=', '+', '-', '*', '/', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9...)}

function calcular(tipo, valor) {
    // atribuir a chamada da function atavés do evento onclick.
    
    // implementar uma lógica que irárealizar as operações matemáticas.

    if (tipo === 'acao') {

        if (valor === 'c') {
            // Limpar o visor.
            document.getElementById('resultado').value = ''
        }

        else if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {
            document.getElementById('resultado').value += valor 
        }

        else if (valor === '=') {
            var calc = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = calc
        }

    } else if (tipo === 'valor') {
      document.getElementById('resultado').value += valor
    }
}


