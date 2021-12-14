const input = document.getElementById('texto-tarefa')
const criarTarefa = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const apagaTudo = document.getElementById('apaga-tudo')
const RemoveF = document.getElementById('remover-finalizados')
const saveList = document.getElementById('salvar-tarefas')
const removeSelected = document.getElementById('remover-selecionado')
const moveUp = document.getElementById('mover-cima')
const moveDown = document.getElementById('mover-baixo')

criarTarefa.addEventListener('click', addTarefa)
listaTarefas.addEventListener('click', select)
listaTarefas.addEventListener('dblclick', cross)
apagaTudo.addEventListener('click', removeList)
RemoveF.addEventListener('click', removeCrossed)
saveList.addEventListener('click', save)
removeSelected.addEventListener('click', removeSelectedItem)
moveUp.addEventListener('click', moveSelectedUp)
moveDown.addEventListener('click', moveSelectedDown)

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
    for(let i of item){
        i.remove('completed')
    }
}

function save(){
    let items = document.querySelectorAll('.list-item')
    let listObj = []
    
    for(let i = 0; i < items.length; i++){
        let obj = {'item': items[i].innerHTML, 'class':items[i].classList}
        listObj.push(obj)
        
    }
    localStorage.setItem('list', JSON.stringify(listObj))


    
}
window.onload = function(){
    for(let i = 0; i < localStorage.length; i++){
        let list = JSON.parse(localStorage.getItem('list'))
        for(let i = 0; i < list.length;i++){
            let item = document.createElement('li')
            item.innerHTML = list[i].item
            let itemClass =  list[i].class
            for(let c = 0; c < itemClass[0].length;c++){
                let classL = itemClass[c]
                item.classList.add(classL)
            }
            listaTarefas.appendChild(item)
        }
    }
}

function removeSelectedItem(){
    let selectedItem = document.querySelector('.selected').remove()
    
}

function moveSelectedUp(){
    let selected = document.getElementById('lista-tarefas').children

    for(let i = 0; i < selected.length; i++){

        if(selected[i].classList.contains('selected') && i > 0){
            let move = selected[i]
            move.parentElement.insertBefore(move, move.previousSibling)
        }
    }
}


function moveSelectedDown(){
    let selected = document.getElementById('lista-tarefas').children

    for(let i = 0; i < selected.length; i++){

        if (selected[i].classList.contains('selected') && i === 0){
            let sib = selected[i].nextSibling
            listaTarefas.insertBefore(sib, selected[i])
            break;
           
        }

        else if(selected[i].classList.contains('selected') && i !== 0 && i !== selected.length  - 1){
            let move = selected[i].nextSibling
            listaTarefas.insertBefore(move, selected[i])
            break;
            
        }
        
    } 
}