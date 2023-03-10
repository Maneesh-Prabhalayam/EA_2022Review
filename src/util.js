// A $( document ).ready() block.
$( document ).ready(function() {
  
  const balloonContainer = document.getElementById("balloon-container");
  

  function random(num) {
    return Math.floor(Math.random() * num);
  }
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
  }
  
  function createBalloons(num) {
    for (var i = num; i > 0; i--) {
      var balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = getRandomStyles();
      balloonContainer.append(balloon);
    }
  }
  
  function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
      balloonContainer.remove()
    }, 500)
  }
  
  window.addEventListener("load", () => {
    createBalloons(30)
    let i = 0;
let txt = 'It’s worth taking a step back and reflect on just how much has been done over the last 12 months in AI Endpoint Analytics.';
let speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txtArea").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
    $("#txtArea1").show(1000);
  }
}


var width = $(window).width(); 
var height = $(window).height(); 

if ((width >= 1000  ) && (height>=760)) {
  window.addEventListener("click", () => {
    removeBalloons();
    playMusic();
    $(".yearDiv").show();
    $('.secPages').show();
  });
}
else {
  $("#txtArea1").html("For better user experience, please use the screen resolution higher or equal to 1024 x 768");
}



  });
  

  



  
  console.clear();


});

function playMusic(){
  $( document ).mousemove(function( event ) {
    $("#my_audio").get(0).play();
  });
}

new fullpage("#fullpage", {
  sectionsColor: ["#130f40", "#f5f8f7", "#2e1437"],

  // Get your license at https://alvarotrigo.com/fullPage/pricing/
  licenseKey: "YOUR LICENSE KEY HERE ",
});

TweenMax.to(document.documentElement, 4, {
  "--split": "80%",
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  ease: "power4.inOut",
});

tippy("#myButton1", {
  content: template_groot.innerHTML,
  allowHTML: true,
  followCursor: true,
  maxWidth: "none",
  delay: [600, null],
});

tippy("#myButton2", {
  content: template_ghost.innerHTML,
  allowHTML: true,
  followCursor: true,
  maxWidth: "none",
  delay: [600, null],
});

tippy("#myButton3", {
  content: template_halleck.innerHTML,
  allowHTML: true,
  followCursor: true,
  maxWidth: "none",
  delay: [600, null],
});

tippy("#myButton4", {
  content: template_uiUpgrades.innerHTML,
  allowHTML: true,
  followCursor: true,
  maxWidth: "none",
  delay: [600, null],
});

tippy("#myButton5", {
  content: template_misc.innerHTML,
  allowHTML: true,
  followCursor: true,
  maxWidth: "none",
  delay: [600, null],
});

window.addEventListener("DOMContentLoaded", () => {
  const component = new FileUpload(".upload");
});

class FileUpload {
  bubbles = [];
  isUploading = false;
  progress = 0;
  timeout = null;
  uploadClass = "upload--running";
  doneClass = "upload--done";

  constructor(el) {
    this.el = document.querySelector(el);
    this.el?.addEventListener("click", this.upload.bind(this));
    this.circle = this.el?.querySelector("[data-circle]");
    this.uploadButton = this.el?.querySelector("[data-upload]");
  }
  progressDim() {
    this.uploadButton.parentElement.setAttribute("aria-hidden", "true");
  }
  progressLoop() {
    // update the progress
    this.progress += 0.01;
    this.progressUpdateDisplay();

    // spawn a bubble
    const bubble = document.createElement("div");
    const duration = Utils.randomFloat(2, 3);
    const brightneess = Utils.randomFloat(0.6, 1);
    const rotate = Utils.randomFloat(-15, 15);
    const size = Utils.randomFloat(1, 2);

    bubble.classList.add("upload__bubble");
    bubble.style.setProperty("--dur", `${duration}s`);
    bubble.style.filter = `brightness(${brightneess})`;
    bubble.style.transform = `translateX(-50%) rotate(${rotate}deg)`;
    bubble.style.width = `${size}em`;
    bubble.style.height = `${size}em`;
    this.bubbles.push(bubble);
    this.circle?.appendChild(bubble);

    // loop until finished
    if (this.progress < 1) {
      this.timeout = setTimeout(this.progressLoop.bind(this), 50);
    } else {
      this.timeout = setTimeout(this.progressDim.bind(this), 500);
      this.el.classList.add(this.doneClass);
      document.getElementById("headerLast").style.display = "none";
      
    }
  }
  progressUpdateDisplay(clear) {
    const progress = this.el.querySelector("[data-progress]");
    document.getElementById("txtEle").style.display = "none";
    if (this.circle && !clear) {
      const startSize = 13;
      const enlargeBy = 10;
      const size = startSize + enlargeBy * this.progress;

      this.circle.style.width = `${size}em`;
      this.circle.style.height = `${size}em`;
    }
    if (progress) {
      progress.innerText =
        clear === true ? "" : `${Math.floor(this.progress * 100)}%`;
    }
  }
  reset() {
    if (this.isUploading) {
      while (this.circle.firstChild) {
        this.circle.removeChild(this.circle.lastChild);
      }
      this.circle.removeAttribute("style");

      this.bubbles = [];
      this.el.classList.remove(this.uploadClass);
      this.el.classList.remove(this.doneClass);
      this.isUploading = false;
      this.progress = 0;
      this.progressUpdateDisplay(true);
      this.uploadButton.parentElement.setAttribute("aria-hidden", "false");
      this.uploadButton.disabled = false;
      this.uploadButton.textContent = "Click here";

      document.getElementsByClassName("honeycomb")[0].style.display = "block";
    }
  }
  upload(e) {
    const { target } = e;

    if (!this.isUploading && target.hasAttribute("data-upload")) {
      this.isUploading = true;
      this.el.classList.add(this.uploadClass);

      target.disabled = true;
      target.textContent = "Uploading EA Champions";

      this.progressUpdateDisplay();
      this.timeout = setTimeout(() => {
        if (this.circle) this.circle.style.transitionTimingFunction = "linear";

        this.progressLoop();
      }, 200);
    } else if (target.hasAttribute("data-reset")) {
      this.reset();
 
    }
  }
}

class Utils {
  static randomFloat(min = 0, max = 2 ** 32) {
    const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
    const relativeValue = (max - min) * percent;

    return min + relativeValue;
  }
}

var myAnimation = anime({
  targets: ['.honeycomb-cell'],
  scale: 1.05,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  delay: 1500
});
