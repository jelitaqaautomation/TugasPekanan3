import request from "supertest";
import { baseUrl } from "../../data/config";
import { createToken } from "../function/createToken.spec.js";

export async function createUnit(){
    const payload = 
    {
        "name": "gram",
        "description": "weight measurement"
     }

    const response = await request(baseUrl)
    const  accessToken = await createToken()
    const unitId = (await response).body.data.unitId
    .post("/units") // endpoint
    .send(payload) // request body
    .set("Authorization",accessToken)

    return unitId

}



 