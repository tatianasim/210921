import { expect } from "chai";

describe('works with numbers', function (){
    const a = 5;
    const b =7;

    it('addition works correctly', function (){
        expect(a + b, 'result to equal 12').to.eq(12);
    });
});