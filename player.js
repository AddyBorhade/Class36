class Player{
    constructor(){
        

    }

getcount(){
database.ref("playerCount").on("value",function(data){
playerCount = data.val()
})



}

updatecount(count){
    database.ref("/").set({playerCount:count})
}
updatename(name){
    var index = "player" + playerCount
    database.ref(index).set({name:name})
}



}