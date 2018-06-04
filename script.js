function initMap() {
  var uluru = {
    lat: 55.65548200000001,
    lng: 8.29073900000003
  };
  var map = new google.maps.Map(document.getElementById('kort'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

window.addEventListener("click", function(event) {
  var box1 = document.querySelector('.box1');
  var img1 = document.querySelector('#bil')
  var p1 = document.querySelector('#bilp')
  if (event.target == box1 || event.target == img1 || event.target == p1) {
    window.location.href = ('transportsider/bil.html')

  }
});

window.addEventListener("click", function(event) {
  var box2 = document.querySelector('.box2');
  var img2 = document.querySelector('#taxa')
  var p2 = document.querySelector('#taxap')
  if (event.target == box2 || event.target == img2 || event.target == p2) {
    window.location.href = ('transportsider/taxa.html')

  }
});


window.addEventListener("click", function(event) {
  var box3 = document.querySelector('.box3');
  var img3 = document.querySelector('#tog')
  var p3 = document.querySelector('#togp')
  if (event.target == box3 || event.target == img3 || event.target == p3) {
    window.location.href = ('transportsider/tog.html')

  }
});


window.addEventListener("click", function(event) {
  var box4 = document.querySelector('.box4');
  var img4 = document.querySelector('#cykel')
  var p4 = document.querySelector('#cykelp')
  if (event.target == box4 || event.target == img4 || event.target == p4) {
    window.location.href = ('transportsider/cykel.html')
  }
});

window.addEventListener("click", function(event) {
  var box5 = document.querySelector('.box5');
  var img5 = document.querySelector('#parkeringspladser')
  var p5 = document.querySelector('#parkeringspladsp')
  if (event.target == box5 || event.target == img5 || event.target == p5) {
    window.location.href = ('transportsider/parkeringspladser.html')

  }
});

window.addEventListener("click", function(event) {
  var box6 = document.querySelector('.box6');
  var img6 = document.querySelector('#camping')
  var p6 = document.querySelector('#campingp')
  if (event.target == box6 || event.target == img6 || event.target == p6) {
    window.location.href = ('transportsider/camping.html')
  }
});

window.addEventListener("click", function(event) {
  var btn1 = document.querySelector('#btn1')
  if (event.target == btn1) {
    window.location.href = ('omvroegumsider/ballonpark.html')
  }
});

window.addEventListener("click", function(event) {
  var btn2 = document.querySelector('#btn2')
  if (event.target == btn2) {
    window.location.href = ('omvroegumsider/skov.html')
  }
});

window.addEventListener("click", function(event) {
  var btn3 = document.querySelector('#btn3')
  if (event.target == btn3) {
    window.location.href = ('omvroegumsider/vroegumfiskesoe.html')
  }
});

window.addEventListener("click", function(event) {
  var btn4 = document.querySelector('#btn4')
  if (event.target == btn4) {
    window.location.href = ('omvroegumsider/vroegumstation.html')
  }
});

window.addEventListener("click", function(event) {
  var btn5 = document.querySelector('#btn5')
  if (event.target == btn5) {
    window.location.href = ('omvroegumsider/dengamleskole.html')
  }
});


/*

var imageSlides = document.querySelectorAll('.imageslides');
var leftArrow = document.querySelector('.arrow-left');
var rightArrow = document.querySelector('.arrow-right');
var activeImageSlide = 0;


function reset() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].style.display = 'none';
  }
}


function startSlide() {
  reset();
  imageSlides[0].style.display = "block";

}

function pressLeftArrow() {
  reset();
  imageSlides[activeImageSlide - 1].style.display = 'block';
  activeImageSlide--;

}

function pressRightArrow() {
  reset();
  imageSlides[activeImageSlide + 1].style.display = 'block';
  activeImageSlide++;

}
if (leftArrow) {
  leftArrow.addEventListener("click", function() {
    if (activeImageSlide == 0) {
      activeImageSlide = imageSlides.length;
    }
    pressLeftArrow();
  });
}




if (rightArrow) {
  rightArrow.addEventListener("click", function() {
    if (activeImageSlide == imageSlides.length - 1) {
      activeImageSlide = -1;
    }
    pressRightArrow();
  });

}

startSlide();

/*---------------------------*/

function showEvent1() {
  document.querySelector("#month").innerHTML = "12. MAJ";
  document.querySelector("#month").style.marginTop = "30px";
  document.querySelector("#month").style.fontSize = "40px";
  document.querySelector("#button-1").style.display = "block";
  document.querySelector("#button-2").style.display = "none";
  document.querySelector("#button-3").style.display = "none";
}


var getColour;
getColour = localStorage.background;
document.querySelector("#tolv").style.backgroundColor = getColour;

function datoColor1() {
document.querySelector("#month").innerHTML = "MAJ";
document.querySelector("#month").style.marginTop = "150px";
document.querySelector("#month").style.fontSize = "70px";

if (localStorage.getItem('background') !== null) {
  getColour = localStorage.background;
  document.querySelector("#tolv").style.backgroundColor = getColour;

  }
}

function saveEvent1() {
  if (getColour == '#EDE623') {
    getColour = '#EDE623';
    document.querySelector("#tolv").style.backgroundColor = "#EDE623";
    localStorage.setItem('background', '#EDE623');
  } else {
    document.querySelector("#tolv").style.backgroundColor = "#EDE623";
    localStorage.setItem('background', '#EDE623');
  }
}

function deleteEvent1 () {
  localStorage.removeItem('background');
  document.querySelector("#tolv").style.backgroundColor = "transparent";
}

/*--------*/

function showEvent2() {
  document.querySelector("#month").innerHTML = "21. MAJ";
  document.querySelector("#month").style.marginTop = "30px";
  document.querySelector("#month").style.fontSize = "40px";
  document.querySelector("#button-2").style.display = "block";
  document.querySelector("#button-1").style.display = "none";
  document.querySelector("#button-3").style.display = "none";
}


var getColour1;
getColour1 = localStorage.background1;
document.querySelector("#enogtyve").style.backgroundColor = getColour1;

function datoColor2() {
document.querySelector("#month").innerHTML = "MAJ";
document.querySelector("#month").style.marginTop = "150px";
document.querySelector("#month").style.fontSize = "70px";

if (localStorage.getItem('background1') !== null) {
  getColour1 = localStorage.background1;
  document.querySelector("#enogtyve").style.backgroundColor = getColour1;

  }
}

function saveEvent2() {
  if (getColour1 == '#EDE623') {
    getColour1 = '#EDE623';
    document.querySelector("#enogtyve").style.backgroundColor = "#EDE623";
    localStorage.setItem('background1', '#EDE623');
  } else {
    document.querySelector("#enogtyve").style.backgroundColor = "#EDE623";
    localStorage.setItem('background1', '#EDE623');
  }
}

function deleteEvent2 () {
  localStorage.removeItem('background1');
  document.querySelector("#enogtyve").style.backgroundColor = "transparent";
}

/*---------------*/
function showEvent3() {
  document.querySelector("#month").innerHTML = "29. MAJ";
  document.querySelector("#month").style.marginTop = "30px";
  document.querySelector("#month").style.fontSize = "40px";
  document.querySelector("#button-3").style.display = "block";
  document.querySelector("#button-2").style.display = "none";
  document.querySelector("#button-1").style.display = "none";
}


var getColour2;
getColour2 = localStorage.background2;
document.querySelector("#niogtyve").style.backgroundColor = getColour2;

function datoColor3() {
document.querySelector("#month").innerHTML = "MAJ";
document.querySelector("#month").style.marginTop = "150px";
document.querySelector("#month").style.fontSize = "70px";

if (localStorage.getItem('background2') !== null) {
  getColour2 = localStorage.background2;
  document.querySelector("#niogtyve").style.backgroundColor = getColour2;

  }
}

function saveEvent3() {
  if (getColour2 == '#EDE623') {
    getColour2 = '#EDE623';
    document.querySelector("#niogtyve").style.backgroundColor = "#EDE623";
    localStorage.setItem('background2', '#EDE623');
  } else {
    document.querySelector("#niogtyve").style.backgroundColor = "#EDE623";
    localStorage.setItem('background2', '#EDE623');
  }
}

function deleteEvent3 () {
  localStorage.removeItem('background2');
  document.querySelector("#niogtyve").style.backgroundColor = "transparent";
}
