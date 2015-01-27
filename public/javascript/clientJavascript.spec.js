
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
//    it('this test should fail!', function(){
//        expect(returnKittens()).toBe("Not Kittens!");
//    });

    it('myNumber should return the correct sum', function(){
        expect(myNumber(3,4)).toBe(7);
    });



    it('should return correct grade point', function(){
        expect(convertToGradePoint('A')).toBe(4);
    });

    it('should return correct grade point', function(){
        expect(convertToGradePoint('B')).toBe(3);
    });

    it('should return correct grade point', function(){
        expect(convertToGradePoint("C")).toBe(2);
    });

    it('should return correct grade point', function(){
        expect(convertToGradePoint("D")).toBe(1);
    });

    it('should return correct grade point', function(){
        expect(convertToGradePoint("F")).toBe(0);
    });

    it('should return correct GPA', function(){
        expect(gpaCalc(5,4,3,"A","B","C")).toBe(3.16666666666666665);
    })
});

