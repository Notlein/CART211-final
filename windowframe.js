
var id=1;
var z=10;

function windowframe() {
    this.windowx = null;
    this.windowy = null;
    this.windowz = null;
    this.windowheight = null;
    this.windowwidth = null;
    this.windowcontent = null;
    this.windowHTML = null;
  }


function windowframe(x,y,height, width) {
    this.windowx = x;
    this.windowy = y;
    this.windowz = z;
    this.windowheight = height;
    this.windowwidth = width;

    this.currentid = id;
    this.windowHTML = function() {
        var a = document.createElement('div');
        a.setAttribute('class','windowframe draggable'); //mettre draggable ou enelever pour déboguer le coin
        a.setAttribute('style','left:'+x+';top:'+y+';z-index:'+z+';width:'+height+'vw;height:'+width+'vh;');

        return a;
    }
  }


  function addwindowframe(x,y,height, width, content, title){
        var newframe = new windowframe (x,y,height, width);
        var b = newframe.windowHTML();
        document.body.appendChild(b);
        b.id = "resizable"+newframe.currentid;
    b.innerHTML += '<div class="wholeframe"><div id="topframe'+newframe.currentid+'"; class="topframe">'+title+'</div>';
    b.innerHTML += '<iframe src='+content+'></iframe><div>';
    b.addEventListener("mousedown",function(){
      const cID = document.getElementById("resizable"+newframe.currentid);
      
      cID.style.zIndex = z;
      z++;
    })
      id++;
      z++;
  }


  /*version randomize*/
  function addwindowframe(content, title){
    
    let x = 0+(Math.floor(Math.random() * 40)) +"vw";
    let y = 0+(Math.floor(Math.random() * 20)) +"vh";
    let w = 40+(Math.floor(Math.random() * 40)) +"";
    let h = 40+(Math.floor(Math.random() * 40)) +"";


    var newframe = new windowframe (x,y,h,w);
    var b = newframe.windowHTML();

    document.body.appendChild(b);
    b.id = "resizable"+newframe.currentid;
    b.innerHTML += '<div class="wholeframe"><div id="topframe'+newframe.currentid+'"; class="topframe"><span class="fullscr" id="fs'+newframe.currentid+'"><i class="fas fa-expand"></i></span>'+title+'<span class="kill" id="K'+newframe.currentid+'"><i class="fa fa-bomb" aria-hidden="true"></i></span><span class="minimize" id="min'+newframe.currentid+'">_</span></div>';
    b.innerHTML += '<iframe src='+content+'></iframe><div>';

    b.style.position = "absolute";

    b.addEventListener("mousedown",function(){
      const cID = document.getElementById("resizable"+newframe.currentid);
      
      cID.style.zIndex = z;
      z++;
    });

    const currentfs = document.getElementById("fs"+newframe.currentid);
    const currentK = document.getElementById("K"+newframe.currentid);
    const currentmin = document.getElementById("min"+newframe.currentid);
    const currentres = document.getElementById("resize"+newframe.currentid);
    const currentwindow = document.getElementById("resizable"+newframe.currentid);

    const prevStyle = b.style;
      const prevClasses = currentwindow.className;

    currentK.addEventListener("click", function(){
      document.body.removeChild(b);
    });

    currentfs.addEventListener("click", function(){
      

      // if (b.style.position === "absolute"){

      b.style.width = "100vw";
      b.style.height = "calc(100vh - 60px)";
      b.style.top = "0";
      b.style.left = "0";
      // $(b.id).draggable("disable");
      currentwindow.className = "windowframe draggable";
    // } else {
    //   $(b.id).draggable("enable");
    //   let x = 0+(Math.floor(Math.random() * 40)) +"px";
    // let y = 0+(Math.floor(Math.random() * 20)) +"px";
    // let w = 40+(Math.floor(Math.random() * 40)) +"";
    // let h = 40+(Math.floor(Math.random() * 40)) +"";
    //   b.setAttribute('class','windowframe draggable'); //mettre draggable ou enelever pour déboguer le coin
    //   b.setAttribute('style','left:'+x+';top:'+y+';z-index:'+z+';width:'+h+'vw;height:'+w+'vh;');
    // b.style.position = "absolute";
    // }
      

    });

    currentmin.addEventListener("click", function(){

      b.style.display = "none";

      let y = title +"";
      z = "";
      for (let i=0;i<12;i++){
        z += y.charAt(i);
        
      }
      
      let x = document.createElement("button");
      x.className = "bttm-icon";
      x.id = "bttm-icon"+newframe.currentid;
      x.innerHTML = z;
      x.addEventListener("click",
      function(){
        b.style.display = "block";
        document.getElementById("bottom-bar").removeChild(x);
      })
      document.getElementById("bottom-bar").appendChild(x);

    });

  


  

    $("#resizable"+id).resizable().draggable();
    
  
  id++;
  z++;
}


