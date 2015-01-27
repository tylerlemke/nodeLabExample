
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });


    it('myNumber should return the correct sum', function(){
        expect(myNumber(3,4)).toBe(7);
    });

//tests for the converting letter grades to grade points
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

//test for calculating Total Grade points for an individual class
    it('should return correct total grade points', function(){
        expect(convertToTotalGradePoint("A",4)).toBe(16);
    })

//test for calculating total GPA
    it('should return correct GPA', function(){
        expect(gpaCalc(5,4,3,"A","B","C")).toBe(3.16666666666666665);
    })
});

