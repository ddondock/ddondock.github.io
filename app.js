const frogImg_div = document.getElementById("frogImg_div")
const frogImg = document.getElementById("frogImg")
var xScale = 1;

frogImg.addEventListener("mousemove", function(e) {
    var x = e.offsetX
    var y = e.offsetY
    var rotatey = (1/10) * x - 20;
    var rotatex = (-8/95) * y + 20;
    frogImg.style = 'transform: perspective(350px) rotateX(' + -rotatex + 'deg) rotateY(' + -rotatey + 'deg)'
})
frogImg.addEventListener("mouseleave", function(e) {
    frogImg.style = "transform: rotateX(0deg) rotateY(0deg) rotateX(0deg)"
})

/* 
ax + b = y
(0, -20)
(400, 20)
b = -20
400a - 20 = 20
400a = 40
10a = 1
*/