
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
        a.setAttribute('class','windowframe draggable');
        a.setAttribute('style','left:'+x+';top:'+y+';z-index:'+z+';width:'+height+'vw;height:'+width+'vh;');

        return a;
    }
  }

  function addwindowframe(x,y,height, width, content){
        var newframe = new windowframe (x,y,height, width);
        var b = newframe.windowHTML();
        document.body.appendChild(b);
        b.id = "window"+newframe.currentid;
        b.innerHTML = content;
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
    b.id = "window"+newframe.currentid;
    b.innerHTML += '<div class="wholeframe"><div id="topframe'+newframe.currentid+'"; class="topframe">'+title+'</div>';
    b.innerHTML += '<iframe src='+content+'></iframe><div>';
    b.addEventListener("mousedown",function(){
      const cID = document.getElementById("window"+newframe.currentid);
      
      cID.style.zIndex = z;
      z++;
    })
  id++;
  z++;
}


