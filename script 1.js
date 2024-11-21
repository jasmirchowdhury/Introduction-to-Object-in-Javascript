function findMax(){

    var max = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
}
}
return max;
}
document.getElementById("result").innerHTML = findMax(1, 2, 3, 4, 5);