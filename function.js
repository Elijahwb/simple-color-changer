let main = document.getElementById("main");

main.addEventListener('mousemove', event => {
    //get the X and Y Coordinates of the mouse
    xPosition = event.clientX;
    yPosition = event.clientY;
    //set the RGB values according to X & Y values
    main.style.backgroundColor = `rgb(${xPosition}, ${yPosition}, ${(xPosition / yPosition) * 100})`;
});