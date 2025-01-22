import React, {useState} from 'react'


function ToDoApp(){
  const [tasks, setTasks] = useState(['make bed', 'have shower', 'make food']);
  const [newTasks, setNewTask] = useState('');
  const [completedTasks, setCompletedTasks] = useState([])





  function handleInputChange(event){
    setNewTask(event.target.value)

  
  }

  function addTask(){
    if(newTasks.trim() === '') return;
    setTasks(t=>[...t,newTasks])
    setNewTask('')

  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i)=> i !== index)
    setTasks(updatedTasks)
  }

  function isCompleted(index){
    /*const completedT = tasks.filter((_, i)=> i === index)
    setCompletedTasks(c =>[...c,completedT])

    const updatedTasks = tasks.filter((_, i)=> i !== index)
    setTasks(updatedTasks)*/
    const completedT = tasks[index]
    setCompletedTasks(c=>[...c, completedT])
    deleteTask(index)

    
  }



  return(<div>
    <h1>TO DO APP</h1>
    <input value = {newTasks} onChange={handleInputChange}type="text" />
    <button onClick={addTask}>Add task</button>
    <ol>
      {tasks.map((task, index)=>
         <li key={index}>{task}
         <button onClick={()=>deleteTask(index)}>Delete</button>
         <button onClick={()=>isCompleted(index)}>Task Completed</button>
         
         </li>)}

         

    </ol>
    <h1>Completed Tasks</h1>
    <ol>
     
      {completedTasks.map((comp, index)=> 
      <li key={index}>{comp}</li>)}
    </ol>
  </div>)



}

export default ToDoApp
