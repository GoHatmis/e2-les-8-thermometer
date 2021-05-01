let temperatuur = 0;

basic.forever(function () {
    temperatuur = input.temperature();
    basic.showNumber(temperatuur)
    basic.pause(1000);
    basic.clearScreen();
    basic.pause(200);
})
 