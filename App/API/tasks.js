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

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
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