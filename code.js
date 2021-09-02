var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["566706f5-830c-44d1-abd4-b546cbf9d4e6"],"propsByKey":{"566706f5-830c-44d1-abd4-b546cbf9d4e6":{"name":"diamond","sourceUrl":"assets/api/v1/animation-library/gamelab/4u3N8GIq2HWm5e5wiuwZZFK2FpiCqEyo/category_video_games/ore_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"4u3N8GIq2HWm5e5wiuwZZFK2FpiCqEyo","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4u3N8GIq2HWm5e5wiuwZZFK2FpiCqEyo/category_video_games/ore_diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(190,360,15,15);
var laser1 = createSprite(0,340,200,5);
laser1.shapeColor="red";
var laser2 = createSprite(356,100,150,5);
laser2.shapeColor="red";
var diamond = createSprite(365,45,10,10);
diamond.setAnimation("diamond");
createEdgeSprites();
laser1.velocityY=-5;

laser2.velocityY=5;

function draw() {
  background("lightgrey");
  laser1.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge)
thief.bounceOff(rightEdge);
thief.bounceOff(topEdge);
thief.bounceOff(bottomEdge);

if (keyDown("right")) {
  thief.velocityX=2;
  thief.velocityY=0;
}
if (keyDown("left")) {
  thief.velocityX=-2;
  thief.velocityY=0;
  }
if (keyIsDown("up")) {
  thief.velocityY=2;
  thief.velocityX=0;
}
if (keyIsDown(DOWN_ARROW)) {
  thief.velocityY=-2;
  thief.velocityX=0;
}
if (thief.isTouching(laser1)){ 
  textSize(24);
  text("Thief is caught",120,200);
  thief.velocityY=0;
  laser1.velocityY=0
}
if (thief.isTouching(laser2)) {
  textSize(24);
  text("Thief is caught",120,200);
  thief.velocityX=0
  laser2.velocityY=0
  laser1.velocityY=0
}





drawSprites() 
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
