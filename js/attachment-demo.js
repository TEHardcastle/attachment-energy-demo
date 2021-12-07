"use strict"

function drawLattice(){
    var svgns = "http://www.w3.org/2000/svg"
    var container = document.getElementById( "attachmentDiagram" );
    for (var x = 0; x < 1001; x += 100) {
        for (var y = 0; y < 1001; y += 100) {
            var carbon = document.createElementNS(svgns, 'circle');
            var oxygen = document.createElementNS(svgns, 'circle');
            var hydrogen1 = document.createElementNS(svgns, 'circle');
            var hydrogen2 = document.createElementNS(svgns, 'circle');
            var bond0 = document.createElementNS(svgns, 'line');
            var bond1 = document.createElementNS(svgns, 'line');
            var bond2 = document.createElementNS(svgns, 'line');
            var bond3 = document.createElementNS(svgns, 'line');
            bond0.setAttributeNS(null, 'x1', x + 3);
            bond0.setAttributeNS(null, 'y1', y);
            bond0.setAttributeNS(null, 'x2', x + 3);
            bond0.setAttributeNS(null, 'y2', y - 33);
            bond0.setAttributeNS(null, 'class', 'bond');
            container.appendChild(bond0);
            bond1.setAttributeNS(null, 'x1', x - 3);
            bond1.setAttributeNS(null, 'y1', y);
            bond1.setAttributeNS(null, 'x2', x - 3);
            bond1.setAttributeNS(null, 'y2', y - 33);
            bond1.setAttributeNS(null, 'class', 'bond');
            container.appendChild(bond1);
            bond2.setAttributeNS(null, 'x1', x);
            bond2.setAttributeNS(null, 'y1', y);
            bond2.setAttributeNS(null, 'x2', x - 25);
            bond2.setAttributeNS(null, 'y2', y + 10);
            bond2.setAttributeNS(null, 'class', 'bond');
            container.appendChild(bond2);
            bond3.setAttributeNS(null, 'x1', x);
            bond3.setAttributeNS(null, 'y1', y);
            bond3.setAttributeNS(null, 'x2', x + 25);
            bond3.setAttributeNS(null, 'y2', y + 10);
            bond3.setAttributeNS(null, 'class', 'bond');
            container.appendChild(bond3);
            carbon.setAttributeNS(null, 'cx', x);
            carbon.setAttributeNS(null, 'cy', y);
            carbon.setAttributeNS(null, 'r', 10);
            carbon.setAttributeNS(null, 'class', 'carbon');
            container.appendChild(carbon);
            oxygen.setAttributeNS(null, 'cx', x);
            oxygen.setAttributeNS(null, 'cy', y - 33);
            oxygen.setAttributeNS(null, 'r', 10);
            oxygen.setAttributeNS(null, 'class', 'oxygen');
            container.appendChild(oxygen);
            hydrogen1.setAttributeNS(null, 'cx', x + 25);
            hydrogen1.setAttributeNS(null, 'cy', y + 10);
            hydrogen1.setAttributeNS(null, 'r', 10);
            hydrogen1.setAttributeNS(null, 'class', 'hydrogen');
            container.appendChild(hydrogen1);
            hydrogen2.setAttributeNS(null, 'cx', x - 25);
            hydrogen2.setAttributeNS(null, 'cy', y + 10);
            hydrogen2.setAttributeNS(null, 'r', 10);
            hydrogen2.setAttributeNS(null, 'class', 'hydrogen');
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
            document.getElementById("cutoffValue").innerHTML = newCutoff.toPrecision(4);
            }
        checkMoleculePositions();
    }

    function endDrag(evt) {
      clicked = false;
    }
}

function checkMoleculePositions(){

}
