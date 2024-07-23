import request from "supertest";
import { baseUrl } from "../../data/config";
import { createToken } from "../function/createToken.spec.js";
import { createUnit } from "./createUnit.spec.js";

export async function readUnit(){

    const response = await request(baseUrl)
    const  accessToken = await createToken()
    const  unitId = await createUnit()
    .get("/units/"+unitId) // endpoint
    .set("Authorization",accessToken)

    return response

}



 