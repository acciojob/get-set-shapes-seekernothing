//complete this code
class Rectangle {
	constructor (height,width){
		this.height = height;
		this.width= width;
	}
	
	get(height){
		return this.height
	}
	get(width){
		return this.width
	}

	getArea(){
		return this.height*this.width
	}
	
}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
