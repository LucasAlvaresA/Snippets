function menuToggle(){
    var menuArea = document.getElementById("menu-area");
/*Forma de resolver com css e javascript
    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
*/
//Forma de resolver com javascript puro
    if(menuArea.style.width == "200px") {
        menuArea.style.width = "0px";
    } else {
        menuArea.style.width = "200px";
    }
}