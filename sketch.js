var backgroundImage
var whiteDiamondImage, whiteDiamond1, whiteDiamond2, whiteDiamond3, whiteDiamond4, whiteDiamond5, whiteDiamond6
var blackDiamondImage, blackDiamond1, blackDiamond2, blackDiamond3, blackDiamond4, blackDiamond5, blackDiamond6
var moonBlockImage, moonBlock
var redButton, yellowButton, greenButton
var ashKing, ashKingImage
var snowWhite, snowWhiteImage
var RedButton, RedButtonImage
var GreenButton, GreenButtonImage
var YellowButton, YellowButtonImage

var blocksGroup

function preload() {
  backgroundImage = loadImage("assets/background.png")
  whiteDiamondImage = loadImage("assets/White Diamond.png")
  blackDiamondImage = loadImage("assets/Black Diamond.png")
  moonBlockImage = loadImage("assets/Moon Block.png")
  ashKingImage = loadImage("assets/AshKing.png")
  snowWhiteImage = loadImage("assets/SnowWhite.png")
  RedButtonImage = loadImage("assets/Red Button.png")
  GreenButtonImage = loadImage("assets/Green Button.png")
  YellowButtonImage = loadImage("assets/Yellow Button.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight)

  ashKing = createSprite(width-50, 65)
  ashKing.addImage("ash", ashKingImage)
  ashKing.scale = 0.25

  snowWhite = createSprite(50, 65)
  snowWhite.addImage("snow", snowWhiteImage)
  snowWhite.scale = 0.25

  blocksGroup = createGroup()


  spawnDiamond()
  firstLayer()
  secondLayer()
  thirdLayer()
  fourthLayer()
  fifthLayer()
  sixthLayer()

  YellowButton = createSprite(width - 500, 425)
  YellowButton.addImage("yellow", YellowButtonImage)
  YellowButton.scale = 0.35

  GreenButton = createSprite(35, 625)
  GreenButton.addImage("green", GreenButtonImage)
  GreenButton.scale = 0.35

  RedButton = createSprite(width - 500, 750)
  RedButton.addImage("red", RedButtonImage)
  RedButton.scale = 0.35

}
  


function draw() {
  background("#72d8fd")

  if(keyDown('A')){
    snowWhite.x -= 5}

  if(keyDown('D')){
    snowWhite.x += 5}

  if(keyDown('W')){
    snowWhite.velocityY = -5}

  snowWhite.velocityY = snowWhite.velocityY + 0.5
  snowWhite.collide(blocksGroup)


  if(keyDown(LEFT_ARROW)){
    ashKing.x -= 5}

  if(keyDown(RIGHT_ARROW)){
    ashKing.x += 5}

  if(keyDown(UP_ARROW)){
    ashKing.velocityY = -5}

  ashKing.velocityY = ashKing.velocityY + 0.5
  ashKing.collide(blocksGroup)



drawSprites()
}

function firstLayer(){

  moonBlock1 = createSprite(25, 125)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13 
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(75, 125)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(125, 125)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(175, 125)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13
  blocksGroup.add(moonBlock4)
  
  moonBlock5 = createSprite(225, 125)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(275, 125)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13
  blocksGroup.add(moonBlock6)

  moonBlock7 = createSprite(325, 125)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(375, 125)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(425, 125)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)

  moonBlock10 = createSprite(475, 125)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)

  //

  moonBlock1 = createSprite(width - 25, 125)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13 
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(width - 75, 125)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(width - 125, 125)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(width - 175, 125)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13
  blocksGroup.add(moonBlock4)

  moonBlock5 = createSprite(width - 225, 125)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(width - 275, 125)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13
  blocksGroup.add(moonBlock6)

  moonBlock7 = createSprite(width - 325, 125)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(width - 375, 125)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(width - 425, 125)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)

  moonBlock10 = createSprite(width - 475, 125)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)

}


function secondLayer(){

  moonBlock1 = createSprite(225, 300)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(275, 300)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(325, 300)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(365, 309)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.08
  blocksGroup.add(moonBlock4)

  moonBlock5 = createSprite(395, 309)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.08
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(425, 309)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.08
  blocksGroup.add(moonBlock6)

  moonBlock7 = createSprite(455, 309)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.08
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(485, 309)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.08
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(515, 300)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)
  
  moonBlock10 = createSprite(565, 300)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)

  moonBlock11 = createSprite(615, 300)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13
  blocksGroup.add(moonBlock11)

  moonBlock12 = createSprite(665, 300)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13
  blocksGroup.add(moonBlock12)

  moonBlock13 = createSprite(715, 300)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13
  blocksGroup.add(moonBlock13)

  moonBlock14 = createSprite(765, 300)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13
  blocksGroup.add(moonBlock14)

  moonBlock15 = createSprite(815, 300)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13
  blocksGroup.add(moonBlock15)

  moonBlock16 = createSprite(845, 300)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13
  blocksGroup.add(moonBlock16)

