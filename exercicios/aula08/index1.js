let div = [...document.getElementsByTagName('div')]
let cursos = []

div.map((Element) => {
    Element.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'darkred'
        Element.addEventListener('mouseout', (e) => {
            e.target.style.backgroundColor = '#cfcfcf'
        })
    })

    Element.addEventListener('click', (e) => {
        
        cursos.forEach(element => {
            if (element == element){
                alert('n')
            }
             cursos.push(e.target.innerHTML)   
            })
        });
 
    })
let btn = document.getElementById('btn').addEventListener('click', (e) => {
})       
console.log(cursos)