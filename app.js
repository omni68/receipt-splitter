document.addEventListener("DOMContentLoaded", function(event) { 
  	var canvas = document.querySelector('canvas');
	var video = document.querySelector('video');
	var image = document.querySelector('img');
	var stream = null;

  	if (!!navigator.webkitGetUserMedia) {
  		document.getElementById('#go').onclick = startCamera;
  		document.getElementById('#shoot').onclick = snapShot;
  		document.getElementById('#stop').onclick = killCamera;
  		document.getElementById('#convert').onclick = readText;
	} else {
	  	alert('getUserMedia() is not supported in your browser');
	}

	function startCamera() {
  		navigator.webkitGetUserMedia({ video: true }, function(_stream) {
		    video.src = window.URL.createObjectURL(_stream);
		    stream = _stream;
	  	}, function(){
	  		alert('An error occurred.');
	  	});
  	}

  	function killCamera(){
  		if(stream)
  			stream.stop();
  	}

  	function snapShot() {
	    if (stream) {
	        canvas.getContext('2d').drawImage(video, 0, 0, 440, 320);
	        image.src = canvas.toDataURL();
	    }
	}

	function readText(){
		alert('hello world');
	}

});