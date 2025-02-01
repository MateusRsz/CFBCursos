const div = [...document.querySelectorAll('div')]
div.map((div)=>{

    div.addEventListener('mouseenter', ()=>{
    div.style.backgroundColor = 'green'
    })

    div.addEventListener('mousedown', ()=>{
        div.style.backgroundColor = 'lightgray'
    })

    div.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = 'red'
        console.log(e)
    })

    div.addEventListener('mouseout', ()=>{
        div.style.backgroundColor = 'white'
    })

})


