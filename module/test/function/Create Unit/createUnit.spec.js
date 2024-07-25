import request from "supertest";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../GetToken/createToken.spec.js";
import { unitdata } from "../../../data/testData.js";

export async function createUnit(){

    const  accessToken = await createToken()
    const response = await request(baseUrl)
    .post("/units") // endpoint
    .send(unitdata) // request body
    .set("Authorization",`Bearer ${accessToken}`)
    
    return response

}



 