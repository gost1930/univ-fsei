const btnElements = {
    terunk: document.getElementById('trunkBtn'),
    chimique: document.getElementById('chimiqueBtn'),
    fisique: document.getElementById('fisiqueBtn'),
    comath: document.getElementById('comathBtn'),
    computer: document.getElementById('computerBtn'),
    math: document.getElementById('mathBtn')
  };
  
  const courseElements = {
    terunk: document.getElementById('trunk'),
    chimique: document.getElementById('chimique'),
    fisique: document.getElementById('fisique'),
    comath: document.getElementById('comath'),
    computer: document.getElementById('computer'),
    math: document.getElementById('math')
  };
  
  function toggleVisibility(course) {
    for (const key in courseElements) {
      if (key === course) {
        courseElements[key].classList.remove('hidden');
      } else {
        courseElements[key].classList.add('hidden');
      }
    }
  }
  
  for (const key in btnElements) {
    btnElements[key].addEventListener('click', function() {
      toggleVisibility(key);
    });
  }

  // ------------------TAWKIT------------------
  let tawkittt = document.getElementById('tawkittt');
  let tawkitBtn = document.getElementById('tawkitBtn');
  let cours = document.getElementById('cours');
  let tawkitHero = document.getElementById('tawkitHero');
  let backBtn = document.getElementById('backBtn');


  
    tawkitBtn.addEventListener('click', function() {
    tawkittt.classList.remove('hidden');
    cours.classList.add('hidden');
    tawkitHero.classList.add('hidden');

  })
  backBtn.addEventListener('click', function() {
    tawkittt.classList.add('hidden');
    cours.classList.remove('hidden');
    tawkitHero.classList.remove('hidden');

  })




// // -------------BTN ELEMENTS----------------
// let terunkBtn  = document.getElementById('trunkBtn');
// let chimiqueBtn = document.getElementById('chimiqueBtn');
// let fisiqueBtn = document.getElementById('fisiqueBtn');
// let comathBtn = document.getElementById('comathBtn');
// let computerBtn = document.getElementById('computerBtn');
// let mathBtn = document.getElementById('mathBtn');

// // COURS ID
// let terunk  = document.getElementById('trunk');
// let chimique = document.getElementById('chimique');
// let fisique = document.getElementById('fisique');
// let comath = document.getElementById('comath');
// let computer = document.getElementById('computer');
// let math = document.getElementById('math');

// // function toggleVisibility(element) {
// //     element.classList.toggle('hidden');
    
// // }

// terunkBtn.addEventListener('click', function() {
//     chimique.classList.add('hidden');
//     terunk.classList.remove('hidden');
//     fisique.classList.add('hidden');
//     comath.classList.add('hidden');
//     computer.classList.add('hidden');
//     math.classList.add('hidden');
// });

// chimiqueBtn.addEventListener('click', function() {
//     chimique.classList.remove('hidden');
//     terunk.classList.add('hidden');
//     fisique.classList.add('hidden');
//     comath.classList.add('hidden');
//     computer.classList.add('hidden');
//     math.classList.add('hidden');

    
// });

// fisiqueBtn.addEventListener('click', function() {
//     chimique.classList.add('hidden');
//     terunk.classList.add('hidden');
//     fisique.classList.remove('hidden');
//     comath.classList.add('hidden');
//     computer.classList.add('hidden');
//     math.classList.add('hidden');
// });

// comathBtn.addEventListener('click', function() {
//     chimique.classList.add('hidden');
//     terunk.classList.add('hidden');
//     fisique.classList.add('hidden');
//     comath.classList.remove('hidden');
//     computer.classList.add('hidden');
//     math.classList.add('hidden');
// });

// computerBtn.addEventListener('click', function() {
//     chimique.classList.add('hidden');
//     terunk.classList.add('hidden');
//     fisique.classList.add('hidden');
//     comath.classList.add('hidden');
//     computer.classList.remove('hidden');
//     math.classList.add('hidden');
// });

// mathBtn.addEventListener('click', function() {
//     chimique.classList.add('hidden');
//     terunk.classList.add('hidden');
//     fisique.classList.add('hidden');
//     comath.classList.add('hidden');
//     computer.classList.add('hidden');
//     math.classList.remove('hidden');
// });


