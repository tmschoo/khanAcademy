
background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

//windows
fill(163, 116, 116);
for (var pointX = 100; pointX <300; pointX+=20){
    rect(pointX,180,16,16); //WindowSill Top Row
    line(pointX+8, 100 + 80, pointX+8, 100+96); //Windowframe
    line(pointX, 100+88, pointX+16, 100+88); //windowFrame
    
    for (var pointY = 100; pointY <206; pointY+=200){ //3 Rows
        rect(pointX,pointY+80,16,16);
        line(pointX+8, pointY + 80, pointX+8, pointY+96);
        line(pointX, pointY+88, pointX+16, pointY+88);
    }
}
