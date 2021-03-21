class Form{
 constructor(){


 }


display(){
 
    var title = createElement("h1","Car Racing Game");
     title.position(100,30);
    
    var input1 = createInput("Name");
    input1.position(130,150);
    
   var  button = createButton("Play");
    button.position(130,200);
    

    button.mousePressed(function (){
        input1.hide();
        button.hide();
        
        var name = input1.value();
        playerCount = playerCount+1
        player.updatename(name)
        player.updatecount(playerCount);
        
        var greeting = createElement("h2","Hello "+ name);
        greeting.position(130,150);
        player.updatename(name)

        
      });







}



}