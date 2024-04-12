import { json } from "@sveltejs/kit";

let todos = [
    {
        id: 1,
        task: "studiare TPSI",
        done: true,
        priority: 1
    }
];

export async function GET({ params, request }){
    console.log("Ricevuto HTTP GET con parametro:", params);

    if(params.id){
        const todo = todos.filter(t => t.id == params.id)[0];
        return json(todo);
    } else {
        return json(todos);
    }
}

export async function POST({ request }){
    console.log("Ricevuto HTTP POST");

    const body = await request.json();
    console.log("POST body:", body);
    body['id'] = Math.ceil(Math.random() * 100);

    todos.push(body);

    return json('OK');
}