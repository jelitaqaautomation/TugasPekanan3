import request from "supertest";
import { baseUrl } from "../../data/config";
import { createToken } from "../function/createToken.spec.js";
import { createUnit } from "./createUnit.spec.js";

export async function readUnitList(){
   
    const response = await request(baseUrl)
    const  accessToken = await createToken()
    .get("/units/") // endpoint
    .set("Authorization",accessToken)
    .set("","")

}



 