import chai from "chai";
let should = chai.should();

describe("If declared,", ()=>{

  it("but not assigned then undefined", ()=>{
    let notAssigned;
    should.equal(notAssigned, undefined);
  });

  it("Japanese is ok as identifier name", ()=>{
    let 日本語 = "Japanese";
    日本語.should.equal("Japanese");
  });

  it("camelCase is commonly used as identifier name", ()=>{
    let camelCase = "common";
    camelCase.should.equal("common");
  });

  it("binary is ok", ()=>{
    let two = 0b10;
    two.should.equal(2);
  });

  it("octal is ok", ()=>{
    let eight = 0o10;
    eight.should.equal(8);
  });

  it("decimal is ok", ()=>{
    let ten = 10;
    ten.should.equal(10);
  });

  it("hexadecimal is ok", ()=>{
    let sixteen = 0x10;
    sixteen.should.equal(16);
  });

  it("exponential is ok", ()=>{
    let sixteen = 1.6e1;
    sixteen.should.equal(16);
  });
});

describe("\"x + 1 - 1 = x\"", ()=>{
  it("holds if x is 1", ()=>{
    let x = 1;
    let y = x + 1 - 1;
    y.should.equal(x);
  });
  
  it("does not hold if x is Math.pow(2,53)", ()=>{
    let x = Math.pow(2,53);
    let y = x + 1 - 1;

    y.should.not.equal(x);
    y.should.be.equal(Number.MAX_SAFE_INTEGER);
  });
});

describe("Template literal is added", ()=>{
  it("\`${one} = 1\`", ()=>{
    let one = "1";
    `${one} = 1`.should.equal("1 = 1");
  });
});

describe("Symbol is added", ()=>{
  it("let x = Symbol();", ()=>{
    let x = Symbol();
    let y = Symbol();
    
    x.should.not.equal(y);
  });
});