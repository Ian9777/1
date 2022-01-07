basic.clearScreen()
basic.forever(function () {
    led.toggle(randint(0, randint(1, 5)), randint(0, randint(1, 5)))
})
