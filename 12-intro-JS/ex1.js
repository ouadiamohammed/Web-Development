function test() {
    var a = "3";
    var b = "6";

    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}

test();