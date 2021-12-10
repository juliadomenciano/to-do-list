let input = document.getElementById('texto-tarefa')
let criarTarefa = document.getElementById('criar-tarefa')
let listaTarefas = document.getElementById('lista-tarefas')
let apagaTudo = document.getElementById('apaga-tudo')
let RemoveF = document.getElementById('remover-finalizados')

criarTarefa.addEventListener('click', addTarefa)
/* listaTarefas.addEventListener('click', select) */
listaTarefas.addEventListener('dblclick', cross)
apagaTudo.addEventListener('click', removeList)
RemoveF.addEventListener('click', removeCrossed)


function addTarefa(){
    let li = document.createElement('li')
    li.classList.add('list-item')
    li.classList.add('selected')
    li.innerHTML = input.value
    listaTarefas.appendChild(li)
    input.value = ''
}

/* let listItem = document.querySelector('list-item') */

/* function select(event){
    let item = document.querySelectorAll('li')
    for(let i in item){

    }
   
    else{
        event.target.classList.toggle('.selected')
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
    
} */

function cross(event){
    event.target.classList.toggle('completed')  
}

function removeList(){
    let item = document.querySelectorAll('.list-item')
    for(let i in item){
        item[i].remove()
    }
}

function removeCrossed(){
    let item = document.querySelectorAll('.completed')
    console.log(item)
    for(let i in item){
        item[i].remove()
    }
}