import request from "supertest";
import { baseUrl } from "../../../data/config.js";
import { createToken } from "../GetToken/createToken.spec.js";

export async function readUnitList(q,page){
   
    const  accessToken = await createToken()
    const response = await request(baseUrl)
    .get(`/units?q=${q}&page=${page}`) // endpoint
    .set("Authorization",`Bearer ${accessToken}`)
    return response

}



 