import { sum, res } from "./suma";

let x;

beforeEach(() => {
    x = 1; 
    console.log(x);
});

describe("./suma.js", function(){
    test("add two numbers", function(){
        expect(sum(x,2)).toBe(3);
    });
    test("restar dos números", function(){
        expect(res(2, x)).toBe(1);
    });
});

afterEach(() => {
    x = 0;
    console.log(x);
});
