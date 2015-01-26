// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.capitalize = function(str){
    return str.toUpperCase();
};

exports.convertToGradePoint = function(l1){
    if (l1 = "A"){
        return 4;}
    if (l1 = "B"){
        return 3;
    }
    if (l1 = "C"){
        return 2;
    }
    if (l1 = "D"){
        return 1;
    }
    if (l1 = "F"){
        return 0;
    }
}

exports.gpaCalc = function(c1, c2, c3, l1, l2, l3){
    return  (convertToGradePoint(l1) + convertToGradePoint(l2)+ convertToGradePoint(l3) )/(c1 + c2 + c3);}
