Utils.drawText = function (string, position, fontSize = 35, transparent = false) {
    ctx.font = fontSize + "px Verdana";
    ctx.fillStyle = transparent ? "white" : "white";
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "tomato");
    gradient.addColorStop(1, "blue");
    ctx.strokeStyle = gradient;
    ctx.strokeText(string, ...position.asArray());
    ctx.fillText(string, ...position.asArray());
}