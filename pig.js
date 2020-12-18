class Pig {
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50);
        
        World .add(world,this.body);

    }
display(){
    rectMode(CENTER);
    fill ("green");
    rect(this.body.position.x,this.body.position.y,50,50);
}




}