import request from "supertest";
import { baseUrl } from "../../data/config";

export async function createToko(){
    const payload = 
    {
        "name": "kasir-serbagunamampang",
        "email": "mampang@serbaguna.com",
        "password": "qwerty123!"
     }

    const response = await request(baseUrl)
    .post("/registration") // endpoint
    .send(payload) // request body
}



 