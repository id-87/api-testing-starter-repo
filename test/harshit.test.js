
const chai=require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http');
expect(3+9).to.be.equal(12)
chai.use(chaiHttp)
const app=require('../src/app')
it('sum of two numbers',()=>{
    expect(3+9).to.be.equal(12)
})




it("testing api", async()=>{
    const res=await chai.request(app).get("/");
    expect(res.status).to.be.equal(200);
    expect(res.body.success).to.be.equal(true);
    expect(res.body.message).to.be.equal("Welcome to the Todo API")
})

