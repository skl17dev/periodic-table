import './style.css'

var ecCount = document.querySelectorAll('.ec');
var sumCount = document.querySelectorAll('.sumc');

interface SelectorFunction {
  <T extends HTMLElement = HTMLElement>(el: string): T;
}

const $: SelectorFunction = function <T extends HTMLElement = HTMLElement>(el: string): T {
  return document.querySelector<T>(el)!;
};


for (var i = 0; i < ecCount.length; i++) {
  ecCount[i].addEventListener("mouseover", function (this: HTMLElement) {
    for (var i = 0; i < sumCount.length; i++) {
      (sumCount[i] as HTMLElement).style.display = 'none';
    }
    var ddo3 = this.getAttribute("class");
    if (ddo3) {
      const ddo3Arr = ddo3.split(" ");
      $('.' + ddo3Arr[1] + '9').style.display = 'block';
    }
    $('.inst').style.display = 'none';
  });
}


$('.cpt').addEventListener('mouseout', function () {
  for (var i = 0; i < sumCount.length; i++) {
    (sumCount[i] as HTMLElement).style.display = 'none';
  }
  $('.inst').style.display = 'block';

});

$('.am69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.ams');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.am69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.ams');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});



$('.aem69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.aems');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.aem69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.aems');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});




$('.lans69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.lans');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.lans69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.lans');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.acts69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.acts');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.acts69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.acts');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.ptms69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.ptms');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.ptms69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.ptms');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.mlds69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.mlds');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.mlds69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.mlds');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});

$('.onms69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.onms');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.onms69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.onms');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.ngs69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.ngs');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.ngs69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.ngs');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.lans69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.lans');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.lans69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.lans');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});

$('.tms69').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.tms');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.tms69').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.tms');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.lans22').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.lans');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.lans22').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.lans');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});


$('.acts22').addEventListener('mouseover', function () {
  var sewaf2 = document.querySelectorAll('.acts');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.add('m24');
  }
});


$('.acts22').addEventListener('mouseout', function () {
  var sewaf2 = document.querySelectorAll('.acts');
  for (var i = 0; i < sewaf2.length; i++) {
    sewaf2[i].classList.remove('m24');
  }
});



function adjustZoom() {
  const container = $('.cpt');

  // Get the viewport width and height
  const clientWidth = window.innerWidth;
  const clientHeight = window.innerHeight;

  // Calculate the zoom factor dynamically based on the viewport size
  const zoomFactor = Math.min(clientWidth / 1000, clientHeight / 1000); // Example scaling based on 1000px base

  // Apply the zoom using the zoom property
  container.style.zoom = String(zoomFactor);
}

// Call the adjustZoom function on page load and window resize
window.addEventListener('load', adjustZoom);
window.addEventListener('resize', adjustZoom);