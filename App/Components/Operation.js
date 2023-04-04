import React, {useEffect, useState} from "react";
import useInput from "./useInput";
import {addOperationTime, getOperation} from "../API/operations";

const Operation = ({description, id, onRemoveOperations, timeSpent, status}) => {

    const [show, setShow] = useState(true);
    const [time, connectTime] = useInput(timeSpent);


    useEffect(() => {
        console.log("odświeża się przy pobieraniu operacji")
    }, [time])

    const style = "width: 12rem"

    const addTime = () => {
        setShow(prevState => !prevState);
    }

    const closeTimer = () => {
        setShow(prevState => !prevState);
    }

    const setTime = (e) => {
        e.preventDefault();
        const summary = timeSpent + time;
        addOperationTime(id, description, summary);

    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center" id={id}>
            <div>
                {description}
                {timeSpent ? <span className="badge badge-success badge-pill ml-2">
      {timeSpent} minut
    </span> : ""}

            </div>
            {!show ? <form>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                        {...connectTime}
                           style={{style}}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" onClick={setTime}><i className="fas fa-save"></i></button>
                        <button className="btn btn-outline-dark" onClick={closeTimer}><i className="fas fa-times false"></i></button>
                    </div>
                </div>
            </form> : ""}



                {show ? <div><button className="btn btn-outline-success btn-sm mr-2" onClick={addTime}>
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => onRemoveOperations(id)}><i className="fas fa-trash"></i></button></div>
                    : ""}


        </li>

    )
}

export default Operation;