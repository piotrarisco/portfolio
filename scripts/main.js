






function arrange(){
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    //mac
    let initImgWidth = 1700;
    let initScale = 0.779;    
    let imgProportion = 1.77;
    let imgWidth = windowHeight*imgProportion;
    if(imgWidth>windowWidth){
        imgWidth = windowWidth;
    }
    
    let scaleProportion = imgWidth/initImgWidth;
    let scale = initScale*scaleProportion;
    document.getElementById('img-under').setAttribute("style", "width:" + imgWidth + "px");
    document.getElementById('mac').setAttribute("style", "position: absolute; transform:translate(-50%, -50%) scale(" + scale + "); top: 40.1%; left: 64.8%; width: 1200px; height: 629px; border:none");
    
    //iphone
    let initMScale = 1;
    let mScale = initMScale*scaleProportion;
    
    document.getElementById('iphone').setAttribute("style", "position: absolute; transform:translate(-50%, -50%) scale(" + mScale + "); top: 50.6%; left: 17.67%; width: 363.5px; height: 616px; border:none"); 
    
    
    
    
    
    let initIphoneFontSize = 0.9981883668807687;
    let IphoneFontSize = initIphoneFontSize*scaleProportion;
    
    document.getElementById('iphone-address').setAttribute("style", "position: absolute; transform:translate(-50%, -50%); top: 15.5%; left: 17.67%;  font-size: " + IphoneFontSize + "em;"); 
    
    
    let initMacFontSize = 5.477862988979829;
    let MacFontSize = initMacFontSize*scaleProportion;
  
    document.getElementById('mac-address').setAttribute("style", "transform: translate(0%, -50%) ; position: absolute; top: 13.8%; left: 41%;  font-size: " + MacFontSize + "px;"); 
    
    //fullscreen - wymaga dopieszczenia i obnizenia navbaru 
//    document.getElementById('iphone').setAttribute("style", "position: absolute; transform:translate(-50%, -50%) scale(" + mScale + "); top: 50.2%; left: 17.62%; width: 354px; height: 766px; border:none; border-radius:35px");
//    
    
    
    
  //  paski 
    
// you gotta do the same shit for width !!!!!!!!!!!!!!
     
    let imgInitialHeight = document.getElementById('img-under').clientHeight;
    let imgInitialWidth = document.getElementById('img-under').clientWidth;
    
    let pasekIphoneScale = 0.7770700636942676;   
    let pasekIphoneHeight = imgInitialHeight*pasekIphoneScale;    
    document.getElementById('pasek1').setAttribute("style", "height:" + pasekIphoneHeight + "px");
    document.getElementById('pasek2').setAttribute("style", "height:" + pasekIphoneHeight + "px");
    
    let pasekMacHeightScale1 = 0.59;
    let pasekMacWidthScale1 = 66.53;
    let pasekMacHeight1 = imgInitialHeight*pasekMacHeightScale1;
    let pasekMacWidth1 = imgInitialWidth/pasekMacWidthScale1;
    document.getElementById('pasek3').setAttribute("style", "height:" + pasekMacHeight1 + "px; width:" + pasekMacWidth1 + "px");
    document.getElementById('pasek4').setAttribute("style", "height:" + pasekMacHeight1 + "px; width:" + pasekMacWidth1 + "px");
    
    let pasekMacHeightScale2 = 78.5;
    let pasekMacWidthScale2 = 0.572655690765927;
    let pasekMacHeight2 = imgInitialHeight/pasekMacHeightScale2;
    let pasekMacWidth2 = imgInitialWidth*pasekMacWidthScale2;
    
    document.getElementById('pasek5').setAttribute("style", "height:" + pasekMacHeight2 + "px; width:" + pasekMacWidth2 + "px");
    
//    height:10px;
//    width: 800px;
    
    
    
}
arrange();



//wlacz funkcje arrange przy kazdej zmianie wymiarow okna
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
addEvent(window, "resize", arrange);
