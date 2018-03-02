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
            alert('empty' + ' ' + field[i].getAttribute("name") + ' ' + 'field');
        } else {
            alert(field[i].getAttribute("name")+":"+field[i].value);
        }
    }
    var textComment = document.querySelector('form textarea[name=message]');
    if (textComment.value == "") {
        alert('empty' + ' ' + textComment.getAttribute("name") + ' ' + 'field');
    }else{
        alert(textComment.value);
    }
    dataSent
}