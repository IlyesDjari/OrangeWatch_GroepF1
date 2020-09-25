input.onButtonPressed(Button.A, function () {
    Teller += 1
    if (Teller > 10) {
        Teller = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Teller == 10) {
        Geld += 1
        Teller = 0
    }
    basic.showNumber(Geld)
})
let Geld = 0
let Teller = 0
basic.showString("ORANGE WATCH")
basic.forever(function () {
    basic.showNumber(Teller)
})
