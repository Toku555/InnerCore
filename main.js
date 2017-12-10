/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/

Callback.addCallback("LevelLoaded", function(){
  try{
    var rApi = RenderAPI();
    var str = "";

    for(var i in rApi)
      str += (i+"\n");

    Game.dialogMessage (str, "RenderAPI");
  }catch(e){
    Game.dialogMessage (e, "エラー");
  }
});

// file: aaa.js
