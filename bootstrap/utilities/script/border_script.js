// Not a Self invoking function
// Note that self invoking function cannot be called again
function circleResize(event, circleName, spanName) {
    //if (event.type === "resize") {
        var circle_height = document.getElementById(circleName).clientHeight;
        var text_height = document.getElementById(spanName).clientHeight;
        var text_width = document.getElementById(spanName).clientWidth;

        document.getElementById('input1').value= circle_height;
        document.getElementById('input2').value= text_height;
        document.getElementById('input3').value= text_width;

        document.getElementById(circleName).style.marginTop = String((circle_height-text_height)/2)+"px";
    //}
};

//Get the width first time
circleResize(null,"divclearfix1","span1");
circleResize(null,"divclearfix2","span2");
circleResize(null,"divclearfix3","span3");
window.addEventListener("resize", (event) => {
    circleResize(event,"divclearfix1","span1");
    circleResize(event,"divclearfix2","span2");
    circleResize(event,"divclearfix3","span3");
  } ,true);

//alertfunc();