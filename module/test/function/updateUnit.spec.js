import request from "supertest";
import { baseUrl } from "../../data/config";
import { createToken } from "../function/createToken.spec.js";
import { createUnit } from "./createUnit.spec.js";

export async function updateUnit(){
    const payload = 
    {
        "name": "update-meter",
        "description": "no-meter"
     }

    const response = await request(baseUrl)
    const  accessToken = await createToken()
    const unitId = await createUnit()
    .put("/units/"+unitId) // endpoint
    .send(payload) // request body
    .set("Authorization",accessToken)

}



 