var marks = [30,40,45,35];
var sum =0;

function setup() {
  createCanvas(400, 400);
  for(var i =0; i<marks.length;i++){
    //console.log(marks[i])
    sum = sum + marks[i];
    console.log(sum/marks.length)
    
  }
  
}

function draw() {
  background(150);
}