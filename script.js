function initMap() {
  // IniMap er et navn
  // Et objekt pga tegnet
  var uluru = {
    // Objekt der kan holde flere værdier, hvilket i dette tilfælde er to
    lat: 55.65548200000001,
    // Breddegrad
    lng: 8.29073900000003
    // Længde
  };
  var map = new google.maps.Map(document.getElementById('kort'), {
    // getElement er det samme som querySelector
    // google.maps.Map henter den i HTML
    zoom: 15,
    center: uluru
    // Dens position
  });
  var marker = new google.maps.Marker({
    // Marker med røde
    position: uluru,
    map: map
  });
}

window.addEventListener("click", function(event) {
  // Lytter efter en handling, som er et click. Når der klikkes skal handlingen udføres, so mses nedenunder. Et parameter, som hedder event. og som bruges i funktionen.
  var box1 = document.querySelector('.box1');
  // JavaScripten henter elementet, som i dette tilfælde er box1 fra HTML
  var img1 = document.querySelector('#bil')
  // Bil billedet fra HTML
  var p1 = document.querySelector('#bilp')
  // Den beskriver der står bil i HTML
  if (event.target == box1 || event.target == img1 || event.target == p1) {
    window.location.href = ('transportsider/bil.html')
    // De to streger betyder "eller"
    // Hvis vores handling rammer er ved box1 eller img1 eller p1, skal den udføres linjen, som linker til transportsider/bil.html

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
  // Knappen i html hedder btn1
  if (event.target == btn1) {
    window.location.href = ('omvroegumsider/ballonpark.html')
    // Hvis linket gælder, skal den linke ind til omvroegumsider/ballonpark.html
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



var imageSlides = document.querySelectorAll('.imageslides');
// ALL betyder den henter alle elenter fra html, som er imageslides
var leftArrow = document.querySelector('.arrow-left');
var rightArrow = document.querySelector('.arrow-right');
// Fra html hentes der knapperne, som er arrow-left og arrow-right
var activeImageSlide = 0;
// Billedet man ser i starten


function reset() {
  for (var i = 0; i < imageSlides.length; i++) {
    // Forlup udfører koden flere gange, og vi ved det antal gangen den udføre koden på den første linje
    // var 1 er sat til o, og som o er et startpunkt, hvor den skal køre så længe i er mindre end imgageslide.length.
  // Hver gangen den køre gennem koden skal den tilføje en i mere
    imageSlides[i].style.display = 'none';
    // Display til none skjuler alle billeder
  }
}


function startSlide() {
  reset();
  // Reset er tidgliere funktion, som gemmer alle billeder
  imageSlides[0].style.display = "block";
  // Alle billederne ligger i array, hvor det første billede er 0. Display skal sættes til block, så det første billede er synligt

}

function pressLeftArrow() {
  reset();
  imageSlides[activeImageSlide - 1].style.display = 'block';
  // Det er vores liste med alle vores billeder. acctive repreæsentere det nuværende billed man ser, hvor der trækkes 1 fra, fordi man går tilbage og trykker på venstre knap
// style.display block gør det synligt
  activeImageSlide--;

}

function pressRightArrow() {
  reset();
  imageSlides[activeImageSlide + 1].style.display = 'block';
  activeImageSlide++;
  // Samme funktion som ovenover

}
if (leftArrow) {
  leftArrow.addEventListener("click", function() {
    if (activeImageSlide == 0) {
      activeImageSlide = imageSlides.length;
      // if tjekker om knappen er der
      // if , hvis det her gælder, så udfører den denne her kode
      // Nuværende billede er = 0, så skal den udføre activeImageslide = imageSlides.length, hvilket er det sidste billede den rykker over til
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
    // en funktion som hedder showEvent1. når der trykkes på 12 fra html udføres hele den nederste funktion
    // innerhtml betyder at der skal stå 12 maj i idmonth i html
  document.querySelector("#month").style.marginTop = "30px";
  document.querySelector("#month").style.fontSize = "40px";
  document.querySelector("#button-1").style.display = "block";
  document.querySelector("#button-2").style.display = "none";
  document.querySelector("#button-3").style.display = "none";
}


var getColour;
// et navn efter en variabel er altid ens eget navn, som i dette tilfælde er getColour.
getColour = localStorage.background;
document.querySelector("#tolv").style.backgroundColor = getColour;


function datoColor1() {
  // inde i aktiviter i html inde i body, udføres dato1 via loading.
document.querySelector("#month").innerHTML = "MAJ";
document.querySelector("#month").style.marginTop = "150px";
document.querySelector("#month").style.fontSize = "70px";

if (localStorage.getItem('background') !== null) {
  // getTtem er når man henter ned
  // setItem til at gemme
  // Local storage er data opbevaringen
  // !== betyder ikke =. null betyder ingenting, hvilket betyder at der rent faktisk er noget, som er den gule
  getColour = localStorage.background;
  document.querySelector("#tolv").style.backgroundColor = getColour;

  }
}

function saveEvent1() {
  // Når der gemmes i localstorage gemmes i key og value
  if (getColour == '#EDE623') {
    // If starter med at tjekke om GetColur er sat til den gule farve
    getColour = '#EDE623';
    document.querySelector("#tolv").style.backgroundColor = "#EDE623";
    localStorage.setItem('background', '#EDE623');
    // setitem bruges når man gemmer noget
  } else {
    document.querySelector("#tolv").style.backgroundColor = "#EDE623";
    localStorage.setItem('background', '#EDE623');
  }
}

function deleteEvent1 () {
  localStorage.removeItem('background');
  // Når den skal fjjernes fra local storage, bruges removeItem.
  document.querySelector("#tolv").style.backgroundColor = "transparent";
  // 12' baggrundsfarve er transparent, hvor den gule farve fjernes
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
