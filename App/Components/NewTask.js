import React, {useState} from "react";
import useInput from "./useInput";
import {CreateTask} from "../API/tasks";

export default function NewTask({onNewTask}) {

    const [title, connectTitle] = useInput("");
    const [description, connectDescription] = useInput("");

    const clicked = (e) => {
        e.preventDefault();
        const newTask = {title: title, description: description, status: "open"}
        console.log(newTask);
        CreateTask(newTask);
    }

    return(
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               {...connectTitle}
                               placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               {...connectDescription}
                               placeholder="Description"/>
                    </div>
                    <button className="btn btn-info" onClick={clicked}>
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    )

}
// {title: "", description: "", status: ""}