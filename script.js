// SCRIPTS
// 

// Loading screen (it'S an mp4 with a fadeOut)

setTimeout(function() {
  $("#start-screen").fadeOut();
}, 3000)


// function for toggling Font Awesome icons
function toggleIcon(id, activeClasses, inactiveClasses) {
  var id, activeClasses, inactiveClasses;
  const icon = document.getElementById(id);
  let classes = icon.className;
  if (classes !== activeClasses) {
      icon.className = activeClasses;
  } else {
      icon.className = inactiveClasses;
  }
}

// close function for the start menu
function closeStart() {
  const menustyle = document.getElementById("start-box").style;
  menustyle.display = "none";
}


// Toggle function for the start menu
function openStart() {
  const menustyle = document.getElementById("start-box").style;
  if (menustyle.display !== "none") {
      menustyle.display = "none";
  } else {
      menustyle.display = "block";
  }
}

// This function calls the lock screen, locking the user of the computer foreverrrr
function logOff() {
  const logoffstyle = document.getElementById("log-off").style;
  if (logoffstyle.opacity !== "1") {
      logoffstyle.zIndex = 999;
      logoffstyle.opacity = '1';
  }
  document.getElementById("mitsub").addEventListener("mousedown", function() {
    document.getElementById("smiley") = '<i class="far fa-surprise"></i>';
  })
}


var cmptsml = 0;

function oops() {

  // construct array of icons, all the same except two
  let newicon = new Array('<i class="far fa-dizzy"></i>',
      '<i class="far fa-dizzy"></i>', '<i class="far fa-dizzy"></i>',
      '<i class="far fa-dizzy"></i>', '<i class="far fa-dizzy"></i>',
      '<i class="far fa-dizzy"></i>', '<i class="far fa-grin-tears"></i>',
      '<i class="fas fa-virus"></i>');

  const logoff = document.getElementById('log-off-text');
  const smile = document.getElementById("smiley");

  logoff.style.display = 'block';

  // MAkes sure the first icon is always the regular icon 'fa-dizzy'
  if (cmptsml === 0) {
      smile.innerHTML = '<i class="far fa-dizzy"></i>';
  } else {
      smile.innerHTML = newicon[Math.floor(Math.random() * newicon.length)];
  }

  cmptsml++;
}


// Function to 'shut down' the computer/website

function powerOff() {

  $("#start-box").remove();
  $("#bottom-bar").remove();

  // initialization
  document.body.style.backgroundColor = "black";
  document.body.style.position = "absolute";
  document.body.style.display = "flex";
  document.body.style.alignContent = "center";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";

  // animation
  $("main").animate({
      left: "50%",
      top: "50%",
      height: "4px",
      width: "4px",
      opacity: 0.35
  },'fast').animate({opacity:0},4000);
  
  // remove the inside of the body 5s after the animation
  setTimeout(function removeMain(){$("main").remove();$("div").remove();} , 5000 )
     

}

// 
function changeHTML(id, content){
  $(id).html(content);
}



    