//


  moonBlock1 = createSprite(width - 225, 300)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(width - 275, 300)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(width - 325, 300)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(width - 365, 309)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.08
  blocksGroup.add(moonBlock4)

  moonBlock5 = createSprite(width - 395, 309)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.08
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(width - 425, 309)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.08
  blocksGroup.add(moonBlock6)

  moonBlock7 = createSprite(width - 455, 309)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.08
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(width - 485, 309)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.08
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(width - 515, 300)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)
  
  moonBlock10 = createSprite(width - 565, 300)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)

  moonBlock11 = createSprite(width - 615, 300)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13
  blocksGroup.add(moonBlock11)

  moonBlock12 = createSprite(width - 665, 300)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13
  blocksGroup.add(moonBlock12)

  moonBlock13 = createSprite(width - 715, 300)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13
  blocksGroup.add(moonBlock13)

  moonBlock14 = createSprite(width - 765, 300)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13
  blocksGroup.add(moonBlock14)

  moonBlock15 = createSprite(width - 815, 300)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13
  blocksGroup.add(moonBlock15)

  moonBlock16 = createSprite(width - 845, 300)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13
  blocksGroup.add(moonBlock16)

}


function thirdLayer(){

  moonBlock1 = createSprite(25, 475)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(75, 475)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(125, 475)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(175, 475)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13
  blocksGroup.add(moonBlock4)

  moonBlock5 = createSprite(225, 475)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(275, 475)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13
  blocksGroup.add(moonBlock6)

  moonBlock7 = createSprite(325, 475)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(375, 475)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(425, 475)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)

  moonBlock10 = createSprite(475, 475)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)

  moonBlock11 = createSprite(525, 475)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13
  blocksGroup.add(moonBlock11)

  moonBlock12 = createSprite(575, 475)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13
  blocksGroup.add(moonBlock12)

  moonBlock13 = createSprite(625, 475)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13
  blocksGroup.add(moonBlock13)

  moonBlock14 = createSprite(675, 475)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13
  blocksGroup.add(moonBlock14)

  moonBlock15 = createSprite(725, 475)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13
  blocksGroup.add(moonBlock15)

  moonBlock16 = createSprite(775, 475)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13
  blocksGroup.add(moonBlock16)

  moonBlock17 = createSprite(825, 475)
  moonBlock17.addImage("moon", moonBlockImage)
  moonBlock17.scale = 0.13
  blocksGroup.add(moonBlock17)

  moonBlock18 = createSprite(875, 475)
  moonBlock18.addImage("moon", moonBlockImage)
  moonBlock18.scale = 0.13
  blocksGroup.add(moonBlock18)

//

  moonBlock1 = createSprite(width - 25, 475)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(width - 75, 475)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(width - 125, 475)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(width - 175, 475)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13
  blocksGroup.add(moonBlock4)

  moonBlock5 = createSprite(width - 225, 475)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(width - 275, 475)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13
  blocksGroup.add(moonBlock6) 

  moonBlock7 = createSprite(width - 325, 475)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(width - 375, 475)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(width - 425, 475)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)

  moonBlock10 = createSprite(width - 475, 475)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)

  moonBlock11 = createSprite(width - 525, 475)
  moonBlock11.addImage("moon", moonBlockImage)
  moonBlock11.scale = 0.13
  blocksGroup.add(moonBlock11)

  moonBlock12 = createSprite(width - 575, 475)
  moonBlock12.addImage("moon", moonBlockImage)
  moonBlock12.scale = 0.13
  blocksGroup.add(moonBlock12)

  moonBlock13 = createSprite(width - 625, 475)
  moonBlock13.addImage("moon", moonBlockImage)
  moonBlock13.scale = 0.13
  blocksGroup.add(moonBlock13)

  moonBlock14 = createSprite(width - 675, 475)
  moonBlock14.addImage("moon", moonBlockImage)
  moonBlock14.scale = 0.13
  blocksGroup.add(moonBlock14)

  moonBlock15 = createSprite(width - 725, 475)
  moonBlock15.addImage("moon", moonBlockImage)
  moonBlock15.scale = 0.13
  blocksGroup.add(moonBlock15)

  moonBlock16 = createSprite(width - 775, 475)
  moonBlock16.addImage("moon", moonBlockImage)
  moonBlock16.scale = 0.13
  blocksGroup.add(moonBlock16)

  moonBlock17 = createSprite(width - 825, 475)
  moonBlock17.addImage("moon", moonBlockImage)
  moonBlock17.scale = 0.13
  blocksGroup.add(moonBlock17)

  moonBlock18 = createSprite(width - 875, 475)
  moonBlock18.addImage("moon", moonBlockImage)
  moonBlock18.scale = 0.13
  blocksGroup.add(moonBlock18)

}


