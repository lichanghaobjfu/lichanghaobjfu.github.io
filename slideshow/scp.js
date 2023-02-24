// JavaScript code
// const pictures2 = document.querySelectorAll('#picture-frame img');


const pictures2 = []
for (let i = 0; i < 50; i++) {
  const img = document.createElement("img");
  img.src = "../images/guts_pre/Remagining the Guts_Presentation" + (i + 1).toString() + ".jpg";
  var src = document.getElementById("picture-frame2");
  src.appendChild(img);
  pictures2.push(img)
}


console.log("total number of image")
console.log(pictures2.length)

const prevButton2 = document.querySelector('#prev-button2');
const nextButton2 = document.querySelector('#next-button2');
const progressBarInner2 = document.querySelector('#progress-bar-inner2');

const numpictures2 = pictures2.length;
// const numViews = Math.ceil((numpictures2 - 2) / 2);

let currentPage2 = 1;
// let currentView = 1;

function updateProgressBar2() {
  progressBarInner2.style.width = ((currentPage2 - 1) / (numpictures2 - 1)) * 100 + '%';
}

function updatepictures2() {
  for (let i = 0; i < numpictures2; i++) {
    pictures2[i].style.display = 'none';
  }

  if (currentPage2 === 1) {
    pictures2[0].style.display = 'block';

  } else if (currentPage2 === numpictures2) {
    pictures2[currentPage2 - 1].style.display = 'block';
  } else{
    pictures2[currentPage2 - 1].style.display = 'block';
  }

  // console.log("current page:");
  // console.log(currentPage2);


  // if (currentPage2 === 1) {
  //   pictures2[0].style.display = 'block';
  //   pictures2[0].style.marginLeft = "auto";
  //   pictures2[0].style.marginRight = "auto";

  // } else if (currentPage2 === numpictures2) {
  //   pictures2[numpictures2 - 1].style.display = 'block';
  //   pictures2[numpictures2 - 1].style.marginLeft = "auto";
  //   pictures2[numpictures2 - 1].style.marginRight = "auto";
  // } else {
  //   pictures2[currentPage2 - 1].style.display = 'inline-block';
  //   pictures2[currentPage2].style.display = 'inline-block';
  //   pictures2[currentPage2 - 1].style.marginLeft  = "auto";
  //   pictures2[currentPage2 - 1].style.marginRight  = "auto";
  //   pictures2[currentPage2].style.marginLeft  = "auto";
  //   pictures2[currentPage2].style.marginRight  = "auto";
  //   pictures2[currentPage2 - 1].style.width = "50%";
  //   pictures2[currentPage2].style.width = "50%";

  // }
}

function updateButtons2() {
  prevButton2.disabled = (currentPage2 === 1);
  nextButton2.disabled = (currentPage2 === numpictures2);
}

// function updateView() {
//   if (currentPage2 === 1 || currentPage2 === numpictures2) {
//     currentView = 1;
//   } else {
//     currentView = Math.ceil((currentPage2 - 1) / 2);
//   }
// }

// function updatePage() {
//   if (currentView === 1) {
//     currentPage2 = 1;
//   } else if (currentView === numViews + 1) {
//     currentPage2 = numpictures2;
//   } else {
//     currentPage2 = (currentView - 1) * 2 + 1;
//   }
// }

function updateAll2() {
  updateProgressBar2();
  updatepictures2();
  updateButtons2();
}

prevButton2.addEventListener('click', () => {
  if (currentPage2 > 1) {
      currentPage2 -= 1;
    }
    updateAll2();
});

nextButton2.addEventListener('click', () => {
  if (currentPage2 < numpictures2) {
      currentPage2 += 1;
    } 
    updateAll2();
});


updateAll2();
