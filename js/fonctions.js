/**
 * @author flarre
 */

var scene1;
var couche1;
var rectangle1;

function initialiser()
{
	var kn_layerWidth=578;
	var kn_layerHeight=200;
	scene1 = new Kinetic.Stage({
    	container:'boite1',
        width:kn_layerWidth,
        height:kn_layerHeight        		
    });

    couche1 = new Kinetic.Layer();

	rectangle1 = new Kinetic.Rect({
    	x:0,
        y:0,
    	width:kn_layerWidth,
        height:kn_layerHeight,
        fill:'red',
        stroke:'black',
        strokeWidth:5
	});
        	
	couche1.add(rectangle1);
	scene1.add(couche1);
	surveilleEvenement();
      	        	
}

function surveilleEvenement(){
	var coucheFormes = new Kinetic.Layer();
	var coucheMessages = new Kinetic.Layer();
	
	var cercle1 =new Kinetic.Circle({
		x:scene1.getWidth() / 2,
		y:scene1.getHeight() / 2,
		radius:70,
		fill:'green',
		stroke:'black',
		strokeWidth:2
	});
	
	coucheFormes.add(cercle1);
	scene1.add(coucheFormes);
	scene1.add(coucheMessages);
	
	cercle1.on('mouseover', function () {
		ecrireMessage(coucheMessages, 'Survol du cercle')
	})	

	cercle1.on('mouseout', function () {
		ecrireMessage(coucheMessages, 'Hors du cercle')
	})	

	cercle1.on('mousedown', function () {
		ecrireMessage(coucheMessages, 'Cercle cliqué')
	})	

	cercle1.on('mouseup', function () {
		ecrireMessage(coucheMessages, 'Cercle relaché')
	})	
	
}

function ecrireMessage(coucheMessage, message){

	var contexte = coucheMessage.getContext();
	
	coucheMessage.clear();
	
	contexte.font = '12pt Arial';
	contexte.fillStyle = 'black';
	contexte.fillText(message, 10, 25);
	
}
