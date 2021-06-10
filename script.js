const themeButtonInput = document.querySelector('#button');
const bodyTags = document.getElementsByTagName('body');
const navTags = document.getElementsByTagName('nav');
const pTags = document.getElementsByTagName('p');
const aTextTheme = document.getElementsByClassName('target-nav');
const buttonTheme = document.getElementsByClassName('target-button');
const aboutBoxTheme = document.getElementsByClassName('about_box');
const headerTheme = document.getElementsByClassName('target-header');
const projectTheme = document.getElementsByClassName('target-project');
const codeTheme = document.getElementsByClassName('code');
const contactTheme = document.getElementsByClassName('contact-section');
const contactLinksTheme = document.getElementsByClassName('target-contact');


let isClick = false

console.log(themeButtonInput)
console.log(bodyTags)
console.log(navTags)
console.log(pTags)

themeButtonInput.addEventListener("click", () => {
    for (const bodyTag of bodyTags) {
        bodyTag.classList.toggle("body-dark");
        bodyTag.classList.toggle("body-light");
    };
    for (const navTag of navTags) {
        navTag.classList.toggle("nav-light");
        navTag.classList.toggle("nav-dark");
    };
    for(const aText of aTextTheme){
        aText.classList.toggle("a-dark");
        aText.classList.toggle("a-light");
    }
    for(const button of buttonTheme){
        button.classList.toggle("button-dark");
        button.classList.toggle("button-light");
    }
    for(const aHover of aTextTheme){
        aHover.classList.toggle("nav-a-dark")
        aHover.classList.toggle("nav-a-light")
    }
    for(const aboutBox of aboutBoxTheme){
        aboutBox.classList.toggle("about_box_dark")
        aboutBox.classList.toggle("about_box_light")
        aboutBox.classList.toggle("bcca-dark")
        aboutBox.classList.toggle("bcca-light")
    }
    for(const header of headerTheme){
        header.classList.toggle("header-underline-dark")
        header.classList.toggle("header-underline-light")
    }
    for(const project of projectTheme){
        project.classList.toggle("background-dark")
        project.classList.toggle("background-light")
        project.classList.toggle("a-dark")
        project.classList.toggle("a-light")
        project.classList.toggle("project-dark")
        project.classList.toggle("project-light")
    }
    for(const code of codeTheme){
        code.classList.toggle("color-dark")
        code.classList.toggle("color-light")
    }
    for(const contact of contactTheme){
        contact.classList.toggle("background-dark")
        contact.classList.toggle("background-light")
        
    }
    for(const contactLinks of contactLinksTheme){
        contactLinks.classList.toggle("contact-details-dark")
        contactLinks.classList.toggle("contact-details-light")
        contactLinks.classList.toggle("a-dark");
        contactLinks.classList.toggle("a-light");
    }
    if (themeButtonInput.innerHTML === "Dark Theme") {
        themeButtonInput.innerHTML = "Light Theme";
    } else {
        themeButtonInput.innerHTML = "Dark Theme";
    };
});

$("#navbar a").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTo: $("#info").offset().top
    }, 2000);
});

// function themeBackground() {
//     var cssLink = document.getElementById("style_link");
//     console.log(isClick)
//     isClick = !isClick
//     if (isClick){
//         document.getElementById("button").innerHTML = "Dark Theme";
//         cssLink.href = "light.css";
//     }else{
//         document.getElementById("button").innerHTML = "Light Theme";
//         cssLink.href = "index.css";
//     }
// }
