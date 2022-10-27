input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    Nave.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Nave.get(LedSpriteProperty.X), 4)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    Nave.move(1)
})
let Shoot: game.LedSprite = null
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 4)
let E1 = game.createSprite(2, 0)
Shoot = game.createSprite(2, 0)
E1.delete()
Shoot.delete()
game.setScore(0)
basic.forever(function () {
    basic.pause(1000)
    if (!(E1.isDeleted())) {
        E1.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (E1.isDeleted()) {
        basic.pause(randint(1000, 3000))
        E1 = game.createSprite(randint(0, 4), 0)
    }
})
basic.forever(function () {
    if (Shoot.get(LedSpriteProperty.Y) == 0) {
        Shoot.delete()
    }
})
basic.forever(function () {
    if (Shoot.isTouching(E1)) {
        Shoot.delete()
        E1.delete()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        game.addScore(1)
    } else if (E1.isTouching(Nave)) {
        game.gameOver()
        basic.showNumber(game.score())
    } else if (E1.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
        basic.showNumber(game.score())
    }
})
