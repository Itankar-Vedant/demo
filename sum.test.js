import sum from "./sum.js";


describe("Testing sum functions",()=>{
    test("2 + 2 is equal to 4",()=>{
    expect(sum(2,2)).toBe(4);
    });
    
    test("-9 + 8  is equal to -1",()=>{
    expect(sum(-9,8)).toBe(-1);
    });

})
