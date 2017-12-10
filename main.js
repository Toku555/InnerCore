/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/

Callback.addCallback("PlayerAttack", function(attacker, entity){
  try{
    var render = Entity.getRender(entity;
    var str = "";

    for(var i in render)
      str += (""+i+" = "+render[i]+"\n");

    Game.dialogMessage (str, "Render");
  }catch(e){
    Game.dialogMessage (e, "エラー");
  }
});

// file: aaa.js
