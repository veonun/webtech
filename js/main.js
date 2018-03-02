/*Hover effect on navbar make background white and test black*/
var k = document.querySelectorAll("ul.nav.navbar-nav li a");
for (var i = 0; i < k.length; i++) {
    var listitem = k[i];
    listitem.onmouseover = function () {
        this.style["background-color"] = "white";
        this.style.color = 'black';
    };
    listitem.onmouseout = function () {
        this.style.color = '#FFFFFF';
        this.style["background-color"] = '#383E4C';
    };
}
/*Display all information when click send*/

/*Check for empty form fields and alert if empty*/
var form = document.querySelector('form.contact-form');
form.onsubmit=function () {
    var field = document.getElementsByTagName("input");
    for (var i = 0; i < field.length; i++) {
        if (field[i].value == "") {
            alert('Please fill in the empty' + ' ' + field[i].getAttribute("name") + ' ' + 'field');
        } else {
            alert(field[i].getAttribute("name")+" Value sent is"+field[i].value);
        }
    }

    var textComment = document.querySelector('form textarea[name=message]');
    if (textComment.value == "") {
        alert('Please fill empty' + ' ' + textComment.getAttribute("name") + ' ' + 'field');
    }else{
        alert(textComment.getAttribute("name")+'Value sent is '+textComment.value);
    }
}

/*On click of the green button, change the text of the button to a different text and the color of the button to a different colour
 <a href="#" class="feature-content-link green-btn">button green</a>`*/
var buttonGreen = document.getElementsByClassName("feature-content-link green-btn")[0];
    buttonGreen.onclick = function (){
        console.log(buttonGreen.innerHTML="Change");
        buttonGreen.innerHTML="Yippee"
        console.log(buttonGreen.className="feature-content-link red-btn");
        buttonGreen.className="feature-content-link red-btn"
}

/*Link one of the div buttons to your public Facebook or Github profile (feel free to select any button you live
* <li><a href="http://www.facebook.com/templatemo" class="external" target="_blank">External</a></li>*/
var fb =document.getElementsByClassName("external")[0];
   fb.onclick = function(){
       console.log(fb.href);
       fb.href="https://www.facebook.com/pg/worldrugby7s";
}

