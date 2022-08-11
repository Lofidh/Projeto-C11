var street,boy, leftBoundary,rightBoundary;
var streetImg,boyImg;
var i;


function preload(){
streetImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
street = createSprite(200,200)
street.addImage(streetImg)


//Criando menino que corre 
boy = createSprite(200,250)
boy.addAnimation("boy",boyImg)
boy.scale = 0.05


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}


function draw() {
background(0);
street.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.x = mouseX



 //Reiniciar o fundo
 if (street.y>400){
street.y = height/2
 }



 drawSprites();

 }




