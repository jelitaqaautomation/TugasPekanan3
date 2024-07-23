import request from "supertest";
import { baseUrl } from "../../data/config";

export async function createToken(){
    const payload = 
    {
        "email": "mampang@serbaguna.com",
        "password": "qwerty123!"
     }

    const response = await request(baseUrl)
    .post("/authentications") // endpoint
    .send(payload) // request body
    const accessToken = (await response).body.data.accessToken
    return accessToken

}



 