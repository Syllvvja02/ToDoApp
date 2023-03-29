import { API_KEY, API_URL } from "./api_const";

export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'

            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error("Błąd!");
        } else if (typeof successCallback !== "function") {
            throw new Error("Funkcja");
        }

        successCallback(data.data);
        console.log(data.data);
    } catch (err) {
        console.log(err);
    }
};

export const CreateTask = async ({title, description, status}) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                title: title,
                description: description,
                status: status
            })
        }).then( res => {
            return res.json();
            }
        ).then(data => console.log(data))
    } catch (err) {
        console.log(err);
    }
};


export const removeTask = async (id, task_lst, callbackFunction) => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json'

        }
    });
    if (typeof callbackFunction !== "function") {
        throw new Error("Błąd!");
    } else if (res.ok) {
        callbackFunction(task_lst => task_lst.filter((task) => task.id !== id));
    }

};
