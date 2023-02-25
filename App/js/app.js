import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom";
import {getTasks} from "../API/tasks";
import NewTask from "../Components/NewTask";
import Task from "../Components/Task"

const container = document.getElementById("app");

const App = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks);
    }, []);

    const addTask = () => {
        return <p>dodawanie taska</p>
    }

    const removeTask = () => {
        return <p>usuwanie taska</p>
    }

    const onNewTask = () => {
        pass
    }


    const handleTaskDone = id => {
        setTasks(prevState => {
            return prevState.filter(task => {
                return task.id !== id;
            });
        });
    };


    return(
        <div>
            <NewTask onNewTask={onNewTask}/>
            <Task/>
            <p> tested info</p>
            <p>{tasks}</p>
        </div>
    )

}
//Task w metodą map, bo to bedzie lista tasków
const root = createRoot(container);
root.render(<App/>);