import React, {useState} from "react";

export default function useInput(valueOnStart) {

    const [value, setValue] = useState(valueOnStart);

    return[
        value,
        {
            value,
            onChange: (e) => {
                setValue(e.target.value);
            },
        },
    ];

};