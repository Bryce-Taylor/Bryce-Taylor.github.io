let testBool = false

function themeBackground() {
    var cssLink = document.getElementById("style_link");
    console.log(testBool)
    testBool = !testBool
    if (testBool){
        document.getElementById("button").innerHTML = "Dark Theme";
        cssLink.href = "light.css";
    }else{
        document.getElementById("button").innerHTML = "Light Theme";
        cssLink.href = "index.css";
    }
}