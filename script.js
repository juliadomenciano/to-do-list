let input = document.getElementById('texto-tarefa')
let criarTarefa = document.getElementById('criar-tarefa')
let listaTarefas = document.getElementById('lista-tarefas')
let apagaTudo = document.getElementById('apaga-tudo')
let RemoveF = document.getElementById('remover-finalizados')
/* let li = document.querySelectorAll('.list-item') */

criarTarefa.addEventListener('click', addTarefa)
listaTarefas.addEventListener('click', select)
listaTarefas.addEventListener('dblclick', cross)
apagaTudo.addEventListener('click', removeList)
RemoveF.addEventListener('click', removeCrossed)
input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        criarTarefa.click()
    }
})

function addTarefa(){
    let li = document.createElement('li')
    li.classList.add('list-item')
    li.innerHTML = input.value
    listaTarefas.appendChild(li)
    input.value = ''
}




/* function select(event){

    let selected = document.querySelector('.selected')
    console.log(selected)
    selected.classList.remove('selected')
    event.target.classList.add('selected')
} */

function select(event){
    if(event.target.classList !== 'selected'){
            let sib = event.target.parentElement.children
        for(let i of sib){
            i.classList.remove('selected')
    }
        event.target.classList.add('selected')
    }
    else{
        
        event.target.classList.toggle('selected')
    
    }
}





function cross(event){
    event.target.classList.toggle('completed')  
}

function removeList(){
    let item = document.querySelectorAll('.list-item')
    for(let i of item){
        i.remove('.list-item')
    }
}

function removeCrossed(){
    let item = document.querySelectorAll('.completed')
    console.log(item)
    for(let i of item){
        i.remove('completed')
    }
}