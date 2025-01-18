const cursos = ['javascript', 'css', 'python', 'react']
let c = cursos.map((elementes, indice)=>{
    return `<div>${elementes}</div>`
}) 

console.log(c)