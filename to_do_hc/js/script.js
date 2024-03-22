// função de adcionar task
function addTask(){
    const taskTitle = document.querySelector("#task-title").value

    if(taskTitle){
        //clonar template
        const template = document.querySelector(".template")
        const newTask = template.cloneNode(true)

        //adcionando titulo
        newTask.querySelector(".task-title").textContent = taskTitle

        // removendo classes desnecessarias 
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        // adicionando task a lista
        taskList = document.querySelector(".tasks-list")
        taskList.appendChild(newTask)

        // evento remover task
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this)
        })

        // evento concluir tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            concluirTask(this)
        })

        // limpar input
        document.querySelector("#task-title").value = ""

    }
}

// função remover tarefa
function removeTask(task){
    task.parentNode.parentNode.remove(true)
}

// função concluir tarefa
function concluirTask(task){
    const taskConcluida = task.parentNode.parentNode
    taskConcluida.classList.toggle("done")
}

//evento de adicionar task
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();
})