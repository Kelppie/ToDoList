import React from 'react'

export default function TodoItem({ task, deleteTask, toggleCompleted}) {

    function handleChange(){
        toggleCompleted(task.id);
    }

  return (
    <div className="todoItem" class="text-emerald-600 bg-emerald-600 w-6/12 h-56 m-3 rounded-3xl shadow-lg ml-0" >
      <div class="flex justify-center bg-lime-200">
        <p class="text-4xl py-2">Task Complete:</p>
        <input type="checkbox" checked={task.completed} onChange={handleChange} class="w-9 h-9 mt-3 ml-2 accent-emerald-600"></input>
    </div>
    <p class="text-lime-200 text-center text-5xl mt-7">{task.text}</p>
    <button onClick={() => deleteTask(task.id)} class="text-white bg-rose-400 hover:bg-rose-500 focus:ring-4 focus:ring-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 relative float-end inset-5 ">
    X
    </button>
    </div>
  )
}
