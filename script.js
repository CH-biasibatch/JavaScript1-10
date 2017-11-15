function sleep_in(weekday,vacation) {
    if(weekday == true && vacation == true){
        return true;
    }else{
        if(weekday == true && vacation == false){
            return false;
        }else{
            if(weekday == false && vacation == false){
                return true;
            }else{
                if(weekday == false && vacation == true){
                    return true;
                }
            }
        }
    }
}

function monkey_trouble(a_smile, b_smile) {
    if (a_smile == true && b_smile == true) {
        return true;
    }else {
        if(a_smile == false && b_smile == false) {
            return true;
        }else {
            if(a_smile == true && b_smile == false) {
                return false;
            }else {
                if(a_smile == false && b_smile == true) {
                    return false;
                }
            }
        }
    }
}

function string_times(string,number){
    var solution = "";
    for(var i = 0; i < number; i++){
        solution = solution + string;
    }
    return solution;
}

function front_times(string,n){
    var output = string.substring(0,3);
    var result = "";
    for(var i = 0; i < n; i++){
        result = result + output;
    }
    return result;
}

function string_bits(string){
    var result = "";
    for(var i = 0; i < string.length; i=i+2){
        console.log("i=: " + i);
        console.log("letter we are on= " + string[i]);
        result = result + string[i];
    }
    return result;
}



function caughtSpeeding(speed, birthday) {
    if (speed <= 60 && birthday == false || speed <= 60 && birthday == true || speed <=65 && birthday == true) {
        return 0;
    }else{
        if (speed >= 61 && speed <= 80 && birthday == false || speed >= 66 && speed <= 85 && birthday == true){
            return 1;
        }else{
            if (speed >= 81 && birthday == false){
                return 2;
            }
        }
    }
}


function fizz_buzz(x) {
    if (x % 3 == 0 && x % 5 == 0) {
        return "FizzBuzz"
    } else {
        if (x % 3 == 0) {
            return "Fizz";
        } else {
            if (x % 5 == 0) {
                return "Buzz";
            } else {
                return x + "!";
            }
        }
    }
}


function teaParty (tea,candy){
    if(candy >= 5 && tea >= 2*candy ){
        return 2;
    }
    if (tea >= 5 && candy >= 2*tea){
        return 2;
    }
    if(tea >= 5 && candy >= 5) {
        return 1;
    }
    if(tea <= 5 || candy <= 5) {
            return 0;
    }
}


function blackjack(x,y){
    if(x == 21){
        return x;
    }
    if(y == 21){
        return y;
    }
    if(x >= y && x < 21 && y < 21){
        return x;
    }
    if(y >= x && x < 21 && y < 21){
        return y;
    }
    if(x >= y && x > 21 && y > 21){
        return 0;
    }
    if(y >= x && x > 21 && y > 21){
        return 0;
    }
    if(x > 21 && y < 21){
        return y;
    }
    if(y > 21 && x < 21){
        return x;
    }
}


function loneSum(a,b,c){
    var sum = a + b + c;

    if(a != b && b != c && c != a){
        return sum;
    }
    if(a == b && b == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(a == c){
        return b;
    }
    if(b == c){
        return a;
    }
}

function firstLast6(arr){
    var theIndex = arr.indexOf(6);
    var lastIndex = arr.lastIndexOf(6);
    if(theIndex === 0 || lastIndex === arr.length-1){
        return true;
    }else{
        return false;
    }
}


function has23(arr){
    var indexTwo = arr.isArray(2);
    var indexThree = arr.isArray(3);
}



function tester() {

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = string_times("wait" , 10);
    document.getElementById("output4").innerHTML = front_times("hello" , 4);
    document.getElementById("output5").innerHTML = string_bits("grapefruit");
    document.getElementById("output6").innerHTML = caughtSpeeding(73,false);
    document.getElementById("output7").innerHTML = fizzBuzz(8);
    document.getElementById("output8").innerHTML = teaParty(8,20);
    document.getElementById("output9").innerHTML = blackjack(18,23);
    document.getElementById("output10").innerHTML = loneSum(1,2,3);

}


//www.w3schools.com