// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

/**Takes two arguments and returns their sum.*/
var myNumber = function(p1, p2){
    return p1 + p2;
}

var convertToGradePoint = function(l1){
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

var gpaCalc = function(c1, c2, c3, l1, l2, l3){
    return  (convertToGradePoint(l1) + convertToGradePoint(l2)+ convertToGradePoint(l3) )/(c1 + c2 + c3);}
