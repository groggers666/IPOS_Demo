var docType = "";

function checkDocType(fileName)	{
	var str = fileName;
	var res = str.split("_");
	//alert(res[1]);
	
	if (res[1] == "POS.pdf")	{
		docType = "pos";
		
	} else	{	
		docType= "neg";
		
	}	
}


function viewDataPoint(dataPoint) {	
	switch(docType) {
		  case 'abs':
			showDoc('abs');
			break;
		  case 'pos':
			showDoc('pos');
			break;
		  case 'neg':
			showDoc('neg');
			break;
		  default:
			// code block
		}

  setTimeout(function () {
    var canvas = document.getElementById('theCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
	  switch(dataPoint) {
		  case 'appNo':
			ctx.rect(440, 110, 100, 20);
			document.getElementById("detailsBox9").style.display = "block";
			document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'filDate':
			ctx.rect(80, 155, 100, 20);
			document.getElementById("detailsBox9").style.display = "block";
			document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'priDate':
			ctx.rect(230, 155, 100, 20);
			document.getElementById("detailsBox9").style.display = "block";
			document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'stat':
			ctx.rect(95, 510, 260, 20);
			document.getElementById("detailsBox9").style.display = "block";
			document.getElementById("detailsBox6").style.display = "none";
			break;		  
		  default:
			// code block
		}
	
    ctx.fill();
    ctx.stroke();

  }, 200);

}

function showDoc(docType) {
  var canvas = document.getElementById('theCanvas');
  var ctx = canvas.getContext('2d');

  var img = new Image();

  img.onload = function () {
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    ctx.drawImage(img, 0, 0);
  }

  //img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/yellow-flower.jpg';
  
  
  switch(docType) {
		  case 'abs':
			img.src = 'SampleFiles/Pics/abs_1.png';
			break;
		  case 'pos':
			img.src = 'SampleFiles/Pics/pos_1.png';
			break;
		  case 'neg':
			img.src = 'SampleFiles/Pics/neg_1.png';
			break;
		  default:
			// code block
		}
  

}
