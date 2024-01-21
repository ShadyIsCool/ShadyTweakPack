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

MainMenuOverlays.draw; {
    if (state == states.menu) {
        ctx.fillStyle = transparent ? "white" : "white";
        ctx.strokeStyle = gradient;
        ctx.beginPath()
        ctx.roundRect(1920 / 2 - 200, 1080 / 2 - 425, 400, 150, 30)
        ctx.stroke()
        ctx.fill()

        let titleLocation = new Vector2D(1920 / 2, 200).asArray()
        let leftTextLocation = new Vector2D(510, 800).asArray()
        let rightTextLocation1 = new Vector2D(1410, 800).asArray()
        let rightTextLocation2 = new Vector2D(1410, 840).asArray()

        ctx.font = "px Verdana"
        ctx.fillStyle = "#000"
        ctx.strokeStyle = "#eee"
        ctx.strokeText("FLICC", ...titleLocation)
        ctx.fillText("FLICC", ...titleLocation)

        ctx.font = "35px Russo One"
        ctx.strokeText("Editor", ...leftTextLocation)
        ctx.fillText("Editor", ...leftTextLocation)

        ctx.strokeText("Online", ...rightTextLocation1)
        ctx.fillText("Online", ...rightTextLocation1)

        ctx.strokeText("Levels", ...rightTextLocation2)
        ctx.fillText("Levels", ...rightTextLocation2)

        this.settingsButtonDrawCallback()
    }
}
