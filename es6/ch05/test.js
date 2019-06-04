import chai from "chai";
let should = chai.should();

describe("Destructuring assignment is added", ()=>{
  it("let {a,b,c,d} = {a:1,b:2,c:\"3\"};",()=>{
    let {a,b,c,d} = {a:1,b:2,c:"3"};   
    
    a.should.equal(1);
    b.should.equal(2);
    c.should.equal("3");
    should.equal(d,undefined);

  });
});

describe("Spread operator is added", ()=>{
  it("let [car, ...cdr] =  [1,2,3];",()=>{
    let [car, ...cdr] =  [1,2,3];
    car.should.equal(1);
    cdr.should.eql(cdr,[2,3]);
  });
});
  