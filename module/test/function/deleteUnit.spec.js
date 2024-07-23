import request from "supertest";
import { baseUrl } from "../../data/config";
import { createToken } from "../function/createToken.spec.js";
import { createUnit } from "./createUnit.spec.js";

export async function updateUnit(){
    const  accessToken = await createToken()
    const unitId = await createUnit()
    .delete("/units/"+unitId) // endpoint
    .set("Authorization",accessToken)

}



 