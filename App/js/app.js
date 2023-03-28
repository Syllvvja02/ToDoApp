import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {getTasks} from "../API/tasks";
import NewTask from "../Components/NewTask";
import Task from "../Components/Task"
import {removeTask} from "../API/tasks"

const container = document.getElementById("app");

const App = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks);
        console.log("tasks:", tasks)
    }, []);


    const rmvTask = (id) => {
        removeTask(id, tasks, setTasks);
    }

    const onNewTask = (task) => {
        setTasks(prevState => {
            return [...prevState,
            task]
        })
    }


    if (!tasks) return <h1>Loading data..</h1>

    return(
        <div>
            <NewTask onNewTask={onNewTask}/>

            {tasks.map(task => {
                return <Task key={task.id} id={task.id} title={task.title} description={task.description} status={task.status} onRemoveTask={rmvTask}/>
            })}

        </div>
    )

}
const root = createRoot(container);
root.render(<App/>);