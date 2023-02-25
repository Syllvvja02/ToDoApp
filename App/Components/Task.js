import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom";
import useInput from "./useInput";
import {getTasks} from "../API/tasks";

export default function Task() {

    const [task, setTask] = useState();

    const operations = () => {
        // change state: true to false, etc
    }

    return(
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>Tytuł zadania</h5>
                    <h6 className="card-subtitle text-muted">Opis zadania</h6>
                </div>
                <div>
                    <button className="btn btn-info btn-sm mr-2" onClick={operations}>
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>

                    <button className="btn btn-dark btn-sm">
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm ml-2">
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}