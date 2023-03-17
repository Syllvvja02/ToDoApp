import {useState} from "react";
import React from "react";
import useInput from "./useInput"

const Operation = () => {
}

const Operations = ({taskID, form, setForm, operations, setOperations, status}) => {

    // const [descript, connectDescript] = useInput('');
    const [descript, setDescript] = useState([]);

    const add = (e) => {
        e.preventDefault();
        console.log(typeof descript);
        console.log(descript);
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
        {descript ? <p>mamy to {descript}</p> : ""}
    </ul>
    </div>
)
}

export default Operations;