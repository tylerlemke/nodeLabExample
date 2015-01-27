// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.capitalize = function(str){
    return str.toUpperCase();
};

var convertToGradePoint = function(l1){
    var x;
    if (l1= "A"){
    x=4;}
    else if(l1= "B"){
        x=3;}
    else if(l1= "C"){
        x=2;}
    else if(l1= "D"){
        x=1;}
    else if(l1= "F"){
        x=0;}
    return x;



}
exports.gpaCalc = function(c1, c2, c3, l1, l2, l3){
    return (convertToGradePoint(l1) + convertToGradePoint(l2)+ convertToGradePoint(l3) )/(Number(c1) + Number(c2) + Number(c3));}
