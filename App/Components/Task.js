import React, {useState, useEffect} from "react";
import {getOperations} from "../API/operations";

export default function Task({id, title, description, status, onRemoveTask}) {

    const [stat, setStat] = useState(status);
    const [operations, setOperations] = useState([]);
    const [stan, setStan] = useState(true);

    useEffect(() => {
        getOperations(id, setOperations);
    }, []);

    const operationsFunc = () => {
        // change state: true to false, etc
        console.log("Clicked");
    }

    const close_task = () => {
        setStan(prevState => !prevState)
        setStat("closed");
        console.log("Clicked");
    }

    const remove = () => {
        if (typeof onRemoveTask === "function") {
            onRemoveTask(id);
        }
    }

    return(
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h6 className="card-subtitle text-muted">{description}</h6>
                </div>
                <div>
                    <button className="btn btn-info btn-sm mr-2" onClick={operationsFunc}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                    <button className="btn btn-dark btn-sm" onClick={close_task}>
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm ml-2" onClick={remove}>
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}