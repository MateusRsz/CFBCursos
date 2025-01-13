let h1Andp = [...document.getElementsByTagName('h1'),...document.getElementsByTagName('p')]
let h1andp = document.getElementsByTagName(`h1`)
h1Andp.forEach(element => {
    console.log(element)
    element.style.backgroundColor='red'
    for (i in element){
    console.log(i)
}

})


console.log(h1Andp)
console.log(h1andp)
 

















// let n1 = [1,2,3,4,5,6]

// let n2 = [22,3,34,55]
// let n3 = [...n1,...n2]

// console.log(n1)
// console.log(n2)
// console.log(n3)

// const jogador1 = {nome:"mateus", energia:100,vida:100,magia:340}
// const jogador2 = {nome:"rodolfo", energia:70,vida:100, poder:700}
// const jogador3 = {...jogador1,...jogador2}
// console.log(jogador3)
//ele vai  juntar os valores, caso seja reptido ele vai add o ultimo adicionado, e após isso ele vai add os valores incomum que no caso seria magia e poder

