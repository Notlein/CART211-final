setTimeout(function() {
  $("#start-screen").fadeOut();
}, 3000)

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

function closeStart() {
  const menustyle = document.getElementById("start-box").style;
  menustyle.display = "none";
}

function openStart() {
  const menustyle = document.getElementById("start-box").style;
  if (menustyle.display !== "none") {
      menustyle.display = "none";
  } else {
      menustyle.display = "block";
  }
}

function logOff() {
  const logoffstyle = document.getElementById("log-off").style;
  if (logoffstyle.opacity !== "1") {
      logoffstyle.zIndex = 999;
      logoffstyle.opacity = '1';
  }
}
var cmptsml = 0;

function oops() {
  let newicon = new Array('<i class="far fa-dizzy"></i>',
      '<i class="far fa-dizzy"></i>', '<i class="far fa-dizzy"></i>',
      '<i class="far fa-dizzy"></i>', '<i class="far fa-dizzy"></i>',
      '<i class="far fa-dizzy"></i>', '<i class="far fa-grin-tears"></i>',
      '<i class="fas fa-virus"></i>');
  const logoff = document.getElementById('log-off-text');
  const smile = document.getElementById("smiley");
  logoff.style.display = 'block';
  if (cmptsml === 0) {
      smile.innerHTML = '<i class="far fa-dizzy"></i>';
  } else {
      smile.innerHTML = newicon[Math.floor(Math.random() * newicon.length)];
  }
  cmptsml++;
}

function powerOff() {
  $("#start-box").remove();
  $("#bottom-bar").remove();
  document.body.style.backgroundColor = "black";
  document.body.style.position = "absolute";
  document.body.style.display = "flex";
  document.body.style.alignContent = "center";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  $("main").animate({
      left: "50%",
      top: "50%",
      height: "4px",
      width: "4px",
      opacity: 0.35
  },'fast').animate({opacity:0},5000);
}

function changeHTML(id, content){
  $(id).html(content);
}