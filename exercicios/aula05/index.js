// parametros rest

function soma(...valores){
    let tam = 0
    for ( v of valores) {
        tam += v
    }
    return tam
    
}

console.log(soma(20,20)) 