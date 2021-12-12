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
    this.windowHTML = function () {
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

    // Randomization of the windowframes' x andy positions accordingfrom point (0,0)
    // as well as randomization of width and height of the frames.
    let x = 0 + (Math.floor(Math.random() * XPOS_TRESHOLD)) + "vw";
    let y = 0 + (Math.floor(Math.random() * YPOS_TRESHOLD)) + "vh";
    let w = WIDTH_MIN + (Math.floor(Math.random() * 40)) + "";
    let h = HEIGHT_MIN + (Math.floor(Math.random() * 40)) + "";

    // Creating the windowframe using the constructor
    var newframe = new windowframe(x, y, h, w);

    // Since I half-assed the constructor, I needed to add an internal function to actually create the div element. This will need a major rework for an object-oriented approach.
    var b = newframe.windowHTML();

    // append the element to the body
    document.body.appendChild(b);

    // assign id dynamically to windowframes
    b.id = "windowframe" + newframe.currentid;

    // add the hard-coded HTML for windowframes. Could be upgraded to a dynamic structure eventually.
    // Structure : 
    // Window Frame(
    // Wholeframe( 
    // Topframe( Full Screen Button + Title + Minimize Button + 'KILL' Button )
    // iFrame(content)
    //  )

    b.innerHTML += '<div class="wholeframe"><div id="topframe' + newframe
        .currentid + '"; class="topframe"><span class="fullscr" id="fs' +
        newframe.currentid + '"><i class="fas fa-expand"></i></span><span class="inside-text">' + title +
        '</span><span class="kill" id="K' + newframe.currentid +
        '"><i class="fa fa-bomb" aria-hidden="true"></i></span><span class="minimize" id="min' +
        newframe.currentid + '">_</span></div>';

    // iFrame part
    b.innerHTML += '<iframe src=' + content + '></iframe><div>';
    b.style.position = "absolute";


    const cID = document.getElementById(b.id);
    // special function to make sure the windowframe that's clicked is on top of the others. the z increment is also repeated at the end of the whole addwindowframe function. 
    b.addEventListener("mousedown", function () {
        cID.style.zIndex = z;
        z++;
    });

    // Creating constants to work with after the creation of the main windowframe object
    const currentfs = document.getElementById("fs" + newframe.currentid);
    const currentK = document.getElementById("K" + newframe.currentid);
    const currentmin = document.getElementById("min" + newframe.currentid);
    const currentwindow = document.getElementById(b.id);

    // listener on the windowframe object to close the start menu when selected
    currentwindow.addEventListener("click", function () {
        closeStart();
    })

    // 'Kill' or close button
    currentK.addEventListener("click", function () {
        document.body.removeChild(b);
    });

    // Fullscreen (can still be dragged)
    currentfs.addEventListener("click", function () {
        b.style.width = "100vw";
        b.style.height = "calc(100vh - 60px)";
        b.style.top = "0";
        b.style.left = "0";

    });


    // Minimize function
    currentmin.addEventListener("click", function () {

        // This part hides the windowframe
        b.style.display = "none";

        // ***This part has been replaced by a simpler css text-overflow with ellipsis
        // // Takes the first 12 characters of the windowframe's title
        // let y = title + "";
        // let z = "";
        // for (let i = 0; i < 12; i++) {
        //     z += y.charAt(i);
        // }

        // this part creates the button in the bottom frame
        let x = document.createElement("button");
        x.className = "bttm-icon";
        x.id = "bttm-icon" + newframe.currentid;
        x.innerHTML = title;

        // clicking the bottom button makes sur the start menu closes
        x.addEventListener("click", function () {
            closeStart();
        })

        // clicking the bottom button also brings back the windowframe and deletes the bottom button
        x.addEventListener("click",
            function () {
                b.style.display = "block";
                z++;
                b.style.zIndex = z;


                document.getElementById("bottom-bar").removeChild(
                    x);
            })

        // add the button at the bottom 
        document.getElementById("bottom-bar").appendChild(x);
    });


    // JQUERY : To make the windowframe resizable and draggable
    $("#windowframe" + id).resizable().draggable();
    id++;
    z++;
}
// end of addwindowframe(content,title);


// Special Function to add an infinite amount of windowframes with a randomization of color inside. 
// For an unknown reason, the windowframes start to break after a while. Maybe over a certain z-Index ? Needs to be verified eventually.

var uhoh;

function UhOh() {

    uhoh = setInterval(function oops() {
        addwindowframe('../randomcolor.html', 'Uh-Oh!')
    }, 300);
}

// function to stop the UhOh function.
function stop() {
    clearInterval(uhoh);
}

function killAll() {
    stop();
    $(".windowframe").remove();
    $(".bttm-icon").remove();
}