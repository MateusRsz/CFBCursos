function* contador(){
    let i = 0
    while (true){
        yield i++
} 
    }
   
let n = contador()
for (v of n){
    console.log(v)
}










// function* perguntas(){
//     const nome= yield "qual seu nome?"
//     const esporte= yield"qual seu esporte favorito?"
//     return `Olá ${nome}, seu esporte favortio é ${esporte}`
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next("Mateus").value)
// console.log(itp.next("futebol").value)





















// function* cores(){
//     yield 'vermelho'
//     yield 'verde'
//     yield 'azul'
//     yield "acabou meu filho"
//     yield 'ja disse que ACABOU'
//     yield 'chatão vc é'
// }

// let itc = cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value) 
// console.log(itc.next().value)


















// const soma = (...valores) => {

//     const somar = val =>{
//         let res=0
//         for (v of val){
//             res+=v
//         }
//         return res
//     }
    
//     return somar(valores)
// }
// console.log(soma(2,23,32,3,33))