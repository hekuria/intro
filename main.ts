namespace SpriteKind {
    export const Human = SpriteKind.create()
    export const Cow = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
}
function on_start () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
        . 3 3 3 b b 3 3 3 3 b b 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setStayInScreen(true)
}
function on_start3 () {
    scene.setBackgroundColor(1)
    info.setScore(0)
    info.startCountdown(10)
}
function on_start2 () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
let mySprite: Sprite = null
on_start2()
on_start()
on_start3()
