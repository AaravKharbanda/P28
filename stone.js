class Stone{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
        
    }
    World.add(world, this.stone);
    this.stone = loadImage("Plucking+mangoes/Plucking+mangoes/stone.png")
    

}

display(){
    if(this.stone.bodyA){
        var pointA = this.sling.bodyA.position;
    
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);  
    }
    
}
fly(){
 this.stone.bodyA = null   
}   
}

