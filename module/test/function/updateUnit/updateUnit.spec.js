import request from "supertest";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../GetToken/createToken.spec.js";
import { createUnit } from "../Create Unit/createUnit.spec.js";
import { updatedata } from "../../../data/testData.js";

export async function updateUnit(){

    const  accessToken = await createToken()
    const  responsecreateunit = await createUnit()
    const unitId = responsecreateunit.body.data.unitId
    const response = await request(baseUrl)
    .put("/units/"+unitId) // endpoint
    .send(updatedata) // request body
    .set("Authorization",`Bearer ${accessToken}`)
    console.log(response.body)

    return response

}



 