// SCRIPTS
// 




// Loading screen (it'S an mp4 with a fadeOut)

setTimeout(function () {
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
  

}

function logOn() {
  const logoffstyle = document.getElementById("log-off").style;
  if (logoffstyle.opacity === "1") {
    logoffstyle.zIndex = -999;
    logoffstyle.opacity = '0';
  }

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


  cmptsml++;


  if (cmptsml === 0) {
    smile.innerHTML = '<i class="far fa-dizzy"></i>';
  } else {
    smile.innerHTML = newicon[Math.floor(Math.random() * newicon.length)];
  }




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
  }, 'fast').animate({
    opacity: 0
  }, 4000);

  // remove the inside of the body 5s after the animation
  setTimeout(function removeMain() {
    $("main").remove();
    $("div").remove();
  }, 5000)


}

// 
function changeHTML(id, content) {
  $(id).html(content);
}

// 
function beermode() {
  var img = "../video/beer.mp4";

  $("body").append("<video style='display:none;' id='beervid' autoplay muted loop src=" + img + ">");
  $("#beervid").fadeIn();
  setTimeout(function () {
    $("#beervid").fadeOut();
  }, 4000);
  setTimeout(function () {
    $("#beervid").remove();
  }, 6000);

}



var initSign = false;

function sign() {
  if (!initSign) {
    $("body").css({
      "font-family": "wingdings",
      "font-size": "0.8rem"
    });
    initSign = true;
  } else {
    $("body").css({
      "font-family": "ChicagoOld",
      "font-size": "0.75rem"
    });
    initSign = false;
  }
}

function uGotMail(){
  addwindowframe('folders/alertmail.html','You\'ve&nbsp;got&nbsp;mail&nbsp;!');
  $("iframe").remove();
  $(".ui-resizable-handle").remove();
  $(".fullscr").remove();
  
  $("#windowframe1").height(0);
  $("#windowframe1").width("25vw");
  $("#windowframe1").css({"top":"0"});
  $("#topframe1").css({"height":"65px","background-color":"black","color":"white","font-size":"18px","padding": "25px 2em 0","display": "flex",
  });
}

function tryMe() {

  $("#mitsub").click(function () {
    var value = $("#pw").val();
    if (value === "!net.Art:)") {
        logOn();
    } else {
        oops();
    }
  })

  
}





const input = document.getElementById("pw");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("mitsub").click();
  }
});
