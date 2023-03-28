import React, {useState} from "react";
import useInput from "./useInput"

const Operation = ({description, id, onRemoveOperations, timeSpent, status}) => {

    const [show, setShow] = useState(true);

    const style = "width: 12rem"

    const addTime = () => {
        setShow(prevState => !prevState);
    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center" id={id}>
            <div>
                Opis operacji
                {timeSpent ? <span className="badge badge-success badge-pill ml-2">
      2h 15m
    </span> : ""}

            </div>
            {!show ? <form>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                           style={{style}}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>
                        <button className="btn btn-outline-dark"><i className="fas fa-times false"></i></button>
                    </div>
                </div>
            </form> : ""}


            <div>
                {status === "open" ? <button className="btn btn-outline-success btn-sm mr-2" onClick={addTime}>
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button> : ""}


                <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>
            </div>
        </li>

    )
}

export default Operation;