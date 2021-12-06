// Object - Window Frame with buttons and embedded iframe


// CONSTANTS

// starting width and height
const WIDTH_MIN = 40;
const HEIGHT_MIN = 40;

// 
const XPOS_TRESHOLD = 40;
const YPOS_TRESHOLD = 20;


// GLOBAL VARIABLES

// global identifier for the frames added 
var id = 1;
// z-index position of the first frame, increases with each additional frame or click on frame
var z = 10;

// empty constructor
function windowframe() {
    this.windowx = null;
    this.windowy = null;
    this.windowz = null;
    this.windowheight = null;
    this.windowwidth = null;
    this.windowcontent = null;
    this.windowHTML = null;
}
// constructor with specific values
function windowframe(x, y, height, width) {
    this.windowx = x;
    this.windowy = y;
    this.windowz = z;
    this.windowheight = height;
    this.windowwidth = width;
    this.currentid = id;
    this.windowHTML = function() {
        var a = document.createElement('div');
        a.setAttribute('class',
            'windowframe draggable'
            ); //mettre draggable ou enelever pour déboguer le coin
        a.setAttribute('style', 'left:' + x + ';top:' + y + ';z-index:' +
            z + ';width:' + height + 'vw;height:' + width + 'vh;');
        return a;
    }
}

// function : add a window frame anywhere on the screen and 
//            with a random width within tresholds

function addwindowframe(content, title) {

    let x = 0 + (Math.floor(Math.random() * XPOS_TRESHOLD)) + "vw";
    let y = 0 + (Math.floor(Math.random() * YPOS_TRESHOLD)) + "vh";
    let w = WIDTH_MIN + (Math.floor(Math.random() * 40)) + "";
    let h = HEIGHT_MIN + (Math.floor(Math.random() * 40)) + "";

    var newframe = new windowframe(x, y, h, w);
    var b = newframe.windowHTML();

    document.body.appendChild(b);


    b.id = "resizable" + newframe.currentid;
    b.innerHTML += '<div class="wholeframe"><div id="topframe' + newframe
        .currentid + '"; class="topframe"><span class="fullscr" id="fs' +
        newframe.currentid + '"><i class="fas fa-expand"></i></span><span class="inside-text">' + title +
        '</span><span class="kill" id="K' + newframe.currentid +
        '"><i class="fa fa-bomb" aria-hidden="true"></i></span><span class="minimize" id="min' +
        newframe.currentid + '">_</span></div>';
    b.innerHTML += '<iframe src=' + content + '></iframe><div>';
    b.style.position = "absolute";


    b.addEventListener("mousedown", function() {
        const cID = document.getElementById("resizable" + newframe
            .currentid);
        cID.style.zIndex = z;
        z++;
    });

    
    const currentfs = document.getElementById("fs" + newframe.currentid);
    const currentK = document.getElementById("K" + newframe.currentid);
    const currentmin = document.getElementById("min" + newframe.currentid);
    const currentwindow = document.getElementById("resizable" + newframe.currentid);


    currentwindow.addEventListener("click", function() {
        closeStart();
    })

    currentK.addEventListener("click", function() {
        document.body.removeChild(b);
    });

    currentfs.addEventListener("click", function() {
        b.style.width = "100vw";
        b.style.height = "calc(100vh - 60px)";
        b.style.top = "0";
        b.style.left = "0";
        currentwindow.className = "windowframe draggable";
    });



    currentmin.addEventListener("click", function() {
        b.style.display = "none";
        let y = title + "";
        z = "";
        for (let i = 0; i < 12; i++) {
            z += y.charAt(i);
        }
        let x = document.createElement("button");
        x.className = "bttm-icon";
        x.id = "bttm-icon" + newframe.currentid;
        x.innerHTML = z;
        x.addEventListener("click", function() {
            closeStart();
        })
        x.addEventListener("click",
            function() {
                b.style.display = "block";
                document.getElementById("bottom-bar").removeChild(
                    x);
            })
        document.getElementById("bottom-bar").appendChild(x);
    });


    
    $("#resizable" + id).resizable().draggable();
    id++;
    z++;
}



