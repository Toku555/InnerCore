/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/

Callback.addCallback("LevelLoaded", function(){
  try{
    RenderAPI();
  }catch(e){
    Game.dialogMessage (e, "エラー");
  }
});

// file: aaa.js
