// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width=80,height=60){
    this.width = width;
    this.height = height;
}
Size.prototype.resize=function(newWidth,newHeight){
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x=0,y=0){
    this.x = x;
    this.y = y;
}
Position.prototype.move=function(newX,newY){
    this.x = newX;
    this.y = newY;
}
export class ProgramWindow{
    
    screenSize={
        "width":800,
        "height":600
    }
     size = new Size();
     position = new Position();
}
ProgramWindow.prototype.resize=function(newsize=new Size()){
    this.size = newsize;
    
    if(this.size.width<1){
        this.size.width = 1;
    }
    if(this.size.height<1){
        this.size.height = 1;
    }
   if(this.position.x+this.size.width>this.screenSize.width){
        this.size.width = this.screenSize.width-this.position.x;
    }
    if(this.position.y+this.size.height>this.screenSize.height){
        this.size.height = this.screenSize.height-this.position.y;
    }

    
}
ProgramWindow.prototype.move=function(newposition=new Position()){
    this.position = newposition;
    if(this.position.x<0){
        this.position.x = 0;
    }
    if(this.position.y<0){
        this.position.y = 0;
    }
    if(this.position.x+this.size.width>this.screenSize.width){
        this.position.x = this.screenSize.width-this.size.width;
    }
    if(this.position.y+this.size.height>this.screenSize.height){
        this.position.y = this.screenSize.height-this.size.height;
    }



}
export function changeWindow(ProgramWindow){
    ProgramWindow.resize(new Size(400,300));
    ProgramWindow.move(new Position(100,150));
    return ProgramWindow;
}