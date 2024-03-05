const form = document.getElementById('form-agenda')
const numeros = []
const nomes = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault() 
    adicionarLinhas()
    atualizaLinhas()
}) 

function adicionarLinhas() {
    const nomeContato = document.getElementById('nome-contatos')
    const numeroTelefone = document.getElementById('tel-contato')

    if (numeros.includes(numeroTelefone.value)) {
        alert(`Numero ${numeroTelefone.value} já inserido`)
    } else {
        numeros.push(numeroTelefone.value)
        nomes.push(nomeContato.value)

        let linha = `<tr>`
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroTelefone.value}</td>`
    linha += `</tr>`
    linhas += linha
    }

    nomeContato.value = ''
    numeroTelefone.value = ''
}

function atualizaLinhas() {
    const tbody = document.querySelector('tbody') 
    tbody.innerHTML = linhas 
}