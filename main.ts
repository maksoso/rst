input.onButtonPressed(Button.A, function () {
    Red()
    basic.pause(1000)
})
function Yellow () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(0, 1)
    basic.pause(1000)
}
function Green () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(2, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
    Red()
    basic.pause(1000)
    Yellow()
    basic.pause(1000)
    Green()
    basic.pause(1000)
})
