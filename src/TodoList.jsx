import React, {useState} from 'react'
import TodoItem from './ToDoItem';

export default function TodoList() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Attend CODELancashire',
            completed: true
        },
        {
            id: 2,
            text: 'Finish Assignment',
            completed: false
        }

    ]);

    const [text, setText] = useState('');

    function addTask(text){
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask])
        setText('');
    }
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
        if (task.id === id) {
        return {...task, completed: !task.completed};
        } else {
        return task;
        } 
        }));
        }
       return (
        <div className="todo-list">
            <div class="flex justify-center mb-4">
                <img src='https://clipart-library.com/img/1687861.png' class="h-16 w-16"/><h1 className="Title" class="text-emerald-600 font-extrabold text-center text-7xl ml-3 mr-3"> To Do List!</h1><img src='https://clipart-library.com/img/1687861.png' class="h-16 w-16"/> 
            </div>
            <div className="items-layout" class="flex flex-col items-center justify-center">
        {tasks.map(task => (
        <TodoItem
        key={task.id} 
        task={task}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted} 
        />
        ))}
       <input class="bg-rose-200 w-6/12 -ml-2 h-16 text-4xl"
        value={text}
        onChange={e => setText(e.target.value)} 
        />       <button onClick={() => addTask(text)} class="text-white bg-rose-400 hover:bg-rose-500 focus:ring-4 focus:ring-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2">Add</button>
</div>
        
        </div>
        );
       }
