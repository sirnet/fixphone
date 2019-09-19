$(function(){
    var burgerList = document.getElementById("burger__List");
    var firstItem = document.getElementById("first");
    var secondItem = document.getElementById("second");
    var thirdItem = document.getElementById("third");
    var fourthItem = document.getElementById("fourth");
    var i=0;
    burgerList.onclick =  function(){
        if (i ==0) {
            firstItem.classList.add("visually-hidden");
            secondItem.classList.add("second--active");
            thirdItem.classList.add("third--active");
            fourthItem.classList.add("visually-hidden");
            i=1;
        }
        else {
            firstItem.classList.remove("visually-hidden");
            secondItem.classList.remove("second--active");
            thirdItem.classList.remove("third--active");
            fourthItem.classList.remove("visually-hidden");
            i=0;
        }
    }

    let btnPosition = document.getElementById("btn-position");
    let formAction = document.getElementById("form-action");
    let btnAction = document.getElementById("btn-action");
    let closeForm = document.getElementById("close-form");

    btnPosition.onclick =  function(){
        btnPosition.classList.add("btn-action");
        formAction.classList.add("form__main-action")
    }

    btnAction.onclick =  function(){
        btnPosition.classList.add("btn-action");
        formAction.classList.remove("form__main-action")
}
    closeForm.onclick = function() {
        formAction.classList.remove("form__main-action")
        btnPosition.classList.remove("btn-action");
    }
    

});