function fourthLayer(){

  moonBlock1 = createSprite(25,675)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(75,675)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock2)

  moonBlock3 = createSprite(125,675)
  moonBlock3.addImage("moon", moonBlockImage)
  moonBlock3.scale = 0.13
  blocksGroup.add(moonBlock3)

  moonBlock4 = createSprite(175,675)
  moonBlock4.addImage("moon", moonBlockImage)
  moonBlock4.scale = 0.13
  blocksGroup.add(moonBlock4)

  moonBlock5 = createSprite(225,675)
  moonBlock5.addImage("moon", moonBlockImage)
  moonBlock5.scale = 0.13
  blocksGroup.add(moonBlock5)

  moonBlock6 = createSprite(275,675)
  moonBlock6.addImage("moon", moonBlockImage)
  moonBlock6.scale = 0.13
  blocksGroup.add(moonBlock6)

  moonBlock7 = createSprite(325,675)
  moonBlock7.addImage("moon", moonBlockImage)
  moonBlock7.scale = 0.13
  blocksGroup.add(moonBlock7)

  moonBlock8 = createSprite(375,675)
  moonBlock8.addImage("moon", moonBlockImage)
  moonBlock8.scale = 0.13
  blocksGroup.add(moonBlock8)

  moonBlock9 = createSprite(425,675)
  moonBlock9.addImage("moon", moonBlockImage)
  moonBlock9.scale = 0.13
  blocksGroup.add(moonBlock9)

  moonBlock10 = createSprite(475,675)
  moonBlock10.addImage("moon", moonBlockImage)
  moonBlock10.scale = 0.13
  blocksGroup.add(moonBlock10)
}


function fifthLayer(){

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock2 = createSprite(25,812.5)
  moonBlock2.addImage("moon", moonBlockImage)
  moonBlock2.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

  moonBlock1 = createSprite(25,812.5)
  moonBlock1.addImage("moon", moonBlockImage)
  moonBlock1.scale = 0.13
  blocksGroup.add(moonBlock1)

}


function sixthLayer(){

}

function spawnDiamond(){
  whiteDiamond1 = createSprite(420, 40)
  whiteDiamond1.addImage("white", whiteDiamondImage)
  whiteDiamond1.scale = 0.05

  whiteDiamond2 = createSprite(width - 750, 205)
  whiteDiamond2.addImage("white", whiteDiamondImage)
  whiteDiamond2.scale = 0.05

  whiteDiamond3 = createSprite(width- 100, 265)
  whiteDiamond3.addImage("white", whiteDiamondImage)
  whiteDiamond3.scale = 0.05

  whiteDiamond4 = createSprite(600, 400)
  whiteDiamond4.addImage("white", whiteDiamondImage)
  whiteDiamond4.scale = 0.05

  whiteDiamond5 = createSprite(width - 50, 615)
  whiteDiamond5.addImage("white", whiteDiamondImage)
  whiteDiamond5.scale = 0.05

  whiteDiamond6 = createSprite(80, height - 80)
  whiteDiamond6.addImage("white", whiteDiamondImage)
  whiteDiamond6.scale = 0.05


  blackDiamond1 = createSprite(width - 420, 40)
  blackDiamond1.addImage("black", blackDiamondImage)
  blackDiamond1.scale = 0.05

  blackDiamond2 = createSprite(750, 205)
  blackDiamond2.addImage("black", blackDiamondImage)
  blackDiamond2.scale = 0.05

  blackDiamond3 = createSprite(100, 265)
  blackDiamond3.addImage("black", blackDiamondImage)
  blackDiamond3.scale = 0.05

  blackDiamond4 = createSprite(width - 600, 400)
  blackDiamond4.addImage("black", blackDiamondImage)
  blackDiamond4.scale = 0.05

  blackDiamond5 = createSprite(50, 535)
  blackDiamond5.addImage("black", blackDiamondImage)
  blackDiamond5.scale = 0.05

  blackDiamond6 = createSprite(width - 510, 715)
  blackDiamond6.addImage("black", blackDiamondImage)
  blackDiamond6.scale = 0.05
}