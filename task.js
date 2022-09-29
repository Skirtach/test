const input = document.querySelector('.tasks__input');
const btn = document.getElementById('tasks__add');
const list = document.querySelector('.tasks__list');
const completed = document.getElementById('tasks__completed');
const activ = document.getElementById('tasks__activ');
const all = document.getElementById('tasks__all');

console.log(input);


btn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(input.value.trim().length > 0) {
        const task = document.createElement('div');
        task.className = 'task';

        task.innerHTML = `
        <div class="checkbox">
        <input type="checkbox" class="checkbox_task" name="">
        </div>
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        `
        list.append(task);

        const remove_btn = task.querySelector('.task__remove');

        remove_btn.addEventListener('click', (e)=> {
            e.target.closest('.task').remove()
        })

        input.value = '';
        const checkbox = task.querySelector(".checkbox_task");
        checkbox.addEventListener('change', ()=>{
            const cross = task.querySelector('.task__title')
            if(checkbox.checked){
                
                cross.classList.add('liner');       
            } else {      
                cross.classList.remove('liner');
            }
            
        })

        completed.addEventListener('click', (e)=>{
            e.preventDefault();
            if(!checkbox.checked) {
                task.classList.add('hidden')
            } else {
                task.classList.remove('hidden');
                  
            }
        })

        all.addEventListener('click', (e)=>{
            e.preventDefault();
            task.classList.remove('hidden');
        })
        activ.addEventListener('click', (e)=> {
            if(checkbox.checked){
               task.classList.add('hidden');
            }
            else {
                task.classList.remove('hidden');
                
            }
        })

        
        
    } else {
        console.log('Введите пожалуйста текст задачи')
    }
})


