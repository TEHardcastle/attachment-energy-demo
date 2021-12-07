"use strict"

function drawLattice(){
    var svgns = "http://www.w3.org/2000/svg"
    var container = document.getElementById( "attachmentDiagram" );
    for (var x = 100; x < 1000; x += 100) {
        for (var y = 100; y < 1000; y += 100) {
            var carbon = document.createElementNS(svgns, 'circle');
            var oxygen = document.createElementNS(svgns, 'circle');
            var hydrogen1 = document.createElementNS(svgns, 'circle');
            var hydrogen2 = document.createElementNS(svgns, 'circle');
            var bond1 = document.createElementNS(svgns, 'line');
            var bond2 = document.createElementNS(svgns, 'line');
            var bond3 = document.createElementNS(svgns, 'line');
            bond1.setAttributeNS(null, 'x1', x);
            bond1.setAttributeNS(null, 'y1', y);
            bond1.setAttributeNS(null, 'x2', x);
            bond1.setAttributeNS(null, 'y2', y - 35);
            bond1.setAttributeNS(null, 'stroke', 'black');
            bond1.setAttributeNS(null, 'stroke-width', '3px');
            container.appendChild(bond1);
            bond2.setAttributeNS(null, 'x1', x);
            bond2.setAttributeNS(null, 'y1', y);
            bond2.setAttributeNS(null, 'x2', x - 25);
            bond2.setAttributeNS(null, 'y2', y + 10);
            bond2.setAttributeNS(null, 'stroke', 'black');
            bond2.setAttributeNS(null, 'stroke-width', '3px');
            container.appendChild(bond2);
            bond3.setAttributeNS(null, 'x1', x);
            bond3.setAttributeNS(null, 'y1', y);
            bond3.setAttributeNS(null, 'x2', x + 25);
            bond3.setAttributeNS(null, 'y2', y + 10);
            bond3.setAttributeNS(null, 'stroke', 'black');
            bond3.setAttributeNS(null, 'stroke-width', '3px');
            container.appendChild(bond3);
            carbon.setAttributeNS(null, 'cx', x);
            carbon.setAttributeNS(null, 'cy', y);
            carbon.setAttributeNS(null, 'r', 10);
            carbon.setAttributeNS(null, 'fill', '#444444');
            carbon.setAttributeNS(null, "stroke", "black");
            carbon.setAttributeNS(null, "stroke-width", "3");
            container.appendChild(carbon);
            oxygen.setAttributeNS(null, 'cx', x);
            oxygen.setAttributeNS(null, 'cy', y - 35);
            oxygen.setAttributeNS(null, 'r', 10);
            oxygen.setAttributeNS(null, 'fill', 'red');
            oxygen.setAttributeNS(null, "stroke", "black");
            oxygen.setAttributeNS(null, "stroke-width", "3");
            container.appendChild(oxygen);
            hydrogen1.setAttributeNS(null, 'cx', x + 25);
            hydrogen1.setAttributeNS(null, 'cy', y + 10);
            hydrogen1.setAttributeNS(null, 'r', 10);
            hydrogen1.setAttributeNS(null, 'fill', '#EEEEEE');
            hydrogen1.setAttributeNS(null, "stroke", "black");
            hydrogen1.setAttributeNS(null, "stroke-width", "3");
            container.appendChild(hydrogen1);
            hydrogen2.setAttributeNS(null, 'cx', x - 25);
            hydrogen2.setAttributeNS(null, 'cy', y + 10);
            hydrogen2.setAttributeNS(null, 'r', 10);
            hydrogen2.setAttributeNS(null, 'fill', '#EEEEEE');
            hydrogen2.setAttributeNS(null, "stroke", "black");
            hydrogen2.setAttributeNS(null, "stroke-width", "3");
            container.appendChild(hydrogen2);
        }
    }
}

function makeDraggable(evt) {
    let selectedElement = false;
    let initialClickXPosition;
    let initialClickYPosition;
    let initialCutoffRadius = 150;
    let xChange;
    let yChange;
    let totalChange;
    let clicked = false;
    let svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
    drawLattice();

    function startDrag(evt) {
        initialCutoffRadius = parseFloat(document.getElementById("circleCutoff").getAttributeNS(null, "r"));
        initialClickXPosition = evt.clientX;
        initialClickYPosition = evt.clientY;
        clicked = true;
    }

    function drag(evt) {
        if (clicked){
            xChange = evt.clientX - initialClickXPosition;
            yChange = evt.clientY - initialClickYPosition;
            totalChange = xChange+yChange;
            let newCutoff = initialCutoffRadius + (0.5*totalChange);
            document.getElementById("circleCutoff").setAttribute("r", newCutoff);
            }
    }

    function endDrag(evt) {
      clicked = false;
    }
}
