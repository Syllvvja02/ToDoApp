import React, {useState} from "react";
import useInput from "./useInput";

export default function NewTask() {

    const [title, connectTitle] = useInput("");
    const [description, connectDescription] = useInput("");

    const clicked = (e) => {
        pass
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