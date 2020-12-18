class Bird {
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50);
        
        World .add(world,this.body);

    }
display(){
    rectMode(CENTER);
    fill ("red");
    this.body.position.x=mouseX;
    this.body.position.y=mouseY
    rect(this.body.position.x,this.body.position.y,50,50);
}




}