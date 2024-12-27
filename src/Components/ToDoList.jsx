import React, { useState } from 'react'

export default function ToDoList() {

  const [task,setTask]=useState([]);
  const [newTask,setNewTask]=useState("");

  function handleInputChange(e){
    setNewTask(e.target.value);

  }
  function addTask(e){

    e.preventDefault()
    if(newTask.trim()!==""){

      setTask(t=>[...t,newTask]);
      setNewTask("");
    }


  }
  function deleteTask(index){

    const updatedTask =task.filter((element,i)=>i!==index);
    setTask(updatedTask);

  }
  function taskUp(index){

    if(index>0){
      const updatedTask=[...task];
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
      setTask(updatedTask);

    }

  }
  function taskDown(index){
    if(index<task.length-1){
      const updatedTask = [...task];
    [updatedTask[index+1],updatedTask[index]]=[updatedTask[index],updatedTask[index+1]];
    setTask(updatedTask);
    }
    

  }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input
        type='text'
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleInputChange}
        >
        </input>
        <button 
        className='add-button'
        onClick={addTask}
        >Add Task</button>
      </div>
      <ol>
        {task.map((task,index)=>
        <li key={index}>
          <span className='text'>{task}</span>
          <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
          <button className='move-btn' onClick={()=>taskUp(index)}>Task Up</button>
          <button className='move-btn' onClick={()=>taskDown(index)}>Task Down</button>
        </li>
       
      )}
      </ol>


    </div>
  )
}
