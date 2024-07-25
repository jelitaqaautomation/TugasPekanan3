import request from "supertest";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../GetToken/createToken.spec.js";
import { createUnit } from "../Create Unit/createUnit.spec.js";

export async function deleteUnit(){
    const  accessToken = await createToken()
    const  responsecreateunit = await createUnit()
    const unitId = responsecreateunit.body.data.unitId
    const response = await request(baseUrl)
    .delete("/units/"+unitId) // endpoint
    .set("Authorization",`Bearer ${accessToken}`)

    return response

}



 