/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/

Callback.addCallback("LevelLoaded", function(){
  try{
    var render = Entity.getRender(Player.get());
    var str = "";

    for(var i in render)
      str += (""+i+" = "+render[i]+"\n");

    Game.dialogMessage (str, "Render");
  }catch(e){
    Game.dialogMessage (e, "エラー");
  }
});

// file: aaa.js
