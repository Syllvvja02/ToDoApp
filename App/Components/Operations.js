import React, {useState} from "react";
import Operation from "./Operation";
import useInput from "./useInput";

const Operations = ({taskID, form, setForm, operations, setOperations, status}) => {

    const [descript, connectDescript] = useInput('');
    // const [descript, setDescript] = useState([]);
    console.log("description: ", descript);
    console.log("operations: ", operations);

    const add = (e) => {
        e.preventDefault();
        setOperations(prevState => {
            return [...prevState, e.target.value]
        })
    }

    const remove = () => {
        console.log("remove func");
    }

    if (!form) return "";

    return(
        <div>
            <div className="card-body">
                <form>
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
                </form>
            </div>
            {!operations ? <ul className="list-group list-group-flush">
                <Operation description={descript} id={taskID} onRemoveOperations={remove} timeSpent={"0"} status={status}/>
            </ul> : ""}

        </div>
    )
}


export default Operations;