const convertInt = (e)=>parseInt(e)
const dobrar = (e)=>e*2
let num = [2.4, 53.3, 4.5,9.2,34.4,423,32].map(convertInt).map(dobrar)
for (v of num){
console.log(v)
}
 const query = document.querySelectorAll('div')
 console.log(query)

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, (valor) => valor)
// console.log(val)


// let el = [...document.getElementsByTagName('div')]
// el.map( (el, i) =>{
//     el.style.color = 'blue'
// })
// console.log(el)


// const cursos = ['javascript', 'css', 'python', 'react']
// let c = cursos.map((elementes, indice)=>{
//     return `<div>${elementes}</div>`
// }) 
// console.log(c)