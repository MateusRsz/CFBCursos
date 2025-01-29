let div = [...document.getElementsByTagName('div')]
let cursos = []
console.log(cursos)
let btn = document.getElementById('btn').addEventListener('click', (e) => {
})
div.map((Element) => {
    Element.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'darkred'
        Element.addEventListener('mouseout', () => {
            e.target.style.backgroundColor = '#cfcfcf'
        })
    })
    Element.addEventListener('click', (e) => {
        cursos[e.target]
        e.target.style.backgroundColor = 'red'


    })

})
