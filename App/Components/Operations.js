import React, {useState} from "react";
import Operation from "./Operation";
import useInput from "./useInput";
import {createOperation, removeOperation} from "../API/operations";

const Operations = ({taskID, form, setForm, operations, setOperations, status}) => {

    const [descript, connectDescript] = useInput('');

    const add = (e) => {
        e.preventDefault();
        const operation = {
            id: taskID,
            description: descript,
            timeSpent: 0
        }
        createOperation(operation);
    }

    const remove = (idx) => {
        removeOperation(idx, operations, setOperations);
    }

    // if (!form) return "";

    return(
        <div>
                {form ? <div className="card-body"><form>
                    <div className="input-group">
                        <input type="text"
                            {...connectDescript}
                               className="form-control"
                               placeholder="Operation description"/>

                        <div className="input-group-append">
                            <button className="btn btn-info" onClick={add}>
                                Add
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form></div> : ""}
            <ul className="list-group list-group-flush">
                {operations.map(o => {
                return <Operation description={o.description} id={o.id} onRemoveOperations={remove} timeSpent={o.timeSpent} status={status}/>
                })}
            </ul>

        </div>
    )
}


export default Operations;