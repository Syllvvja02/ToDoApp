import { API_KEY, API_URL } from "./api_const";

export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();
        console.log(data);

        if (data.error) {
            throw new Error("Błąd!");
        } else if (typeof successCallback !== "function") {
            throw new Error("Funkcja!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

export const createOperation = async ({id, description, timeSpend}) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            method: "POST",
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                description: description,
                timeSpend: timeSpend
            })
        }).then( res => {
                return res.json();
            }
        ).then(data => console.log(data))

    } catch (err) {
        console.log(err);
    }
};

export const removeOperation = async (id, task_lst, callbackFunction) => {
    const res = await fetch(`${API_URL}/operations/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json'

        }
    });
    if (typeof callbackFunction !== "function") {
        throw new Error("Błąd!");
    } else if (res.ok) {
        callbackFunction(operation_lst => operation_lst.filter((operation) => operation.id !== id));
    }

};

export const getOperation = async (id, callbackFunc) => {
    try {
        const res = await fetch(`${API_URL}/operations/${id}`, {
            method: "GET",
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.error || typeof callbackFunc !== "function") {
            throw new Error("Błąd!");
        }

        callbackFunc(data);
    } catch (err) {
        console.log(err);
    }
}

export const addOperationTime = async (id, description, summary) => {
    try {
        const res = await fetch(`${API_URL}/operations/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': API_KEY,
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                id: id,
                description: description,
                timeSpent: summary,
            })
        });
        console.log(res);
        console.log("id w środku api:", id);
        if (!res.ok) {
            throw new Error("Błąd!");
        }
    } catch (err) {
        console.log(err);
    }
}