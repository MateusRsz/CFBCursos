let div = [...document.getElementsByTagName('div')]

let main = document.getElementById('cx2')
let p = document.createElement('p')
var teste = ''
p.textContent = teste
main.appendChild(p)


div.map((Element) => {
    Element.addEventListener('click', (e) => {
        e.target.classList.toggle('selecionado')
        
    })
})

let btn = document.getElementById('btn').addEventListener('click', () => {
    let selecionado = [...document.querySelectorAll('.selecionado')]
    teste = selecionado.innerHTML
    console.log()
})

