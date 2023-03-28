import React, {useState} from "react";
import Operation from "./Operation";
import {createOperation, removeOperation} from "../API/operations";

const Operations = ({taskID, form, setForm, operations, setOperations, status}) => {

    const [descript, setDescript] = useState('');
    console.log("description: ", descript);
    console.log("operations: ", operations);

    const add = (e) => {
        e.preventDefault();
        const operation = {
            id: crypto.randomUUID(),
            description: e.target.value,
            timeSpent: 0
        }
        createOperation(operation);
        setDescript(e.target.value);
    }

    const remove = (idx) => {
        console.log("remove func");
        removeOperation(idx, operations, setOperations);
    }

    if (!form) return "";

    return(
        <div>
            <div className="card-body">
                <form>
                    <div className="input-group">
                        <input type="text"
                               name="description"
                               className="form-control"
                               placeholder="Operation description"/>

                        <div className="input-group-append">
                            <button className="btn btn-info" onClick={add}>
                                Add
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ul className="list-group list-group-flush">
                {operations.map(o => {
                return <Operation description={o.description} id={o.id} onRemoveOperations={remove} timeSpent={o.timeSpent} status={status}/>
                })}
            </ul>

        </div>
    )
}


export default Operations;