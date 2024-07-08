// var has global scope. can be reinitiliazed
var a=10;
console.log(a);
{
    var a=20;
    console.log(a);
}
console.log(a);
//let is a local scope ,it cannot be reinitalized

