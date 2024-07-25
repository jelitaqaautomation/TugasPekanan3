import { expect } from "chai";
import { createUnit } from "../function/Create Unit/createUnit.spec.js";
import { createToken } from "../function/GetToken/createToken.spec.js";
import { readUnit } from "../function/GetUnit/readUnit.spec.js";
import { unitdata, updatedata } from "../../data/testData.js";
import { readUnitList } from "../function/GetUnit/readUnitList.spec.js";
import { updateUnit } from "../function/updateUnit/updateUnit.spec.js";
import { deleteUnit } from "../function/deleteUnit/deleteUnit.spec.js";

describe(' End to End - Unit', () => {
    let token;
    let unitId;

    before(async function() {

        this.timeout(10000)
        token = await createToken();
    });

    describe('Add Unit', () => {
    it('Succes create Unit', async () => {
        const response = await createUnit()
        unitId = (await response).body.data.unitId
        expect((await response).status).to.equal(201)

    })

    it('Verify response message equal Unit berhasil ditambahkan', async () => {
        const response = await createUnit()
        expect((await response).body.message).to.equal('Unit berhasil ditambahkan')
    })
})
describe('Read Unit', () => {
it('Succes Read Unit', async function() {
    this.timeout(10000)
    const response = await readUnit()
    expect((await response).status).to.equal(200)

})

it('Verify unit berhasil ditampilkan', async function() {
    this.timeout(10000)
    const response = await readUnit()
    expect((await response).body.data.unit.name).to.equal(unitdata.name)
    expect((await response).body.data.unit.description).to.equal(unitdata.description)
    
})
})

describe('Read Unit List', () => {
    let q= "gram";
    let page= 1;

    it('Succes Read Unit List', async function() {
        this.timeout(10000)
        const response = await readUnitList(q,page)
        expect((await response).status).to.equal(200)
    
    })
    
    })

describe('Update Unit', () => {
    it('Succes Update Unit', async function() {
        this.timeout(10000)
        const response = await updateUnit()
        expect((await response).status).to.equal(200)
    
    })
    
    it('Verify unit berhasil diupdate', async function() {
        this.timeout(10000)
        const response = await updateUnit()
        expect((await response).body.data.name).to.equal(updatedata.name)
        
    })
    })
})

describe('Delete Unit', () => {
    it('Succes Delete Unit', async function() {
        this.timeout(10000)
        const response = await deleteUnit()
        expect((await response).status).to.equal(200)
    
    })
    
    it('Verify unit berhasil diupdate', async function() {
        this.timeout(10000)
        const response = await deleteUnit()
        expect((await response).body.status).to.equal("success")
        
    })
    })
