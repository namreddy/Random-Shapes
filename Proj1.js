var elem = document.getElementById('myCanvas');
elem.onclick = function() { 
    var context = elem.getContext("2d");
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, 400, 400);
    
    var randomShape = Math.floor((Math.random() * 4) + 1);
    
    if (randomShape == 1) {
        context.beginPath();
        context.rect(25, 50, 200, 100);
        context.fillStyle = '#00FF00';
        context.fill();
        context.lineWidth = 7;
    } else if (randomShape == 2) {
        context.beginPath();
        context.arc(200, 200, 69, 0, 2 * Math.PI, false);
        context.fillStyle = '#FF0000';
        context.fill();
        context.lineWidth = 5;
    } else if (randomShape == 3) {
        context.beginPath();
        context.arc(276, 255, 70, 0, Math.PI, false);
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = '#0000FF';
        context.fill();
    }
    else if(randomShape == 4){
        var grd = context.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");
        // Fill with gradient
        context.fillStyle = grd;
        context.fillRect(78, 150, 150, 80);
    }
}