var counter = function(name){
    return "Hi "+name;
}

var adder=function(a,b){
    return `The sum of two numbers is ${a+b}`;
}

module.exports={
    counter:counter,
    adder:adder,
}

// module.exports.counter=counter
//module.exports.counter=function(){}