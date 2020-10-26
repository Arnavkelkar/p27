class Tree{
    constructor(){
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Plucking mangoes/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 600, 600, this.width, this.height);
    }
}