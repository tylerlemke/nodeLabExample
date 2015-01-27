// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.capitalize = function(str){
    return str.toUpperCase();
};

/*var convertToGradePoint = function(str){
    if (str == "A"){
    return 4}
    else if(str == "B"){
        return 3}
    else if(str == "C"){
       return 2}
    else if(str == "D"){
       return 1}
    else if(str == "F"){
       return 0}
}*/

var convertToGradePoint = function(str){
    switch(x = str){
        case x=="A":
            return 4;
            break;
        case x=="B":
            return 3;
            break;
        case x=="C":
            return 2;
            break;
        case x=="D":
            return 1;
            break;
        case x=="F":
            return 0;
            break;
    }
}

exports.gpaCalc = function(c1, c2, c3, l1, l2, l3){
    return (Number(convertToGradePoint(l1)) + Number(convertToGradePoint(l2))+ Number(convertToGradePoint(l3)) )/(Number(c1) + Number(c2) + Number(c3));}
