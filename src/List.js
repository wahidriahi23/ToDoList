
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './list.css';



function List() {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState(''); 
    const [tasks, setTasks] = useState([]); 

    const handleAddTask = () => {
        if (taskName.trim() !== '' && taskDescription.trim() !== '') {
            const newTask = {
                name: taskName,
                description: taskDescription
            };
            setTasks([...tasks, newTask]); 
            setTaskName(''); 
            setTaskDescription(''); 
        }
        
    };
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };
    return (
        <div  className='container'>
           <InputGroup className="form__group">
                <InputGroup.Text  >Task Name</InputGroup.Text> <br/>
                <Form.Control className='input_text'
                    aria-label="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <InputGroup.Text  >Task Description</InputGroup.Text> <br/>
                <Form.Control 
                    aria-label="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </InputGroup>
            <Button variant="primary" onClick={handleAddTask} style ={{marginLeft:"20px"}} >Add</Button>
            <div className='todo'>
                <h3 style ={{color:"#1b6dc2" , fontWeight:"bold", marginTop:"50px", right:"400px"}}>Tasks:</h3>
                <div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.name}:</strong> {task.description}
                            <Button variant="danger" onClick={() => handleDeleteTask(index)}>
                         Delete
                     </Button>
                        </li>
                    
                         
                    ))}
                </ul>
                </div>
               
            </div>
        </div>
    );
}

export default List;
