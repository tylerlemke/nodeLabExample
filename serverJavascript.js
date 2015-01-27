// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.capitalize = function(str){
    return str.toUpperCase();
};

var convertToGradePoint = function(l1){
    if (l1 == "A"){
        return 4;}
    if (l1 == "B"){
        return 3;
    }
    if (l1 == "C"){
        return 2;
    }
    if (l1 == "D"){
        return 1;
    }
    if (l1 == "F"){
        return 0;
    }
}

var convertToTotalGradePoint = function(l1, c1){
    return Number(convertToGradePoint(l1)) * Number(c1);
}

exports.gpaCalc = function(c1, c2, c3, l1, l2, l3){
    return  (convertToTotalGradePoint(l1,c1) + convertToTotalGradePoint(l2,c2)+ convertToTotalGradePoint(l3,c3) )/(Number(c1) + Number(c2) + Number(c3));}
