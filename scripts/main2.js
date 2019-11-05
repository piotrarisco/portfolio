


resizeIframe();


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
function resizeIframe(){
    
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let imgWidth = document.getElementById('img-under').clientWidth;
    let imgHeight = document.getElementById('img-under').clientHeight;
    
    
    
    //same as underneath - let width = windowWidth * 0.8415;
    let width = 1228.76;
    //same as underneath - let height = width*0.7;
    let height = 648.232;
    
//    let top = windowHeight * 0.138;
//    let top = 108;
    let top;
//    let left = windowWidth * 0.375;
    
    let transformX = 0.64;
    let transformY = 0.64;
    
    
    
    
//    alert(top);
//    alert(height);
    top = 118 -(imgHeight-windowHeight)/2;
    if (windowHeight >= imgHeight){ 
//        alert("siema");
//        top = (windowHeight-imgHeight)/2 + imgHeight*0.145;
//        height = imgHeight*0.81;
        
    }
    else{
//        let height = (imgHeight-windowHeight)
//        top = 118 -(imgHeight-windowHeight)/2;
        
    }
//    alert("" + imgHeight + "..."  + windowHeight)
//    width:84.2vw;
//    height:81vh;
//    top: 13.8%;
//    left: 37.5%
    document.getElementById('mac').setAttribute("style", "width:" + width + "px" + ";height:" + height + "px" + ";top:" + top + "px" + ";left:" + left + "px" + ";transform: scale(" + transformX + "," + transformY +")");
}
addEvent(window, "resize", resizeIframe);

function klikajka(){
    alert("dupa");
}

