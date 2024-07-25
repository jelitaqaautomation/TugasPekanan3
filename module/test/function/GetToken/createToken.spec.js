import request from "supertest";
import { baseUrl } from "../../../data/config.js";
import { login } from "../../../data/testData.js";

export async function createToken(){
    

    const response = await request(baseUrl)
    .post("/authentications") // endpoint
    .send(login) // request body

    const token = (await response).body.data.accessToken;
    //console.log(response)
    return token;

}



 