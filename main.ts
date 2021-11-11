let lives = 0
input.onButtonPressed(Button.A, function () {
    lives += 1
})
input.onButtonPressed(Button.AB, function () {
    lives = 5
})
input.onButtonPressed(Button.B, function () {
    lives += -1
})
basic.forever(function () {
    basic.showNumber(lives)
    if (lives < 0) {
        basic.showIcon(IconNames.Sad)
    }
})
