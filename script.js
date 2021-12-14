const input = document.getElementById('texto-tarefa')
const criarTarefa = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const apagaTudo = document.getElementById('apaga-tudo')
const RemoveF = document.getElementById('remover-finalizados')
const saveList = document.getElementById('salvar-tarefas')
const removeSelected = document.getElementById('remover-selecionado')

criarTarefa.addEventListener('click', addTarefa)
listaTarefas.addEventListener('click', select)
listaTarefas.addEventListener('dblclick', cross)
apagaTudo.addEventListener('click', removeList)
RemoveF.addEventListener('click', removeCrossed)
saveList.addEventListener('click', save)
removeSelected.addEventListener('click', removeSelectedItem)

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
    console.log(item)
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